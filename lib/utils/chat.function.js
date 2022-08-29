// paket pustaka
const {tts, trs} = require("../package/google"),

// tombol respon
{ textReply } = require('./response.chat'),
{ command, template } = require('./command.List');

module.exports = {
    messageFunction: (ctx, bot, Downloaded) => {

        // info bot.
        const botId = ctx.botInfo?.id,
        botName = ctx.botInfo?.first_name,
        botUserName = ctx.botInfo?.username;

        // bot url
        // const toBotBs64 = (text) => `https://t.me/${botUserName}?start=${Buffer.from(text).toString('base64')}`,
        // toBotString = function(unixCode){return Buffer.from(unixCode, 'base64').toString('utf-8')};

        // tipe media.
        const photo = ctx.message?.photo,
        video = ctx.message?.video,
        file = ctx.message?.document,
        caption = ctx.message?.caption;
        
        // cek tipe pesan.
        const isprivate = ctx.message?.chat.type === 'private',
        isadmin = ctx.message?.chat.type === 'supergroup';
        
        // aksi chat.
        const typing = () => bot.telegram.sendChatAction(ctx.chat.id, 'typing'),
        upPhoto = () => bot.telegram.sendChatAction(ctx.chat.id, 'upload_photo'),
        upVideo = () => bot.telegram.sendChatAction(ctx.chat.id, 'upload_video'),
        upVoice = () => bot.telegram.sendChatAction(ctx.chat.id, 'upload_voice'),
        upDocument = () => bot.telegram.sendChatAction(ctx.chat.id, 'upload_document');

        // komponen chat.
        const reply_toMessage = () => {return {reply_to_message_id:ctx.message?.message_id}},
        reply_toMessage_markdown = () => {return {parse_mode: 'markdown', reply_to_message_id:ctx.message?.message_id}},
        reply_markdown_withButton = (arrBtn) => {return {reply_markup: {inline_keyboard: arrBtn}, parse_mode: 'markdown', reply_to_message_id:ctx.message?.message_id}}

        return {
            start: () => typing() && ctx.reply(command.start(botUserName, '4.0'), reply_toMessage()),
            call: {
                Google: {
                    isTranslate: () => typing() && ctx.reply(command.trs(), reply_toMessage_markdown()),
                    isTextToSpeech: () => typing() && ctx.reply(command.tts(), reply_toMessage_markdown()),
                }
            },
            feature: {

                // fitur Google.
                Google: {
                    translate: (langId, text) => trs(langId, text)
                        .then((res) => typing() && ctx.reply(template.trs(res.from, res.to, res.translated.join('')), reply_toMessage_markdown()))
                        .catch((err) => typing() && ctx.reply(err, reply_toMessage_markdown())),
                    textToSpeech: (langId, text) => tts(langId, text)
                        .then((res) => upVoice() && ctx.replyWithVoice({url: res.speech}, reply_toMessage()))
                        .catch((err) => typing() && ctx.reply(err, reply_toMessage_markdown()))
                }
            },
            reload: {
                report: function(){
                    ctx.answerCbQuery()
                    ctx.editMessageText('Terima kasih, masalah ini akan kami perbaiki segera :D')
                    // new Promise((resolve) => setTimeout(resolve, 3000)).then(() => ctx.deleteMessage())
                }
            }
        }
    }
}