vite-plugin-istanbul
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
import IstanbulPlugin from 'vite-plugin-istanbul';
```

### [IstanbulPlugin( [ opts ] )](#istanbul-plugin)

Creates the vite plugin from a set of optional plugin options.

**Returns:** Vite Plugin

#### Parameters
*  `opts {IstanbulPluginOptions}` - Object of optional options to pass to the plugin.
*  `opts.cwd {string}` - Optional string of the current working directory, used for the include/exclude patterns. Defaults to `process.cwd()`.
*  `opts.include {string|string[]}` - Optional string or array of strings of glob patterns to include.
*  `opts.exclude {string|string[]}` - Optional string or array of strings of glob patterns to exclude.
*  `opts.extension {string|string[]}` - Optional string or array of strings of extensions to include (dot prefixed like .js or .ts). By default this is set to `['.js', '.cjs', '.mjs', '.ts', '.tsx', '.jsx', '.vue']`.
*  `opts.requireEnv {boolean}` - Optional boolean to require the environment variable (defaults to **VITE_COVERAGE**) to equal `true` in order to instrument the code. Otherwise it will instrument even if env variable is not set. However if `requireEnv` is not set the instrumentation will stop if the environment variable is equal to `false`.
*  `opts.cypress {boolean}` - Optional boolean to change the environment variable to **CYPRESS_COVERAGE** instead of **VITE_COVERAGE**. For ease of use with `@cypress/code-coverage``.
*  `opts.checkProd {boolean}` - Optional boolean to enforce the plugin to skip instrumentation for production environments. Looks at Vite's **isProduction** key from the `ResolvedConfig`.
*  `opts.forceBuildInstrument {boolean}` - Optional boolean to enforce the plugin to add instrumentation in build mode. Defaults to false.
*  `opts.nycrcPath {string}` - Path to specific nyc config to use instead of automatically searching for a nycconfig. This parameter is just passed down to `@istanbuljs/load-nyc-config`.

Notes
--------------------------

As of v2.1.0 you can toggle the coverage off by setting the env variable `VITE_COVERAGE='false'`, by default it will always instrument the code. To require the explicit definition of the variable, set the option `requireEnv` to **true**.

This plugin also requires the Vite configuration [build.sourcemap](https://vitejs.dev/config/#build-sourcemap) to be set to either **true**, **'inline'**, **'hidden'**.
But the plugin will automatically default to **true** if it is missing in order to give accurate code coverage.
The plugin will notify when this happens in order for a developer to fix it. This notification will show even when the plugin is disabled by e.g `opts.requireEnv`, `VITE_COVERAGE=false`. This is due to a limitation of the API for this kind of feature.



This table is a quick TLDR for the rest of this readme and there are more advanced docs available.

| Option name | Description | Type | Default |
| ----------- | ----------- | ---- | ------- |
| `all` | Whether or not to instrument all files (not just the ones touched by your test suite) | `Boolean` | `false` |
| `check-coverage` | Check whether coverage is within thresholds, fail if not | `Boolean` | `false` |
| `extension` | List of extensions that nyc should attempt to handle in addition to `.js` | `Array<String>` | `['.js', '.cjs', '.mjs', '.ts', '.tsx', '.jsx']` |
| `include` | See [selecting files for coverage] for more info | `Array<String>` | `['**']`|
| `exclude` | See [selecting files for coverage] for more info | `Array<String>` | [list](https://github.com/istanbuljs/schema/blob/master/default-exclude.js) |
| `reporter` | May be set to a [built-in coverage reporter](https://istanbul.js.org/docs/advanced/alternative-reporters/) or an npm package (dev)dependency | `Array<String>` | `['text']` |
| `report-dir` | Where to put the coverage report files | `String` | `./coverage` |
| `skip-full` | Don't show files with 100% statement, branch, and function coverage | `Boolean` | `false` |
| `temp-dir` | Directory to output raw coverage information to | `String` | `./.nyc_output` |



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
