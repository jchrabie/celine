import 'zone.js/node';

import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import * as xmlbuilder from 'xmlbuilder';

import bootstrap from './src/main.server';
import { headers } from 'src/app/shared/constants/header.constants';

const BASE_URL = 'https://www.bien-avec-sa-thyroide.com';

const routes = headers.filter(
  ({ external, canonical }) =>
    !external && canonical
);

/**
 * The Express app is exported so that it can be used by serverless Functions.
 */
export function app(): express.Express {
  const server = express();
  const distFolder = join(
    process.cwd(),
    'dist/celine-naturo/browser'
  );

  const adminFolder = join(
    distFolder,
    'admin'
  );

  const indexHtml = existsSync(
    join(distFolder, 'index.original.html')
  )
    ? join(distFolder, 'index.original.html')
    : join(distFolder, 'index1.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', distFolder);

  /**
   * Decap CMS
   *
   * /admin and /admin/ must be served directly by Express.
   * They must not reach Angular SSR.
   */
  server.get('/admin', (_req, res) => {
    res.sendFile(
      join(adminFolder, 'index.html')
    );
  });

  server.get('/admin/', (_req, res) => {
    res.sendFile(
      join(adminFolder, 'index.html')
    );
  });

  server.use(
    '/admin',
    express.static(adminFolder)
  );

  /**
   * Serve static files from /browser.
   */
  server.get(
    '*.*',
    express.static(distFolder, {
      maxAge: '1y'
    })
  );

  /**
   * Sitemap.
   */
  server.get('/sitemap.xml', (_req, res) => {
    const root = xmlbuilder.create('urlset', {
      version: '1.0',
      encoding: 'UTF-8'
    });

    root.att(
      'xmlns',
      'http://www.sitemaps.org/schemas/sitemap/0.9'
    );

    routes.forEach(({ canonical }) => {
      const url = root.ele('url');

      url.ele('loc', canonical);
    });

    res
      .type('application/xml')
      .send(root.end({ pretty: true }));
  });

  /**
   * All regular routes use the Angular engine.
   */
  server.get('*', (req, res, next) => {
    const {
      protocol,
      originalUrl,
      baseUrl,
      headers
    } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: distFolder,
        providers: [
          {
            provide: APP_BASE_HREF,
            useValue: baseUrl
          }
        ]
      })
      .then(html => res.send(html))
      .catch(err => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  const server = app();

  server.listen(port, () => {
    console.log(
      `Node Express server listening on http://localhost:${port}`
    );
  });
}

export default bootstrap;