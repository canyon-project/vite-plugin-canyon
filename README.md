vite-plugin-canyon
==========================


A Vite plugin to configure canyon variables for repository analysis at build time.

Installation
--------------------------
`npm i -D vite-plugin-canyon`

or if you use yarn

`yarn add -D vite-plugin-canyon`

API
--------------------------

```js
import CanyonPlugin from 'vite-plugin-canyon';
```

### [CanyonPlugin( [ opts ] )](#canyon-plugin)

Creates the vite plugin from a set of optional plugin options.

**Returns:** Vite Plugin

#### Parameters
*  `opts {CanyonPluginOptions}` - Object of optional options to pass to the plugin.
*  `opts.commitSha {string}` - This should not commonly be used. Manually specify the commit SHA.
*  `opts.projectID {string}` - This should not commonly be used. Manually specify the project ID.
*  `opts.branch {string}` - This should not commonly be used. Manually specify the branch.
*  `opts.dsn {string}` - This should not commonly be used. Change the upload host. Defaults to https://canyon.io.
*  `opts.reporter {string}` - The Canyon upload token which can be found in the settings tab of the repository on Canyon.
*  `opts.instrumentCwd {string}` - Optional string of the current working directory. Defaults to `process.cwd()`.

Notes
--------------------------

Plugin configuration greater than environment variables.

Examples
--------------------------

To use this plugin define it using vite.config.js

```js
// vite.config.js
import istanbul from 'vite-plugin-istanbul';
import canyon from 'vite-plugin-canyon';

export default {
  open: true,
  port: 3000,
  plugins: [
    istanbul(),
    canyon({
      "commitSha": "65b05e197834740015c93ee7640777a90683cab5",
      "projectID": "230614",
      "branch": "dev",
      "dsn": "https://canyon.io",
      "reporter": "canyon-upload-token",
      "instrumentCwd": "/path/project"
    })
  ],
};
```

License
--------------------------

[MIT](./LICENSE)
