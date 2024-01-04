vite-plugin-canyon
==========================


一个 Vite 插件，用于配置canyon变量，以便在构建时进行仓库分析。

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
*  `opts.dsn {string}` - This should not commonly be used. Manually specify the DSN.
*  `opts.reporter {string}` - This should not commonly be used. Manually specify the reporter.
*  `opts.reportID {string}` - This should not commonly be used. Manually specify the report ID.
*  `opts.instrumentCwd {string}` - Optional string of the current working directory, used for the include/exclude patterns. Defaults to `process.cwd()`.

Notes
--------------------------

As of v2.1.0 you can toggle the coverage off by setting the env variable `VITE_COVERAGE='false'`, by default it will always instrument the code. To require the explicit definition of the variable, set the option `requireEnv` to **true**.

This plugin also requires the Vite configuration [build.sourcemap](https://vitejs.dev/config/#build-sourcemap) to be set to either **true**, **'inline'**, **'hidden'**.
But the plugin will automatically default to **true** if it is missing in order to give accurate code coverage.
The plugin will notify when this happens in order for a developer to fix it. This notification will show even when the plugin is disabled by e.g `opts.requireEnv`, `VITE_COVERAGE=false`. This is due to a limitation of the API for this kind of feature.






Examples
--------------------------

要使用此插件，请使用 vite.config.js 进行定义

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
      "commitSha": "axx",
      "projectID": "xxxxx",
      "branch": "masterfffffff",
      "dsn": "sfsdf",
      "reporter": "sdfsdf",
      "instrumentCwd": "/Users/zhangtao/Desktop/vite-project11111"
    })
  ],
};
```

License
--------------------------

[MIT](./LICENSE)
