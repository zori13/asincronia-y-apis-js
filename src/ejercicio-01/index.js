function hMCB(callback){
    setTimeout(function () {
        callback('Hooooolaaaaa mundoooooo')
    }, 3000)
}
hMCB(function (mensaje) {
    console.log(mensaje)
})