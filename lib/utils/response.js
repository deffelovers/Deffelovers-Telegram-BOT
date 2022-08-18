module.exports = {
    expression: {
        expList: [
            ['happy'],
            ['angry'],
            ['sad']
        ],
        happy: function(){
            return this.textList[0][Math.floor(Math.random() * this.textList[0].length)]
        },
        angry: function(){
            return this.textList[1][Math.floor(Math.random() * this.textList[0].length)]
        },
        sad: function(){
            return this.textList[2][Math.floor(Math.random() * this.textList[0].length)]
        }
    },
    google: {
        textList: [
            [
                'Hmm, sepertinya kode bahasa tersebut tidak terdaftar di sini',
                'Hey, apa kamu belum membaca daftar kode bahasa yang tersedia',
                'Tolong masukan kode bahasa yang tersedia',
                'Kode bahasa apa tuh'
            ],
            [
                'no text'
            ],
            [
                'fail get data'
            ]
        ],
        noLang: function(){
            return this.textList[0][Math.floor(Math.random() * this.textList[0].length)]
        },
        noText: function(){
            return this.textList[1][Math.floor(Math.random() * this.textList[0].length)]
        },
        failGetData: function(){
            return this.textList[2][Math.floor(Math.random() * this.textList[0].length)]
        }
    }
}