import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'radh-ui',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  copy: [
    {
      src: "**/i18n/*.json",
      dest: "assets/i18n"
    }
  ],
};
