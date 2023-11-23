const axios=require ('axios')
axios
    .get('https://jsonplaceholder.typecode.com/posts/1')
    .then((response)=>{
        console.log(respose.data)
    })
    .catch((error)=>{
        console.error(error)
    })