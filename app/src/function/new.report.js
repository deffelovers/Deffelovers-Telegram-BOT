const fs = require('fs'),
readData = JSON.parse(fs.readFileSync('./report/problem.data.json')),
writeData = () => fs.writeFileSync('./report/problem.data.json', JSON.stringify(readData, null, 4))


let report = [
    {}

]

const findId = (userId) => readData.findIndex(x => x.id === userId),
invalid = function(message){throw message};

module.exports = {

    // untuk pengguna biasa.
    createUserReport: async function(userId, textReport){
        return typeof userId === 'number' && typeof textReport === 'string'
            ? readData.length > 0
                ? readData[findId(userId)].reportData.push(`[${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}] ${textReport}`) && writeData()
            : 'kosong'
        : invalid('Data tidak benar')
    },
    removeUserReport: async function(){},
    getUserReport: async function(){},

    // untuk owner.
    getAllUserReport: async function(){},
    removeAllUserReport: async function(){}
}
// createReport: async function(userId, reportText){
//     return readData.length > 0
//         ? readData[findId(userId)].reportData
//     : readData.push({id: userId, reportData: [reportText]}) && writeData()
// },
// clearReportUser: async function(userId){
//     return findId(userId)?.reportData.splice(findId(userId)?.reportData.length)
//         ? 'Laporan masalah mu berhasil di bersihkan :D'
//     : (function(){throw 'Kamu belum membuat laporan masalah :/'}())
// },
// getReportUser: async function(userId){
//     return findId(userId)?.reportData
//         ?? (function(){throw 'Kamu belum membuat laporan masalah :/'}())
// },
// clearAllReport: function(){},
// getAllReport: function(){},
// sub: async function(){
//     return await read
// }