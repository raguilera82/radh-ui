// Add addon registers here 

import '@storybook/addon-a11y/register';
import '@storybook/addon-actions/register';
import '@storybook/addon-knobs/register';
import '@storybook/addon-notes/register';
import '@storybook/addon-viewport/register';
// ------ Stencil JS Dev Server ------
// DO NOT DELETE 
/**
 * Adding environment to the window object.
 * Needed for socket communication.
 */
import { stencil } from '../package.json';



const {host, port, protocol} = stencil;
window.STENCIL_DEV_HOST = host;
window.STENCIL_DEV_PORT = port;
window.STENCIL_DEV_PROTOCOL = protocol;
window.STENCIL_DEV_ENV = process.env.NODE_ENV;
// ------ Stencil JS Dev Server ------
