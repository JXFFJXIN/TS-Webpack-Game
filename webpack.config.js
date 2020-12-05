const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: "./src/index.ts",//入口文件
    output:{// 出口文件
        path:path.resolve("./dist"),// 路径，需要绝对路径
        filename:"script/bundle.js"// 出口文件名
    },
    plugins:[// 添加插件
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        }),
        new CleanWebpackPlugin()
    ],
    module:{
        rules:[// 模块规则
            // 将test值中的文件交给loader值中的加载器处理
            {test:/.ts$/,use:{
                loader:"ts-loader",
                options:{
                    transpileOnly:true
                }
            }}
        ]
    },
    resolve:{// 配置解析的扩展名
        extensions:[".js",".ts"]
    }
}