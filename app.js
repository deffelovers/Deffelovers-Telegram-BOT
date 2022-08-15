// konfigurasi env
require('dotenv').config({path: 'conf.txt'});

// cache
const isBotOn = [],
isDownloaded = [];

// konfigurasi komponen & telegram bot
const {Telegraf} = require('telegraf'),
bot = new Telegraf(process.env.BOT_TOKEN),

// konfigurasi pesan
chat = require('./chat.js');

// pengolah pesan
bot.on('message', (ctx) => chat.inMessage(ctx, bot))

// bot.launch()