const tesAj = require('./lib/package/google')
const {start} = require('./lib/utils/command.List').command
const fun = require('./lib/utils/chat.function')


async function tes(){
    
    // fun.gobalValue('halo').simpe(1)
    // Buffer.from('ytm3/SwsaQs').toString('base64')
    
    // '/tes id  hallo anjay'.split(' ').slice(1).join(' ').match('/')?.input.split('/')[0].replace(/\s/g, ''),

    // await tesAj.tts('id', 'selamat pagi semuanya!!').then(console.log).catch(console.error)
    
    
        /*
            kasus: Bagai mana cara memvalidasi input yang didalam nya harus memiliki tanda "/"
            dengan hanya 1 baris kode dan dapat menjalankan fungsi error.
        */

        // jawaban: 
            
        // let contoh_kata = 'halo selamat pagi  siang'
        console.log(
            
            
            // contoh_kata.match('/')?.input.split('/')??'\n\n\nkata ini tidak memiliki tanda \`/\`\n\n\n'
            
            // // output: kata ini tidak memiliki tanda `/`

            '/tes cpu'.match(/^\/\w+/)?.[0]
            
            
        )





    // console.log(start('anjay', '4.0').match(/\/[a-z0-9]\w+/gm))
}
tes()