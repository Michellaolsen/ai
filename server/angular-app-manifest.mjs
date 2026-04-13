
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ai/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ai"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 47760, hash: '1fafad318ff2b8195ec05ce3bda2f131bf6d82f0e51a7b51b772bce22afe41f7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 47671, hash: 'bb8b9e4c91601422438fe81f61d6219f92ae8c1b403cdd245ab94b2528e80d22', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 66647, hash: '8e773d6265b3d5b45433c775179e547d0f650ab2fad9c2e086c8a3fba5405580', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CGOCUUUN.css': {size: 649, hash: '1GxggZ347TQ', text: () => import('./assets-chunks/styles-CGOCUUUN_css.mjs').then(m => m.default)}
  },
};
