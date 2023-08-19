fetch("https://jsonplaceholder.typicode.com/posts")
    .then((result)=>{

       return result.json();
    
    })
    .then (posts =>{
        posts.forEach(post => {
            console.log(post);
        });
    })

    .catch(function(){
        console.log('error');
    });
        
    
