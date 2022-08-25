module.exports = {

    // command
    command: {
        start: (botname, version) =>
`
━━━━━━━━『#』━━━━━━━━┓
Basic:
➜ /start
━━━━━━━━
Google:
➜ Translate:
└► /trs
➜ Speech:
└► /tts
━━━━━━━━
Anime:
➜ MyAnimeList:
└► /anime
└► /manga
━━━━━━━━
Youtube:
➜ Downloader:
└► /ytm3
└► /ytm4
━━━━━━━━『#』━━━━━━━━┛
© ${botname}-v${version}, ${new Date().getFullYear()}
`,
        trs: () =>
`
━━━━━━━━『#』━━━━━━━━
/trs.\\[kode bahasa] \\[text]
━━━━━
Kode bahasa:
├► en = inggris
├► id = indonesia
├► ja = jepang
├► ru = russia
├► de = jerman
├► ar = arab
└► zh = china

Contoh:
└► \`/trs.en sapa dunia\`
━━━━━━━━『#』━━━━━━━━
`,
        tts: () =>
`
━━━━━━━━『#』━━━━━━━━
/tts.\\[kode bahasa] \\[text]
━━━━━
Kode bahasa:
├► en = inggris
├► id = indonesia
├► ja = jepang
├► ru = russia
├► de = jerman
├► ar = arab
└► zh = china

Contoh:
└► \`/tts.en sapa dunia\`
━━━━━━━━『#』━━━━━━━━
`,
    },

    // template
    template: {
        trs: (from, to, translated) =>
`
━━━━━━━━『#』━━━━━━━━
${from} ➜ ${to}
━━━━━
Translated:
\`${translated}\`
━━━━━━━━『#』━━━━━━━━
`
    }
}

// ⊦