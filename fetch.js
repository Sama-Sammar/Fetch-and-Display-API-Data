alert("test")
  fetch("https://jsonplaceholder.typicode.com/posts")
            .then((result) => {
                return result.json();
            })
            .then(data => {
                displayData(data)
            })

            .catch(function () {
                console.log('error');
            });

        function displayData(posts) {
            console.log(posts);
            let result = ``;
            posts.forEach(post => {
                result += `
                <li>${post.title}</li>
                <li>${post.body}</li>
            `
            });
            document.getElementById('posts').innerHTML = result
        }
    
