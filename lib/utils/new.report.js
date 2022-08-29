const fs = require('fs')


let report = [
    {
        id: '123', reportData: [
            'anjay s',
            'weh'
        ]
    },
    {
        id: '456', reportData: [
            'anjay'
        ]
    }
]

const findId = (userId) => report.find(x => x.id === userId)

module.exports = {
    createReport: function(userId, reportText){
        return report.length > 0
        ? ''
        : 'anjay gk ada'
    },
    clearReportUser: async function(userId){
        return findId(userId)?.reportData.splice(findId(userId)?.reportData.length)
            ? 'Laporan masalah mu berhasil di bersihkan :D'
        : (function(){throw 'Kamu belum membuat laporan masalah :/'}())
    },
    getReportUser: async function(userId){
        return findId(userId)?.reportData
            ?? (function(){throw 'Kamu belum membuat laporan masalah :/'}())
    },
    clearAllReport: function(){},
    getAllReport: function(){}
}