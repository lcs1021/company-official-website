const path = require('path')
const webpack = require('webpack')

module.exports = {
    // 入口
    entry: "./src/main.js",
    // 输出
    output:{
        // 文件的输出路径
        path: path.resolve(__dirname,"dist"),
        // 文件名
        filename: 'main.js',
    },
    // 加载器
    module:{
        rules:[
            // loader的配置
        ],
    },
    plugins:[
        // plugin的配置
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            
        })
    ],
    mode: 'development',
    externals: {
        "BMap": "BMap"
      },
}