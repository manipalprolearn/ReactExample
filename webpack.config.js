const path = require("path"); 
const webpack = require("webpack"); 

module.exports = {
    //application entry point 
    entry: "./src/index.js",
    //set the development mode 
    mode: "development",
    //assign the modules 
    module: {
        //configure rules 
        rules: [
            //first rule for processing .js, .jsx files 
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets:["env"]},
            },
            //second rule for processing .css files 
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    //resolve the listed extensions 
    resolve: { extensions: ['*', '.js', '.jsx'] },
    //the output from the web-pack processor
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    //configure the dev server
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true
    },
    //list all additional plug-ins required by webpack 
    plugins:[new webpack.HotModuleReplacementPlugin()]
}