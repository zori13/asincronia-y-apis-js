const p1=new Promise((resolve)=> setTimeout(()=>resolve(1), 1000))
const p2=new Promise((resolve)=> setTimeout(()=>resolve(2), 2000))
const p3=new Promise((resolve)=> setTimeout(()=>resolve(3), 4000))
Promise.all([p1,p2,p3]).then((resultados)=> {
    console.log('Todas las promesas se han resuelto:', resultados)
})

