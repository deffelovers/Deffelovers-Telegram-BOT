// pustaka lokal
// const {} = require()

// modul pengolah pesan
module.exports = {
    inMessage: (ctx, bot) => {

        // tipe media
        const photo = ctx.message.photo,
        video = ctx.message.video,
        file = ctx.message.document,
        caption = ctx.message.caption;
        
        // cek tipe pesan
        const isprivate = ctx.message.chat.type === 'private',
        isadmin = ctx.message.chat.type === 'supergroup';

        // aksi chat
        const typing = () => bot.telegram.sendChatAction(ctx.chat.id, 'typing'),
        upPhoto = () => bot.telegram.sendChatAction(ctx.chat.id, 'upload_photo'),
        upVideo = () => bot.telegram.sendChatAction(ctx.chat.id, 'upload_video'),
        upVoice = () => bot.telegram.sendChatAction(ctx.chat.id, 'upload_voice'),
        upDocument = () => bot.telegram.sendChatAction(ctx.chat.id, 'upload_document');

        // pengolahan pesan
        console.log(ctx);
    },
    inQuery: function(){}
}