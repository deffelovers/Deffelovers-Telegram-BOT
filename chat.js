// respon pesan
const { textReply }  = require('./lib/utils/response.chat');

// modul pengolah pesan.
module.exports = {
    process: (ctx, bot, downloaded) => {

        // berisi fungsi untuk menjalankan perintah
        const run = require('./lib/utils/chat.function').messageFunction(ctx, bot, downloaded);

        // info bot.
        const botInfo = ctx.botInfo,
        botId = botInfo.id,
        botName = botInfo.first_name,
        botUserName = botInfo.username;

        // filter pesan.
        const text = ctx.message?.text.split(' ')??ctx.match.input.split(' '),
        cmd = {
            int: text?.[0].match(/(\/\w+\@?\w+)\.(\w+)?/)?.[1]??text?.[0],
            id: text?.[0].match(/(\/\w+\@?\w+)\.(\w+)?/)?.[2]
        } 
        args = text?.slice(1).join(' ')//.replace(/^\s|\s\s+/g, '\n\n');

        return {

            // pengolahan pesan.
            inMessage: () => {

                // fitur Basic.
                cmd.int === '/start' || cmd.int === `/start@${botUserName}`
                    ? run.start()
        
                // fitur Google.
                : cmd.int === '/trs' || cmd.int === `/trs@${botUserName}`
                    ? cmd.id
                        ? run.feature.Google.translate(cmd.id, args)
                    : run.call.Google.isTranslate()
                : cmd.int === '/tts' || cmd.int === `/tts@${botUserName}`
                    ? cmd.id
                        ? run.feature.Google.textToSpeech(cmd.id, args)
                    : run.call.Google.isTextToSpeech()
                : cmd.int === '/tes'
                    ? ctx.reply('is ur button', {reply_markup: {inline_keyboard: [[{text: 'Laporkan masalah', callback_data: '/report'}]]}})
                : console.log('none');
            },
            inCallbackData: () => {
                cmd.int === '/report'
                    ? run.reload.report()
                : ''
            },
            inQuery: () => {}
        }
    }
}