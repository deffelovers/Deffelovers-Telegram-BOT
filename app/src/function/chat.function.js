// list perintah
const cmdl = require("./cmdList.function");


module.exports = (ctx, bot, Downloaded) => {

    // info bot.
    const botInfo = ctx.botInfo,
    botId = botInfo.id,
    botName = botInfo.first_name,
    botUserName = botInfo.username;

    // cek tipe media.
    const photo = ctx.message?.photo,
    video = ctx.message?.video,
    file = ctx.message?.document,
    caption = ctx.message?.caption;

    // cek tipe pesan.
    const isprivate = ctx.message?.chat.type === 'private',
    isadmin = ctx.message?.chat.type === 'supergroup';

    // filter pesan.
    const text = ctx.message?.text?.split(' ')
        ?? ctx.match.input?.split(' '),
    cmd = text?.[0].match(/(\/\w+\@?\w+)\.(\w+)?/)?.[1]
        ?? text?.[0],
    cmdSplit = text?.[0].match(/(\/\w+\@?\w+)\.(\w+)?/)?.[2],
    msgReply = ctx.message.reply_to_message,
    textSource = text?.slice(1).join(' ');//.replace(/^\s|\s\s+/g, '\n\n');

    // aksi chat.
    const typing = () => bot.telegram.sendChatAction(ctx.chat.id, 'typing'),
    upPhoto = () => bot.telegram.sendChatAction(ctx.chat.id, 'upload_photo'),
    upVideo = () => bot.telegram.sendChatAction(ctx.chat.id, 'upload_video'),
    upVoice = () => bot.telegram.sendChatAction(ctx.chat.id, 'upload_voice'),
    upDocument = () => bot.telegram.sendChatAction(ctx.chat.id, 'upload_document');

    // komponen chat.
    const reply_message = () => {return {reply_to_message_id:ctx.message?.message_id}},
    reply_markdown = () => {return {parse_mode: 'markdownV2', reply_to_message_id:ctx.message?.message_id}},
    reply_markdown_with_button = (arrBtn) => {return {reply_markup: {inline_keyboard: arrBtn}, parse_mode: 'markdownV2', reply_to_message_id:ctx.message?.message_id}}    

    // pengolahan pesan.
    return {
        inQuery: () => {},
        inMessage: async () => 
            cmd === '/start' || cmd === `/start@${botUserName}`
                ? typing() && ctx.reply(cmdl.menu, reply_toMessage_markdown)


            // fitur group
            : cmd === '/kick' || cmd === `/kick@${botUserName}`
                ? console.log(reply_message())
            : ''
            ,
        inCallbackData: () => {}
    }
}





























































// // respon pesan
// const { textReply }  = require('./response.chat');

// // modul pengolah pesan.
// module.exports = {
//     process: (ctx, bot, downloaded) => {

//         // berisi fungsi untuk menjalankan perintah
//         const run = require('./chat.function').messageFunction(ctx, bot, downloaded);

        // // info bot.
        // const botInfo = ctx.botInfo,
        // botId = botInfo.id,
        // botName = botInfo.first_name,
        // botUserName = botInfo.username;

        // // filter pesan.
        // const text = ctx.message?.text.split(' ')??ctx.match.input.split(' '),
        // cmd = {
        //     int: text?.[0].match(/(\/\w+\@?\w+)\.(\w+)?/)?.[1]??text?.[0],
        //     id: text?.[0].match(/(\/\w+\@?\w+)\.(\w+)?/)?.[2]
        // } 
        // args = text?.slice(1).join(' ')//.replace(/^\s|\s\s+/g, '\n\n');

//         return {

//             // pengolahan pesan.
//             inMessage: () => {

//                 // fitur Basic.
//                 cmd.int === '/start' || cmd.int === `/start@${botUserName}`
//                     ? run.start()
        
//                 // fitur Google.
//                 : cmd.int === '/trs' || cmd.int === `/trs@${botUserName}`
//                     ? cmd.id
//                         ? run.feature.Google.translate(cmd.id, args)
//                     : run.call.Google.isTranslate()
//                 : cmd.int === '/tts' || cmd.int === `/tts@${botUserName}`
//                     ? cmd.id
//                         ? run.feature.Google.textToSpeech(cmd.id, args)
//                     : run.call.Google.isTextToSpeech()
//                 : cmd.int === '/tes'
//                     ? ctx.reply('is ur button', {reply_markup: {inline_keyboard: [[{text: 'Laporkan masalah', callback_data: '/report'}]]}})
//                 : console.log('none');
//             },
//             inCallbackData: () => {
//                 cmd.int === '/report'
//                     ? run.reload.report()
//                 : ''
//             },
//             inQuery: () => {}
//         }
//     }
// }