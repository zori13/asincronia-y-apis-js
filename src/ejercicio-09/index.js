const axios=require('axios')
async function obtenerDatos(){
    try{
        const response = await axios.get('https://https://rickandmortyapi.com/episode/1')
        const data=response.data
        console.log(data)
    }
        catch(error){
        console.error(error)
    }
}
obtenerDatos()