module.exports = {
    expression: {
        expList: [

            // ekspresi senang:
            ['(≡^∇^≡)', 'o(〃＾▽＾〃)o', '(ʘᴗʘ✿)', '(◍•ᴗ•◍)', '˙(≧∇≦)/', '(๑˃̵ ᴗ ˂̵)و', '(〃∀〃)ゞ', '(*・∀・*)', '*(^o^)/*♪', 'ヽ(*´∀)ﾉ', 'ﾉ(*>∇<)ﾉ', '(ﾉ*°▽°)ﾉ'],

            // ekspresi marah:
            ['ヽ(д´；)/', '（-""-；)', '(-"-;)', '(￣へ ￣ 凸', '(๑•̀д•́๑)'],

            // ekspresi sedih:
            ['ಥ_ಥ｡', '｡╥﹏╥｡', 'o(╥﹏╥)o', '(TヘTo)', '(T^T)', '(T-T)']
        ],

        // funsgi untuk ekspresi senang.
        happy: function(){
            return this.expList[0][Math.floor(Math.random() * this.expList[0].length)]
        },

        // funsgi untuk ekspresi marah.
        angry: function(){
            return this.expList[1][Math.floor(Math.random() * this.expList[1].length)]
        },

        // funsgi untuk ekspresi sedih.
        sad: function(){
            return this.expList[2][Math.floor(Math.random() * this.expList[2].length)]
        }
    },
    textReply: {
        valid: {
            report: ''
        },
        invalid: {
            input: '⚠️ Kamu salah dalam menggunakan fitur ini, cobalah untuk membaca `Dokumentasi fitur`, atau `Laporkan masalah` jika pesan ini berulang.'
        },
        button: {
            trySample: '🧪 Ingin mencoba contoh fitur ini?',
            needDocument: '📚 Dokumentasi fitur',
            reportError: '📝 Laporkan masalah'
        }
    },
    google: {
        textList: [
            [
                // kode bahasa kosong:
                'Aku tidak bisa menerjemahkanya jika kode bahasa nya kosong!!.',
                'Kode bahasa nya kosong, coba lebih teliti lagi!!.',
                'Apa? dimana? MANA KODE BAHASANYA!!.',
                'Hey!, Kode bahasa nya kosong.'
            ],
            [
                // kode bahasa salah:
                'Gunakan kode bahasa yang telah di sediakan!!.',
                'Hmm, aku tidak mengerti kode bahasa ini.',
                'Aku tidak tau kode bahasa apa ini.'
            ],
            [
                // teks yang ingin di terjemahkan kosong:
                'Kamu belum mengisi teks yang ingin di terjemahkan nya.',
                'Kemana teks yang ingin di terjemahkan nya?!?!.',
                'Teks yang ingin di terjemahkan nya kosong!!'
            ],
            [
                // kesalahan saat mendapatkan data dari google:
                'fail get data'
            ]
        ],

        // fungsi untuk kode bahasa kosong.
        noLang: function(){
            return this.textList[0][Math.floor(Math.random() * this.textList[0].length)]
        },

        // fungsi untuk kode bahasa salah.
        unLang: function(){
            return this.textList[1][Math.floor(Math.random() * this.textList[1].length)]
        },

        // fungsi untuk teks yang ingin di terjemahkan kosong.
        noText: function(){
            return this.textList[2][Math.floor(Math.random() * this.textList[2].length)]
        },

        // fungsi untuk kesalahan saat mengambil data.
        failGetData: function(){
            return this.textList[3][Math.floor(Math.random() * this.textList[3].length)]
        }
    }
}