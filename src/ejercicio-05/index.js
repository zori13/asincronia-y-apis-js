function crearPromesaRetrasada (valor,retraso){
    return new Promise((resolve)=>{
      setTimeout(()=>{  
        resolve(valor)
      },retraso)
    }) 
}
let n1
let n2
let n3
crearPromesaRetrasada(1,1000)
    .then((resul1)=>{
        console.log(resul1)
        n1 =resul1
        return crearPromesaRetrasada(2,1000)
    })
    .then((resul2)=>{
        console.log(resul2)
        n2 = resul2
        return crearPromesaRetrasada(3,1000)
    })
    .then((resul3)=>{
        console.log(resul3)
        n3 = resul3
        const suma=n1+n2+n3
        console.log('Suma:',suma)
    })