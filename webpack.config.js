const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = NODE_ENV === 'development';

const prodPath = path.join(__dirname, '/public');
const devPath = path.join(__dirname, '/dist');

module.exports = {
    entry: {
        app: './main.js'
    },
    context: __dirname,
    output: {
        filename: isDev ? '[name].js' : 'assets/js/[name].[hash:6].min.js',
        path: prodPath,
        publicPath: '/'
    },
    plugins: [
        new webpack.DefinePlugin({ __IS_DEV__ : isDev }),
        new MiniCssExtractPlugin({
            filename: isDev ? '[name].css' : 'assets/css/[name].[hash:6].min.css',
            chunkFilename: isDev ? '[id].css' : '[id].[hash:6].min.css',
            ignoreOrder: false,
        }),
        new HtmlWebpackPlugin({
            template: devPath+'/html/index.html',
        })
    ],
    module:
    {
        rules:
            [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react', 'stage-1']
                        }
                    }
                    ]
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    exclude: /node_modules/,
                    use:
                        [
                            {
                                loader: MiniCssExtractPlugin.loader,
                                options: {
                                    hmr: isDev,
                                },
                            },
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true,
                                    sourceMap: true,
                                    importLoaders: 2,
                                    localIdentName: '[name]--[local]--[hash:base64:6]'
                                }
                            },
                            'sass-loader',
                            'postcss-loader',
                            'resolve-url-loader',
                        ]
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use:
                        [
                            {
                                loader: 'file-loader',
                                options: {
                                    name: isDev ? '[path][name].[ext]' : '[path][name]_[hash:base64:6].[ext]',
                                    useRelativePath: true
                                },
                            },
                            {
                                loader: 'image-webpack-loader',
                                options: {
                                    mozjpeg: {
                                        progressive: true,
                                        quality: 70
                                    }
                                }
                            },
                        ],
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: isDev ? '[path][name].[ext]' : '[path][name]_[hash:base64:6].[ext]',
                            useRelativePath: true
                        }
                    },
                }
            ]
    },
    resolve: {
        modules: [__dirname, 'node_modules'],
        extensions: ['.js', '.jsx'],
    },
    watch: isDev,
    watchOptions: { aggregateTimeout: 100 },
    devtool: isDev ? 'cheap-inline-module-source-map' : false,
    optimization: {
        minimize: !isDev
    }
};

if (!isDev)
{
    const fs = require("fs-extra");
    const imgModels = path.join('assets/img','models');
    const source = path.join(__dirname, imgModels);
    const destination = path.join(prodPath, imgModels);

    fs.removeSync(prodPath);

    fs.mkdirSync(prodPath, err =>
    {
        if (err)
        {
            throw err;
        }
    });

    fs.mkdirSync(path.join(prodPath, 'assets'), err =>
    {
        if (err)
        {
            throw err;
        }
    });

    fs.mkdirSync(path.join(prodPath+'/assets', 'img'), err =>
    {
        if (err)
        {
            throw err;
        }
    });

    fs.mkdirSync(destination, err =>
    {
        if (err)
        {
            throw err;
        }
    });

    fs.copy(source, destination, err =>
    {
        if (err)
        {
            return console.error(err)
        }
        console.log('\nCopy completed!')
    });
}