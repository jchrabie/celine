/***************************************************************************************************
 * BROWSER POLYFILLS
 */

/** IE9, IE10 and IE11 requires all of the following polyfills. **/
import 'core-js/es/reflect';
import 'core-js/stable';

/**
 * This is required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox, and Opera. https://caniuse.com/web-animation
 **/
import 'web-animations-js';

/** Evergreen browsers require these. **/
import 'zone.js/dist/zone';  // Included with Angular CLI.

/** 
 * To enable polyfills for modern browsers. Uncomment if needed.
 * import 'core-js/proposals/reflect-metadata';
 */

/***************************************************************************************************
 * APPLICATION IMPORTS
 */

/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 
/**
 * Add global to window, assigning the value of window itself.
 * This is required for supporting certain packages like @angular/material
 */
(window as any).global = window;
