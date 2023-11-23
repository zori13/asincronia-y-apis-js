async function iterarElementos(elementos){
    for(const elemento of elementos){
        await new Promise((resolve)=> setTimeout(resolve,2000))
        console.log('Procesando elemento:', elemento)
    }
}
const elementos=['verde','negro','azul','morado','rosa','rojo','amarillo']
iterarElementos(elementos)