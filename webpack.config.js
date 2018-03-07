var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        main: './main.js',
        vendor: ['lodash']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                /*processed in reverse array order*/
                use: ['style-loader', 'css-loader']
            },

            {
                test: /\.js$/,
                exclude: [/node_mudules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', {
                                    modules: false
                                    //turn off module transpilling to allow tree shaking in webpack
                                    //webpack2+已经支持 import export，不需要babel来转换，babel会转化成require，是synchronize，不适合client side使用
                                }]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js',
            minChunks: Infinity
        }),
    ],
};
