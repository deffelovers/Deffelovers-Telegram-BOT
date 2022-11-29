// pemeriksaan conf.txt
const fs = require('fs'), conf = './app/src/env/bot.config.env', devMode = './app/src/env/dev.config.env', proxy=process.env.PROXY_ON;
fs.existsSync(devMode)
    ? require('dotenv').config({path: devMode})
: require('dotenv').config({path: conf})

// konfigurasi komponen & telegram bot.
const { Telegraf } = require('telegraf'),
httpProxyAgent = require('https-proxy-agent'),
bot = proxy

    // konfigurasi bot dengan proxy, ini hanya untuk mode pengembangan!!.
    ? new Telegraf(process.env.BOT_TOKEN, {
        telegram: {
            agent: new httpProxyAgent({
                host: process.env.PROXY_HOST,
                port: process.env.PROXY_PORT
            })
        }
    })
    
    // konfigurasi bot bawaan tanpa proxy.
: new Telegraf(process.env.BOT_TOKEN),
env = require('./src/function/env.function'),
chat = require('./src/function/chat.function');

// cache
const thisBot = {

    // berisi nilai status dari bot (seperti true/false).
    status: process.env.isBotOn,

    // sebuah fungsi untuk mengubah nilai 'isBotOn' dari conf.txt.
    setStatus: (boolean) => env('isBotOn', boolean, conf)
},
Downloaded = {

    // berisi id pengguna yang sedang mengunduh.
    list: new Array(),

    /*
        Sebuah fungsi untuk menambahkan id pengguna ke daftar unduhan,
        fungsi ini memblokir pengguna agar tidak mengunduh lebih dari 1x,
        untuk mencegah bentrokan unduhan yang dapat membuat bot error.
    */
    add: function(usrId){
        return this.list.length > 0
            ? this.list.filter(x => x === usrId)[0]
                ?? this.list.push(usrId)
        : this.list.push(usrId)
    },

    /*
        Sebuah fungsi untuk menghapus id pengguna dalam daftar unduhan,
        agar pengguna bisa mengunduh file kembali.
    */
    remove: function(usrId){
        return this.list.indexOf(usrId)
            ?? this.list.splice(this.list.indexOf(usrId), 1)
    }
};

// pengolah pesan.
bot.on('message', (ctx) => chat(ctx, bot, Downloaded).inMessage())
    .catch((e) => console.log('\x1b[31m', e))
    
bot.action(/[\S]+/, (ctx) => chat(ctx, bot, Downloaded).inCallbackData())
    .catch((e) => console.log('\x1b[31m', e))

// fungsi menjalankan bot
bot.launch()
    .finally(() => console.log('\x1b[36m', 'Launching....'))
    .then(() => proxy
        ? console.log('\x1b[32m','Bot is now running with proxy!!.')
    : console.log('\x1b[32m','Bot is now running.'))
    .catch((e) => console.log('\x1b[31m', e))