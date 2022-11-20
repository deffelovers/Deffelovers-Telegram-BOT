// pemeriksaan conf.txt
const fs = require('fs'), conf = 'bot.config.env', devMode = 'dev.config.env'
fs.existsSync(devMode)
    ? require('dotenv').config({path: devMode})
: require('dotenv').config({path: conf})

// konfigurasi komponen & telegram bot.
const {Telegraf} = require('telegraf'),
bot = new Telegraf(process.env.BOT_TOKEN),
env = require('./lib/utils/env'),
chat = require('./lib/utils/chat.js');

// cache
const thisBot = {

    // berisi nilai status dari bot (seperti true/false).
    status: process.env.isBotOn,

    // sebuah fungsi untuk mengubah nilai 'isBotOn' dari conf.txt.
    setStatus: (boolean) => env('isBotOn', boolean)
},
Downloaded = {

    // berisi id pengguna yang sedang mengunduh.
    list: new Array(),

    /*
        Sebuah fungsi untuk menambahkan id pengguna ke daftar unduhan,
        fungsi ini memblokir pengguna agar tidak mengunduh lebih dari 1x,
        untuk mencegah bentrokan unduhan yang dapat membuat bot error.
    */
    add: (usrId) => this,
    //  this.list.length > 0
    //         ? this.list.filter(x => x === usrId)[0]
    //             ?? this.list.push(usrId)
    //     : this.list.push(usrId),

    /*
        Sebuah fungsi untuk menghapus id pengguna dalam daftar unduhan,
        agar pengguna bisa mengunduh file kembali.
    */
    remove: (usrId) => this.list.indexOf(usrId)
            ?? this.list.splice(this.list.indexOf(usrId), 1)
};

// pengolah pesan.
// bot.on('message', (ctx) => chat.process(ctx, bot, Downloaded).inMessage())
//     .catch((e) => console.log('\x1b[31m', e))
    
// bot.action(/[\S]+/, (ctx) => chat.process(ctx, bot, Downloaded).inCallbackData())
//     .catch((e) => console.log('\x1b[31m', e))

// // fungsi menjalankan bot
// bot.launch()
//     .finally(() => console.log('\x1b[36m', 'Launching....'))
//     .then(() => console.log('\x1b[32m','Bot is now running.'))
//     .catch((e) => console.log('\x1b[31m', e))




console.log(Downloaded.list);

console.log(

Downloaded.add(123)


);

// console.log(Downloaded.add(123));
// console.log(Downloaded.list);












    // console.log('\x1b[31m', e)
// if(!bot.token) return console.log('ups no token!!');

// bot.token
//     ? console.log('yes token')
//     : console.log('no token')
//     ?? console.log('yes');
// bot.launch()??console.log('lol go ahead');

// process.once('SIGINT', () => bot.stop('SIGINT'))
// process.once('SIGTERM', () => bot.stop('SIGTERM'))