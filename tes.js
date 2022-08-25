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
        let input = [
            'Sebut namaku saat pohon susurat\n',
            'Sekali lagi menceritakan kisah yang hilang ditelan waktu\n',
            'Cara memulai dan cara berakhir\n',
            'Jangan pernah lagi mengarang cerita dengan cemas\n',
            'Dengan beberapa awal, tapi hanya satu akhir Ah, betapa aku rindu untuk memeluk\n',
            'Masa depan pecah dari nuansa masa lalu\n',
            'Masih menyalaSimpan air matamu untuk hari yang begitu jauh\n',
            'Untuk mengairi hutan belantara yang masih tertidur\n',
            'Di dunia menunggu untuk dinyalakan\n',
            'Menyebar di dasar sungai, begitu kering dan mati\n',
            'Biarkan kapal yang kandas kembali meluncurkan layarnya Ah, betapa aku ingin memeluknya\n',
            'Masa depan pecah dari nuansa masa lalu\n',
            'Masih menyalaBiji melahirkan kehidupan baru ketika bunga berani memudarKelopak berlama-lama\n',
            'Menunggu satu tarian terakhir\n',
            'Mengusir semua debu dari masa lalu\n',
            'Cerita baru belum dimulai'
          ]
        console.log(
            
            
            // contoh_kata.match('/')?.input.split('/')??'\n\n\nkata ini tidak memiliki tanda \`/\`\n\n\n'
            
            // // output: kata ini tidak memiliki tanda `/`

            input.join('')
            // input.match(/(\/\w+\@?\w+)\.(\w+)?/)??input
            // .match(/(\/\w+)\.(\w+)/)?.[1]??input.split(' ')?.[0]
            
            // .match(/^\/\w+/)?.[0]
            
            
        )





    // console.log(start('anjay', '4.0').match(/\/[a-z0-9]\w+/gm))
}
tes()