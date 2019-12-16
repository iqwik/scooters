module.exports = {
    plugins: [
        require('postcss-flexbugs-fixes'),
        require('autoprefixer'),
        require('postcss-modules-values'),
        require('cssnano')({
            preset: [
                'default', {
                    discardComments: {
                        removeAll: true,
                    }
                }
            ]
        })
    ]
}