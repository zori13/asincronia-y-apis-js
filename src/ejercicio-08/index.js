fetch('https://jsonplaceholder.typicode.com/posts')
    .then((respone)=>response.json)
    .then((data)=>{
        const filteredPosts = data.filter((post)=> post.
        title.startsWith('C'))
        console.log(filtroPosts)
    })
