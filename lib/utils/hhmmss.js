module.exports = function(detik){
    const jam = Math.floor(detik / 3600),
    menit = Math.floor((detik % 3600) / 60) > 9 ? Math.floor((detik % 3600) / 60) : '0' + Math.floor((detik % 3600) / 60),
    detik = Math.floor(detik % 60) > 9 ? Math.floor(detik % 60) : '0' + Math.floor(detik % 60);
    return !isNaN(detik) ? jam ? `${jam}:${menit}:${detik}` : `${menit}:${detik}` : '00:00';
};