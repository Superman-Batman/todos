/**
 * Created by mahong on 17/6/12.
 */
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./cfg/dev.js');
const {dfPath} = require('./cfg/default.js');
const express = require('express');

let app = new express();
let port = 8088;
config.entry.unshift('webpack-hot-middleware/client?reload=true');

let compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {publicPath:'/assets/'}));
app.use(webpackHotMiddleware(compiler));

app.get('/',(req,res)=>{ res.sendFile(dfPath.src + '/index.html')});
app.listen(port, (error)=>{
    if(!error){
        console.log('');
    }
});