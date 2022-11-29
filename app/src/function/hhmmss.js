module.exports = function(miliDetik){
    const jam = Math.floor(miliDetik / 3600),
    menit = Math.floor((miliDetik % 3600) / 60) > 9 ? Math.floor((miliDetik % 3600) / 60) : '0' + Math.floor((miliDetik % 3600) / 60),
    detik = Math.floor(miliDetik % 60) > 9 ? Math.floor(miliDetik % 60) : '0' + Math.floor(miliDetik % 60);
    return !isNaN(miliDetik) ? jam ? `${jam}:${menit}:${detik}` : `${menit}:${detik}` : '00:00';
};