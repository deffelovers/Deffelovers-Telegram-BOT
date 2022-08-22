// respon pesan
const { textReply }  = require('./lib/utils/response.chat');

// modul pengolah pesan.
module.exports = {
    inMessage: async (ctx, bot, Downloaded) => {

        // berisi fungsi untuk menjalankan perintah
        const run = require('./lib/utils/chat.function').messageFunction(ctx, bot);

        // info bot.
        const botInfo = ctx.botInfo,
        botId = botInfo.id,
        botName = botInfo.first_name,
        botUserName = botInfo.username;

        // filter pesan.
        const text = ctx.message.text.split(' '),
        cmd = text[0]?.toLowerCase(),
        args = {
            full: text?.slice(1).join(' '),
            intCheck: text?.slice(1).join(' ').match('/'),
            int0: text?.slice(1).join(' ').match('/')?.input.split('/')[0].replace(/\s/g, ''),
            int1: text?.slice(1).join(' ').match('/')?.input.split('/')[1].replace(/^\s|\s\s+/g, '')
        };

        // pengolahan pesan.

        // fitur Basic.
        cmd === '/start' || cmd === `/start${botUserName}`
            ? text.length < 2
                ? run.feature.call.start()
            : run.isFromButton(args.full)

        // fitur Google.
        : cmd === '/trs' || cmd === `/trs${botUserName}`
            ? text.length > 1
                ? args.intCheck
                    ? run.Google.translate(args.int0, args.int1)
                : run.isInvalid('/trs')
            : run.feature.call.Google.isTranslate()
        : cmd === '/tts' || cmd === `/tts${botUserName}`
            ? text.length > 1
                ? args.intCheck
                    ? run.Google.textToSpeech(args.int0, args.int1)
                : run.isInvalid('/tts')
            : run.feature.call.Google.isTextToSpeech()
        : ''
    },
    inQuery: function(){}
}