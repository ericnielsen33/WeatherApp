var path = require('path');

module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: ['node_modules', 'app'],
        extensions: [' ', '.js', '.jsx'],
        alias: {
            About: path.resolve(__dirname, 'app/components/About.jsx'),
            Examples: path.resolve(__dirname, 'app/components/Examples.jsx'),
            Main: path.resolve(__dirname, 'app/components/Main.jsx'),
            Nav: path.resolve(__dirname, 'app/components/Nav.jsx'),
            openWeatherMap: path.resolve(__dirname, 'app/api/openWeatherMap.jsx'),
            Weather: path.resolve(__dirname, 'app/components/Weather.jsx'),
            WeatherForm: path.resolve(__dirname, 'app/components/WeatherForm.jsx'),
            WeatherMessage: path.resolve(__dirname, 'app/components/WeatherMessage.jsx')
        }
    },
    module: {
        loaders: [
        {
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules | bower_components)/
        }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};
