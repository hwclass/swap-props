import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

const babelConfig = {
  'presets': [
    ['env', {
      'targets': {
        'browsers': ['last 2 versions']
      },
      'loose': true
    }]
  ]
};

export default {
  input: 'src/index.js',
  output: {
    format: 'umd',
    name: 'index',
    sourcemap: true,
    file: 'dist/bundle.js'
  },
  plugins: [
    babel(babelrc({
      addExternalHelpersPlugin: false,
      config: babelConfig,
      exclude: 'node_modules/**'
    }))
  ]
};