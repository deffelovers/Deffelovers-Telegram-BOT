const tesAj = require('./lib/package/google')

async function tes(){
    console.log(await tesAj.tts('zh', 'selamat pagi semuanya!!'))//.then(console.log).catch(console.error)
}
tes()