const splitter = [
    '━━━━━━━━『#』━━━━━━━━',
    '━━━━',
    '┓',
    '┛',
    '➜',
    '•',
    '├►',
    '└►'
],

/*
   
*/
generate = {
    dotList: (object) => object.map(e => `${e.name}\n${e.item.map(e => splitter[5]+' '+e).join('\n')}`),
    arrowList: (object) => object.map(e => `${splitter[4]} ${e.name}\n${e.item.map(e => splitter[5]+' '+e).join('\n')}`),
    arrDotList: (object) => object.map(e => `${e.name}\n${e.item.map((e, i) => splitter[6]+' '+e).join('\n')}`),
};



// console.log(
    
//     // map.join()
//     map.join('\n\n')
//     // splitter[0]+splitter[2] + '\n' +
//     // map.join('')+ '\n' +
//     // splitter[0]+splitter[3]

// );

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