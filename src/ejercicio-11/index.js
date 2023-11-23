const p1= new Promise((resolve,reject)=>
setTimeout(()=>reject('Error en Promesa 1'), 2000))
const p2= new Promise((resolve)=>
setTimeout(()=>resolve(2),4000))
const p3= new Promise((resolve,reject)=>
setTimeout(()=>reject('Error en Promesa 3'), 1000))
Promise.allSettled([p1,p2,p3]).then((resultados)=>{
    console.log('Estado de las Promesas:', resultados)
})