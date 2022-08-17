// konfigurasi env
require('dotenv').config({path: 'conf.txt'});

// konfigurasi komponen & telegram bot
const {Telegraf} = require('telegraf'),
bot = new Telegraf(process.env.BOT_TOKEN),
env = require('./lib/utils/env'),
//
chat = require('./chat.js');


// cache
const thisBot = {

    // berisi nilai status dari bot (seperti on/off)
    status: process.env.isBotOn,

    // sebuah fungsi untuk mengubah nilai 'isBotOn' dari conf.txt
    setStatus: (boolean) => env('isBotOn', boolean)
},
isDownloaded = [];


// pengolah pesan
bot.on('message', (ctx) => chat.inMessage(ctx, bot))

bot.launch()
// thisBot.setStatus(true)
// console.log(thisBot.status);