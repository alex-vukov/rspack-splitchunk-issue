const rspack = require('@rspack/core');
const { RsdoctorRspackPlugin } = require('@rsdoctor/rspack-plugin');

const config = {
  mode: 'production',
  entry: {
    main: './src/index.tsx',
  },
  output: {
    filename: '[name].[contenthash].js',
    clean: true,
  },
  resolve: {
    extensions: ['...', '.ts', '.tsx', '.jsx'],
  },
  experiments: {
    css: true,
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            sourceMap: true,
            jsc: {
              parser: {
                syntax: 'typescript',
              },
              transform: {
                react: {
                  runtime: 'automatic',
                },
              },
            },
          },
        },
        type: 'javascript/auto',
      },
      {
        test: /\.(png|svg|jpg)$/,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    splitChunks: {
      //maxSize: 500000,
      chunks: 'all',
    },
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './index.html',
    }),
    new RsdoctorRspackPlugin({
      supports: {
        generateTileGraph: true,
      }
    }),
  ],
};
module.exports = config;