const webpack = require('webpack');
const target = '/dist/';

function createConfig({name, filename = name, source, path = ''}) {
    return {
        entry: ['babel-polyfill', `./src/${source}`],
        output: {
            path: __dirname + target + path,
            filename: `${filename}.js`,
            library: name,
            libraryTarget: 'umd',
            umdNamedDefine: true
        },
        resolve: {
            modules: [
                'node_modules',
                'src/',
            ],
        },
        module: {
            loaders: [
                {
                    test: /(\.jsx|\.js)$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                }
            ]
        }
    };
}

module.exports = [
    createConfig({name: 'HideEmail', filename: 'hideemail', source: 'index'}),
];
