var path = require('path');

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
	proxy: {
          '/api': 'http://localhost:9000'
	},
        port: 8194
    }
};
