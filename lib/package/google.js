const axios = require("axios"),
response = require('../utils/response.chat')

// daftar bahasa.
lang = {

    // Kode bahasa.
    id: { "af": "Afrikaans", "sq": "Albanian", "am": "Amharic", "ar": "Arabic", "hy": "Armenian", "az": "Azerbaijani", "eu": "Basque", "be": "Belarusian", "bn": "Bengali", "bs": "Bosnian", "bg": "Bulgarian", "ca": "Catalan", "ceb": "Cebuano", "zh": "Chinese (Simplified)", "zh-CN": "Chinese (Simplified)", "zh-TW": "Chinese (Traditional)", "co": "Corsican", "hr": "Croatian", "cs": "Czech", "da": "Danish", "nl": "Dutch", "en": "English", "eo": "Esperanto", "et": "Estonian", "fi": "Finnish", "fr": "French", "fy": "Frisian", "gl": "Galician", "ka": "Georgian", "de": "German", "el": "Greek", "gu": "Gujarati", "ht": "CreoleHaitian", "ha": "Hausa", "haw": "Hawaiian", "iw": "Hebrew", "he": "Hebrew", "hi": "Hindi", "hmn": "Hmong", "hu": "Hungarian", "is": "Icelandic", "ig": "Igbo", "id": "Indonesian", "ga": "Irish", "it": "Italian", "ja": "Japanese", "jv": "Javanese", "kn": "Kannada", "kk": "Kazakh", "km": "Khmer", "rw": "Kinyarwanda", "ko": "Korean", "ku": "Kurdish", "ky": "Kyrgyz", "lo": "Lao", "la": "Latin", "lv": "Latvian", "lt": "Lithuanian", "lb": "Luxembourgish", "mk": "Macedonian", "mg": "Malagasy", "ms": "Malay", "ml": "Malayalam", "mt": "Maltese", "mi": "Maori", "mr": "Marathi", "mn": "Mongolian", "my": "Myanmar (Burmese)", "ne": "Nepali", "no": "Norwegian", "ny": "Nyanja (Chichewa)", "or": "Odia (Oriya)", "ps": "Pashto", "fa": "Persian", "pl": "Polish", "pt": "Portuguese (Portugal,Brazil)", "pa": "Punjabi", "ro": "Romanian", "ru": "Russian", "sm": "Samoan", "gd": "GaelicScots", "sr": "Serbian", "st": "Sesotho", "sn": "Shona", "sd": "Sindhi", "si": "Sinhala (Sinhalese)", "sk": "Slovak", "sl": "Slovenian", "so": "Somali", "es": "Spanish", "su": "Sundanese", "sw": "Swahili", "sv": "Swedish", "tl": "Tagalog (Filipino)", "tg": "Tajik", "ta": "Tamil", "tt": "Tatar", "te": "Telugu", "th": "Thai", "tr": "Turkish", "tk": "Turkmen", "uk": "Ukrainian", "ur": "Urdu", "ug": "Uyghur", "uz": "Uzbek", "vi": "Vietnamese", "cy": "Welsh", "xh": "Xhosa", "yi": "Yiddish", "yo": "Yoruba", "zu": "Zulu"},

    // List bahasa yang di sediakan.
    list: [
        {"en": "en", "id": "id", "ja": "ja", "ru": "ru", "de": "de", "ar": "ar", "zh": "zh"},
        ['en', 'id', 'ja', 'ru', 'de', 'ar', 'zh']
    ]
}

module.exports = {
    
    // fungsi translate.
    trs: async (langId, text) => langId
        ? lang.list[0][langId]
            ? text
                ? await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${langId}&dt=t&q=${text}`)
                    .then(res => {return{from: lang.id[res.data[2]] ? lang.id[res.data[2]] : res.data[2], to: lang.id[langId], raw: res.data[0].map(x => x[1]), translated: res.data[0].map(x => x[0])}})
                    .catch((e) => (function(){throw `${response.google.failGetData()}\n\n\`${e.code}\``}()))
            : (function(){throw response.google.noText()}())
        : (function(){throw response.google.unLang()}())
    : (function(){throw response.google.noLang()}()),

    // fungsi textToSpeech.
    tts: async (langId, text) => langId
        ? lang.list[0][langId]
            ? text
                ? await {speech: `https://translate.google.com/translate_tts?ie=UTF-8&q=${text}&tl=${langId}&total=1&idx=0&textlen=11&client=tw-ob&prev=input&ttsspeed=1`}
            : (function(){throw response.google.noText()}())
        : (function(){throw response.google.unLang()}())
    : (function(){throw response.google.noLang()}())
}