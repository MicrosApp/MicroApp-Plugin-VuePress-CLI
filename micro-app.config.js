'use strict';

const config = {};

// 兼容两种启动方式
if (!process.env.MICRO_APP_VUEPRESS_RUNNING) {
    config.plugins = [ __dirname ];
}

module.exports = config;
