const miPromesa= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promesa resuelta')
    }, 3000)
})
miPromesa.then((resultado)=>{
    console.log(resultado)
})