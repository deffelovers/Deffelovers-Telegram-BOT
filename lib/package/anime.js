// Sumber: https://myanimelist.net & https://nekos.life
// 
const axios = require('axios')
const value = [1, 2, 3, 4, 5]
//
module.exports = {
    anime: {
        result: async function(keyword){
            return await axios.get(`https://myanimelist.net/search/prefix.json?type=anime&keyword=${keyword}`)
                .then((r) => r.data.categories[0].items[0])
                .catch((e) => {return new Error(e)})
        },
        inline_result: async function(keyword){
            return await axios.get(`https://myanimelist.net/search/prefix.json?type=anime&keyword=${keyword}`)
                .then((r) => r.data.categories[0].items.map((x, i) => {
                    return {
                        type: 'article',
                        id: i,
                        title: x.name,
                        thumb_url: x.thumbnail_url,
                        description: `${x.type}, ${x.payload.media_type} \n${x.payload.aired}`,
                        input_message_content: {
                            message_text: `<code>Title:\t</code><a href="${x.image_url.split('/r/116x180').join('')}">${x.name}</a>\n<code>Type:\t${x.type},${x.payload.media_type}\nAired:\t${x.payload.aired}\nScore:\t${x.payload.score}\nStatus:\t${x.payload.status}</code>`, parse_mode: 'HTML'
                        },
                        reply_markup: {inline_keyboard: [[{text: 'Lihat detail selengkapnya', url: x.url}],[{text: 'Cari lagi?', switch_inline_query_current_chat: `/anime ${keyword}`}]]}
                    }
                }))
                .catch((e) => {return new Error(e)})
        }
    },
    manga: {
        result: async function(keyword){
            return await axios.get(`https://myanimelist.net/search/prefix.json?type=manga&keyword=${keyword}`)
                .then((r) => r.data.categories[0].items[0])
                .catch((e) => {return new Error(e)})
        },
        inline_result: async function(keyword){
            return await axios.get(`https://myanimelist.net/search/prefix.json?type=manga&keyword=${keyword}`)
                .then((r) => r.data.categories[0].items.map((x, i) => {
                    return {
                        type: 'article',
                        id: i,
                        title: x.name,
                        thumb_url: x.thumbnail_url,
                        description: `${x.type}, ${x.payload.media_type}`,
                        input_message_content: {
                            message_text: `<code>Title:\t</code><a href="${x.image_url.split('/r/116x180').join('')}">${x.name}</a>\n<code>Type:\t${x.type},${x.payload.media_type}\nScore:\t${x.payload.score}\nStatus:\t${x.payload.status}</code>`, parse_mode: 'HTML'
                        },
                        reply_markup: {inline_keyboard: [[{text: 'Lihat detail selengkapnya', url: x.url}],[{text: 'Cari lagi?', switch_inline_query_current_chat: `/anime ${keyword}`}]]}
                    }
                }))
                .catch((e) => {return new Error(e)})
        }
    },
    gacha: async function(a){
        switch (a) {
            // image //
            case 'neko':
            case 'gecg':
            case 'kemonomimi':
                return {type: 'img', data: await Promise.all(value.map(async() => await axios.get(`https://www.nekos.life/api/v2/img/${a}`).then((res) =>{return res.data.url}).catch(() =>{return null})))}
                break
            case 'fox':
                return {type: 'img', data: await Promise.all(value.map(async() => await axios.get(`https://www.nekos.life/api/v2/img/fox_girl`).then((res) =>{return res.data.url}).catch(() =>{return null})))}
                break
            // single img //
            case 'wallpaper':
                return {type: 'wallpaper', data: [await axios.get(`https://www.nekos.life/api/v2/img/${a}`).then((res) =>{return res.data.url}).catch(() =>{return null})]}      
                break
            // gif //
            case 'poke':
            case 'pat':
            case 'hug':
            case 'smug':
            case 'feed':
            case 'baka':
            case 'tickle':
            case 'cuddle':
                return {type: 'gif', data: [await axios.get(`https://www.nekos.life/api/v2/img/${a}`).then((res) =>{return res.data.url}).catch(() =>{return null})]}
                break
            default:
                throw new Error('Tidak ada hasil yang sama!.')
                break
        }
    }
}

// NSFW! //

// const lewd = async(selection) =>{
//     if(selection == undefined || selection == '') return {type: 'msg', msg: 'Input salah!, coba periksa kembali.'}
//     try{
//         switch(selection){
//             // image //
//             case 'futanari':
//             case 'blowjob':
//             case 'femdom':
//             case 'erokemo':
//             case 'erok':
//             case 'trap':
//             case 'hentai':
//             case 'hololewd':
//             case 'lewdk':
//             case 'yuri':
//             case 'lewdkemo':
//             case 'erofeet':
//             case 'ero':
//             case 'solo':
//             case 'feet':
//                 let url0 = await axios.get(`https://www.nekos.life/api/v2/img/${selection}`).then((res) =>{return res.data.url}).catch(() =>{return undefined})
//                 let url1 = await axios.get(`https://www.nekos.life/api/v2/img/${selection}`).then((res) =>{return res.data.url}).catch(() =>{return undefined})
//                 let url2 = await axios.get(`https://www.nekos.life/api/v2/img/${selection}`).then((res) =>{return res.data.url}).catch(() =>{return undefined})
//                 let url3 = await axios.get(`https://www.nekos.life/api/v2/img/${selection}`).then((res) =>{return res.data.url}).catch(() =>{return undefined})
//                 let url4 = await axios.get(`https://www.nekos.life/api/v2/img/${selection}`).then((res) =>{return res.data.url}).catch(() =>{return undefined})
//                 return {type: 'img', data: [url0, url1, url2, url3, url4]}
//             // gif //
//             case 'bj':
//             case 'kuni':
//             case 'feetg':
//             case 'les':
//             case 'boobs':
//             case 'solog':
//             case 'pussy':
//             case 'cum':
//                 let urlGif = await axios.get(`https://www.nekos.life/api/v2/img/${selection}`).then((res) =>{return res.data.url}).catch(() =>{return undefined})
//                 return {type: 'gif', data: [urlGif]}
//                 break
//             default:
//                 return {type: 'msg', msg: 'Type tidak tersedia!.'}
//                 break
//         }
//     }catch(e){console.log(e)}
// }