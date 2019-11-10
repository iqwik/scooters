const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const dev_path = 'dev';
const prod_path = 'app';

module.exports = {
    entry: {
        app: './index.js',
    },
    context: `${__dirname}/${dev_path}`,
    output: {
        path: `${__dirname}/${prod_path}/`,
        filename: NODE_ENV === 'development' ? '[name].js' : 'assets/js/[name].[hash:6].min.js',
        publicPath: '/'
    },

    optimization: {
        minimize: NODE_ENV !== 'development',
    },

    plugins: [
        new webpack.DefinePlugin({ __IS_DEV__ : NODE_ENV === 'development' }),
        new HtmlWebpackPlugin({
            template: NODE_ENV === 'development' ? './html/index.html' : './html/index.php',
            filename: NODE_ENV === 'development' ? 'index.html' : 'index.php',
        }),
        // new MiniCssExtractPlugin({
        //     filename: NODE_ENV === 'development' ? 'css/[name].css' : 'assets/css/[name].[hash:6].css',
        //     chunkFilename: NODE_ENV === 'development' ? 'css/[id].css' : 'assets/css/[id].css',
        // }),
        // NODE_ENV === 'development'
        //     ? null
        //     : new OptimizeCssAssetsPlugin({
        //     filename: 'assets/css/[name].[hash:6].css',
        //     chunkFilename: 'assets/css/[id].css',
        //     cssProcessor: require('cssnano'),
        //     cssProcessorOptions: { discardComments: {removeAll: true } },
        // }),
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: `${__dirname}/${dev_path}`,
                loader: 'babel-loader?presets[]=react&presets[]=es2015&presets[]=stage-1',
                exclude: /node_modules/,
            },
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    // 'style-loader',
                    {
                        loader: "style-loader",
                        options: {
                            singleton: true
                        }
                    },
                    // {
                    //     loader: MiniCssExtractPlugin.loader,
                    //     options: {
                    //         hmr: NODE_ENV === 'development',
                    //     },
                    // },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]--[local]--[hash:base64:5]',
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: { path: './postcss.config.js' },
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|woff|woff2|otf)$/,
                include: `${__dirname}/${dev_path}`,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: NODE_ENV === 'development' ? '[name].[ext]' : 'assets/[path][name]_[hash:6].[ext]',
                            useRelativePath: true
                        },
                    },
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                include: `${__dirname}`,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: NODE_ENV === 'development' ? '[path][name].[ext]' : 'assets/[path][name]_[hash:base64:6].[ext]',
                            useRelativePath: true
                        },
                    },
                ]
            },
        ],
    },

    resolve: {
        modules: [`${__dirname}/${dev_path}`, 'node_modules'],
        extensions: ['.js', '.jsx'],
    },

    watch: NODE_ENV === 'development',
    watchOptions: {
        aggregateTimeout: 100,
    },

    devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : false,
};