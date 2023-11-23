const axios=require ('axios')
async function obtenerDatos(){
    try{
        const respuesta=await axios.get('https://jsonplaceholder.typicode.com/posts/invalid')
        console.log(respuesta.data)
    }
    catch(error){
        console.error('Error al obtener datos : ',error.message)
    }
}
obtenerDatos()
