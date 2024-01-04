import {Plugin, createLogger} from 'vite';
import picocolors from 'picocolors';
const {green} = picocolors;
export interface canyonPluginOptions {
  include?: string | string[];
  exclude?: string | string[];
  extension?: string | string[];
  requireEnv?: boolean;
  cypress?: boolean;
  checkProd?: boolean;
  forceBuildInstrument?: boolean;
  cwd?: string;
  nycrcPath?: string;
}

// Custom extensions to include .vue files
const DEFAULT_EXTENSION = ['.js', '.cjs', '.mjs', '.ts', '.tsx', '.jsx', '.vue'];
const PLUGIN_NAME = 'vite:canyon';

function resolveFilename(id: string): string {
  // To remove the annoying query parameters from the filename
  const [filename] = id.split('?vue');
  return filename;
}

function shouldInstrument(filename: string) {
  return DEFAULT_EXTENSION.some(ext => filename.endsWith(ext));
}

function instrumentedData() {
  const canyon = {
    name: 'zt'
  }
  return `(new Function("return this")()).__canyon__ = ${JSON.stringify(canyon)}`;
}

export default function canyonPlugin(opts: canyonPluginOptions = {}): Plugin {
  const logger = createLogger('info', {prefix: 'vite-plugin-canyon'});
  const canyonStr = instrumentedData();
  logger.warn(`${PLUGIN_NAME}> ${green(`instrumented data: ${canyonStr}`)}`);
  return {
    name: PLUGIN_NAME,
    enforce: 'post',
    transform(srcCode, id, options) {
      const newCode = `${canyonStr}\n${srcCode}`
      const filename = resolveFilename(id);
      if (shouldInstrument(filename)) {
        return {
          code: newCode,
          map: null,
        };
      }
    },
  };
}
