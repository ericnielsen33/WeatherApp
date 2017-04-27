var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
    new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery'
    })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: ['node_modules', 'app'],
        extensions: [' ', '.js', '.jsx', 'css'],
        alias: {
            appCSS: path.resolve(__dirname, 'app/styles/app.css'),
            About: path.resolve(__dirname, 'app/components/About.jsx'),
            ErrorModal: path.resolve(__dirname, 'app/components/ErrorModal.jsx'),
            Examples: path.resolve(__dirname, 'app/components/Examples.jsx'),
            Home: path.resolve(__dirname, 'app/components/Home.jsx'),
            Layout: path.resolve(__dirname, 'app/components/Layout.jsx'),
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
