// expresi
const exp = {
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
}

module.exports = {
    expression: exp,
    textReply: {
        valid: {
            report: ''
        },
        invalid: {
            input: ''
        },
        ifLongInput: '',
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
                `Aku tidak bisa menerjemahkanya jika kode bahasa nya kosong!!.${exp.angry()}`,
                `Kode bahasa nya kosong, coba lebih teliti lagi!!.${exp.angry()}`,
                `Apa? dimana? MANA KODE BAHASANYA!!.${exp.angry()}`,
                `Hey!, Kode bahasa nya kosong.${exp.angry()}`
            ],
            [
                // kode bahasa salah:
                `Gunakan kode bahasa yang telah di sediakan!!.${exp.angry()}`,
                `Hmm, aku tidak mengerti kode bahasa ini.${exp.angry()}`,
                `Aku tidak tau kode bahasa apa ini.${exp.angry()}`
            ],
            [
                // teks yang ingin di terjemahkan kosong:
                `Kamu belum mengisi teks yang ingin di terjemahkan nya.${exp.angry()}`,
                `Kemana teks yang ingin di terjemahkan nya?!?!.${exp.angry()}`,
                `Teks yang ingin di terjemahkan nya kosong!!${exp.angry()}`
            ],
            [
                // kesalahan saat mendapatkan data dari google:
                `Sepertinya teks ini tidak bisa di terjemahkan.${exp.sad()}`,
                `Maaf, sepertinya aku tidak bisa melakukan nya.${exp.sad()}`,
                `Aku kesulitan menerjemahkan teks ini.${exp.sad()}`
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