// pustaka lokal
// const {} = require()

// list perintah.
const {start} = require('./lib/utils/commandList');

// modul pengolah pesan.
module.exports = {
    inMessage: async (ctx, bot, Downloaded) => {

        // info bot.
        const botInfo = ctx.botInfo,
        botId = botInfo.id,
        botName = botInfo.first_name,
        botUserName = botInfo.username;

        // tipe media.
        const photo = ctx.message.photo,
        video = ctx.message.video,
        file = ctx.message.document,
        caption = ctx.message.caption;
        
        // cek tipe pesan.
        const isprivate = ctx.message.chat.type === 'private',
        isadmin = ctx.message.chat.type === 'supergroup';

        // filter pesan.
        const text = ctx.message.text,
        cmd = text?.split(' ')[0].toLowerCase();

        // aksi chat.
        const typing = () => bot.telegram.sendChatAction(ctx.chat.id, 'typing'),
        upPhoto = () => bot.telegram.sendChatAction(ctx.chat.id, 'upload_photo'),
        upVideo = () => bot.telegram.sendChatAction(ctx.chat.id, 'upload_video'),
        upVoice = () => bot.telegram.sendChatAction(ctx.chat.id, 'upload_voice'),
        upDocument = () => bot.telegram.sendChatAction(ctx.chat.id, 'upload_document');

        // pengolahan pesan.
        cmd === '/start' || cmd === `/start${botUserName}`
            ? typing() && ctx.reply(start(botName, '4.0'))

        // fitur Google
        : cmd === '/trs' || cmd === `/trs${botUserName}`
    },
    inQuery: function(){}
}