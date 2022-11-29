// expresi
const expression = {
    expressionList: [

        // ekspresi senang:
        ['(≡^∇^≡)', 'o(〃＾▽＾〃)o', '(ʘᴗʘ✿)', '(◍•ᴗ•◍)', '˙(≧∇≦)/', '(๑˃̵ ᴗ ˂̵)و', '(〃∀〃)ゞ', '(*・∀・*)', '*(^o^)/*♪', 'ヽ(*´∀)ﾉ', 'ﾉ(*>∇<)ﾉ', '(ﾉ*°▽°)ﾉ'],

        // ekspresi marah:
        ['ヽ(д´；)/', '（-""-；)', '(-"-;)', '(￣へ ￣ 凸', '(๑•̀д•́๑)'],

        // ekspresi sedih:
        ['ಥ_ಥ｡', '｡╥﹏╥｡', 'o(╥﹏╥)o', '(TヘTo)', '(T^T)', '(T-T)']
    ],

    // funsgi untuk ekspresi senang.
    happy: function(){
        return this.expressionList[0][Math.floor(Math.random() * this.expressionList[0].length)]
    },

    // funsgi untuk ekspresi marah.
    angry: function(){
        return this.expressionList[1][Math.floor(Math.random() * this.expressionList[1].length)]
    },

    // funsgi untuk ekspresi sedih.
    sad: function(){
        return this.expressionList[2][Math.floor(Math.random() * this.expressionList[2].length)]
    }
}

module.exports = {
    expression: expression,
    textReply: {
        valid: {
            report: ''
        },
        invalid: {
            input: ''
        },
        ifLongOutput: '',
        button: {
            trySample: '🧪 Coba contoh fitur ini?',
            deleteButton: '🗑 Hapus pesan',
            tryInlineMode: 'Coba fitur ini di inline mode?',
            reportProblem: '📝 Laporkan masalah',
            needDocumentation: '📚 Dokumentasi fitur',
        },
        problem: {
            isEmpty: '',
            clear: ''
        }
    },
    google: {
        textList: [
            [
                // kode bahasa kosong:
                `Aku tidak bisa menerjemahkanya jika kode bahasa nya kosong!!.${expression.angry()}`,
                `Kode bahasa nya kosong, coba lebih teliti lagi!!.${expression.angry()}`,
                `Apa? dimana? MANA KODE BAHASANYA!!.${expression.angry()}`,
                `Hey!, Kode bahasa nya kosong.${expression.angry()}`
            ],
            [
                // kode bahasa salah:
                `Gunakan kode bahasa yang telah di sediakan!!.${expression.angry()}`,
                `Hmm, aku tidak mengerti kode bahasa ini.${expression.angry()}`,
                `Aku tidak tau kode bahasa apa ini.${expression.angry()}`
            ],
            [
                // teks yang ingin di terjemahkan kosong:
                `Kamu belum mengisi teks yang ingin di terjemahkan nya.${expression.angry()}`,
                `Kemana teks yang ingin di terjemahkan nya?!?!.${expression.angry()}`,
                `Teks yang ingin di terjemahkan nya kosong!!${expression.angry()}`
            ],
            [
                // kesalahan saat mendapatkan data dari google:
                `Sepertinya teks ini tidak bisa di terjemahkan.${expression.sad()}`,
                `Maaf, sepertinya aku tidak bisa melakukan nya.${expression.sad()}`,
                `Aku kesulitan menerjemahkan teks ini.${expression.sad()}`
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