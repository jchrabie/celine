import 'zone.js/node';

import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import bootstrap from './src/main.server';
import * as xmlbuilder from  'xmlbuilder';

const routes = [
  '/',
  '/a-propos',
  '/hypothyroidie',
  '/hashimoto',
  '/e-books',
  '/e-books/prendre-soin-de-sa-thyroide',
  '/e-books/hashimoto-comment-dompter-la-maladie',
  '/politique-de-confidentialite',
  '/mentions-legales',
  '/accessibilite',
];

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/celine-naturo/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html'))
    ? join(distFolder, 'index.original.html')
    : join(distFolder, 'index1.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // CSP configuration
  server.use((req, res, next) => {
    // Content Security Policy
    const csp = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://www.google.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' data:;
      font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;
      frame-src 'self' https://trusted-iframe-source.com https://www.instagram.com https://www.payfacile.com;
      connect-src 'self';
      upgrade-insecure-requests;
    `;

    // Report-Only Policy
    const cspReportOnly = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://www.google.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' data:;
      font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;
      frame-src 'self' https://trusted-iframe-source.com https://www.instagram.com https://www.payfacile.com;
      connect-src 'self';
      report-uri /csp-violation-report-endpoint;
    `;

    // Permissions Policy
    const permissionsPolicy = `
      geolocation=(self),
      microphone=(self),
      camera=(self),
      fullscreen=(self),
      payment=(self)
    `;

    res.setHeader('Content-Security-Policy', csp.replace(/\n/g, ' '));
    res.setHeader('Content-Security-Policy-Report-Only', cspReportOnly.replace(/\n/g, ' '));
    res.setHeader('Permissions-Policy', permissionsPolicy.replace(/\n/g, ' '));

    next();
  });

  server.get('/sitemap.xml', (req, res) => {
    const root = xmlbuilder.create('urlset', { version: '1.0', encoding: 'UTF-8' });
    root.att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');
    root.att('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance');
    root.att('xsi:schemaLocation', 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd');

    routes.forEach(route => {
      const url = root.ele('url');
      url.ele('loc', `https://bien-avec-sa-thyroide.com${route}`);
      url.ele('lastmod', `2024-07-20T16:20:48+00:00`);
      url.ele('priority', route === '/' ? 1 : .8);
    });

    res.header('Content-Type', 'application/xml');
    res.send(root.end({ pretty: true }));
  });

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: distFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}


export default bootstrap;
