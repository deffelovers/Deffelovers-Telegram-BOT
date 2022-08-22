// konfigurasi env.
require('dotenv').config({path: 'conf.txt'});

// konfigurasi komponen & telegram bot.
const {Telegraf} = require('telegraf'),
bot = new Telegraf(process.env.BOT_TOKEN),
env = require('./lib/utils/env'),
//
chat = require('./chat.js');


// cache
const thisBot = {

    // berisi nilai status dari bot (seperti true/false).
    status: process.env.isBotOn,

    // sebuah fungsi untuk mengubah nilai 'isBotOn' dari conf.txt.
    setStatus: (boolean) => env('isBotOn', boolean)
},
Downloaded = {

    // berisi id pengguna yang sedang mengunduh.
    list: [],

    /*
        Sebuah fungsi untuk menambahkan pengguna yang sedang mengunduh,
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
        Sebuah fungsi untuk menghapus pengguna yang sedang mengunduh,
        agar pengguna bisa mengunduh file kembali.
    */
    remove: function(usrId){
        return this.list.indexOf(usrId)
            ?? this.list.splice(this.list.indexOf(usrId), 1)
    }
};


// pengolah pesan.
bot.on('message', (ctx) => chat.inMessage(ctx, bot, Downloaded))

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))