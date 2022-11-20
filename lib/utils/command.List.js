/**
 * 
 * 
 * 
 *                          Pusing yak?, sama xixix
 * 
 * 
 * 
 */



// Tema menu
const themes = {
    'classic': ['━━━━━━━━『#』━━━━━━━━', '━━━━', '┓', '┛'],
    'custom': []
},

menuStyle = {
    'commandList': (theme, output) => `${themes[theme][0]}\n${output}\n${themes[theme][0]}`,
    'helpCommand': (theme, output) => `${themes[theme][0]}\n${output.cmd}\n${themes[theme][1]}\n${output.des}\n\n${output.exa}\n${themes[theme][0]}`
},
menuType = (theme, type, object) => menuStyle[type](theme, object)
    ?? (function(){throw new Error('tidak ada tipe menu yang cocok!')}()),


listStyle = {
    'arrow': (output) => output.map(e => `${e?.name}\n${e.item?.map(e => `➜ ${e}`).join('\n')}`),
    'dot': (output) => output.map(e => `${e?.name}\n${e.item?.map(e => `• ${e}`).join('\n')}`)
},
listType = (style, output) => listStyle[style]?.(output)
    ?? (function(){throw new Error('tidak ada gaya list yang cocok!')}())

/*
   
*/
generate = ({input}) => {
    return {
        list: ({style}) => listType(style, input),
        menu: ({theme, type}) => menuType(theme, type, input)
    }
};

const menu = {
    // owner bot menu

    // menu
    start: generate({
        input: [
            {name: 'bot owner', item: ['/log', '/menu', '/anjay']},
            {name: 'menu', item: ['/start', '/static', '/profile']},
            {name: 'group chat', item: ['/ireng', '/menu', '/anjay']},
        ]
    }).list({style: 'dot'}).join('\n\n')
};



module.exports = {
    // owner bot menu

    // menu
    menu: menu.start,

    // 

}

// console.log(

//     // menu.start
// generate({
//     input: {
//         cmd: 'tes',
//         des: 'ssss\nsss',
//         exa: 'ytta'
//     }
// }).menu({
//     theme: 'classic',
//     type: 'helpCommand'
// })

// );

// botMenu = {
//     // bot owner
//     log: generate({
//         input: {
//             command: '',
//             description: '',
//             example: ''
//         }
//     })({theme: 'classic', type: 'helpCommand'})
//     ,
    
//     // input: {command: '', captions: '', example: ''}
//     // menu: generate({
//     //     object: {command: '', captions: '', example: ''}
//     // }).menu({theme: 'classic', type: 'helpCommand'}),
// }


// console.log(
//     botMenu.log
    
    // generate({
    //     object: generate({
            // object: [
            //     {name: 'bot owner', item: ['/log', '/menu', '/anjay']},
            //     {name: 'menu', item: ['/start', '/static', '/profile']},
            //     {name: 'group chat', item: ['/ireng', '/menu', '/anjay']},
            // ]
    //     }).list({type: 'dot'}).join('\n\n')
    // }).menu({theme: 'classic', type: 'commandList'})
    
    
    
    
    
    
    
    // {
    //     dot: object?.map(e => `${e?.name}\n${e.item?.map(e => listStyle['dot']+' '+e).join('\n')}`),
    //     arrow: 'dds'
    // },
        // list: (element) => {
        //     return {
        //         dot: element?.map(e => `${e?.name}\n${e.item?.map(e => listStyle['dot']+' '+e).join('\n')}`),
        //         arrow: element?.map(e => `${e?.name}\n${e.item?.map(e => listStyle['arrow']+' '+e).join('\n')}`),
        //     }
        // },
        // menu: (string) => string.style
        //     ? menuStyle[string.style]
        //         ? string.type
        //     : 'style ini tidak tersedia!!'
        // : 'buat object dulu om'
        // {
        //     // return {
        //     //     list: (text) => menuStyle[style][0] + '\n' + text + '\n' + menuStyle[style][0],
        //     //     help: (command, captions, example) => menuStyle[style][0] + '\n' + command + '\n' + menuStyle[style][1] + '\n' + captions + '\n\n' + example + '\n' + menuStyle[style][0]
        //     // }
        // }
    

    // generate.menu(generate.list([
    //     {name: 'owner', item: ['/log', '/menu', '/anjay']},
    //     {name: 'menu', item: ['/start', '/static', '/profile']},
    //     {name: 'group chat', item: ['/ireng', '/menu', '/anjay']},
    // ]).arrow.join('\n\n'), 'classic').list
    // generate.menu().contoh()
    // generate.list([
    //     {name: 'owner', item: ['/log', '/menu', '/anjay']},
    //     {name: 'menu', item: ['/start', '/static', '/profile']},
    //     {name: 'group chat', item: ['/ireng', '/menu', '/anjay']},
    // ]).arrow.join('\n\n')
    
//    menuStyle.find(e => e.classic)
// listStyle[0]?.[0]
    
    
// );
    // map.join('\n\n')
    
    // splitter[0]+splitter[2] + '\n' +
    // map.join('')+ '\n' +
    // splitter[0]+splitter[3]
    // map.join()
    // function startMenu(){
        
        // //     let cache = splitter[0] + splitter[2] + '\n'
// //     // cache += 
// //     for (let i = 0; i < category.length; i++) {
// //         cache += category[i].join('\n') + '\n\n'
        
// //     }
// //     cache += splitter[0] + splitter[3] + '\n'




// }


// category = [
//     {name: 'owner', item: ['/log', '/menu', '/anjay']},
//     {name: 'menu', item: ['/start', '/static', '/profile']},
//     {name: 'group chat', item: ['/ireng', '/menu', '/anjay']},
// ],


// console.log(map);

// for (const key in category) {
//     console.log(category[key]);
// }















































// module.exports = {

//     // command
//     command: {
//         start: (botname, version) =>
// `
// ━━━━━━━━『#』━━━━━━━━┓
// Basic:
// ➜ /start
// ━━━━━━━━
// Google:
// ➜ Translate:
// └► /trs
// ➜ Speech:
// └► /tts
// ━━━━━━━━
// Anime:
// ➜ MyAnimeList:
// └► /anime
// └► /manga
// ━━━━━━━━
// Youtube:
// ➜ Downloader:
// └► /ytm3
// └► /ytm4
// ━━━━━━━━『#』━━━━━━━━┛
// © ${botname}-v${version}, ${new Date().getFullYear()}
// `,
//         trs: () =>
// `
// ━━━━━━━━『#』━━━━━━━━
// /trs.\\[kode bahasa] \\[text]
// ━━━━━
// Kode bahasa:
// ├► en = inggris
// ├► id = indonesia
// ├► ja = jepang
// ├► ru = russia
// ├► de = jerman
// ├► ar = arab
// └► zh = china

// Contoh:
// └► \`/trs.en sapa dunia\`
// ━━━━━━━━『#』━━━━━━━━
// `,
//         tts: () =>
// `
// ━━━━━━━━『#』━━━━━━━━
// /tts.\\[kode bahasa] \\[text]
// ━━━━━
// Kode bahasa:
// ├► en = inggris
// ├► id = indonesia
// ├► ja = jepang
// ├► ru = russia
// ├► de = jerman
// ├► ar = arab
// └► zh = china

// Contoh:
// └► \`/tts.en sapa dunia\`
// ━━━━━━━━『#』━━━━━━━━
// `,
//     },

//     // template
//     template: {
//         trs: (from, to, translated) =>
// `
// ━━━━━━━━『#』━━━━━━━━
// ${from} ➜ ${to}
// ━━━━━
// Translated:
// \`${translated}\`
// ━━━━━━━━『#』━━━━━━━━
// `
//     }
// }

// // ⊦