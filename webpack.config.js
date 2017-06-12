/**
 * Created by mahong on 17/6/12.
 */
const path = require('path');

let env = process.env.NODE_ENV;

module.exports = require(path.resolve(__dirname, 'cfg', env));