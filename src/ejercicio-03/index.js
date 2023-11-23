async function opAsin(){
    await new Promise ((resolve)=>setTimeout(resolve,1000))
    return 'Operación completada'
}
async function ejOp(){
    const resul=await opAsin()
    console.log(resul)

}
ejOp()