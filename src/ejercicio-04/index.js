const promesaRechazada =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('Promesa rechazada')
    },2000)
})
promesaRechazada.catch((error)=>{
    console.log('Error:', error)
})
