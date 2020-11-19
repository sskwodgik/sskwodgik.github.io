let button = document.getElementById('pobierzDane');

const getData = () => {
    let id = document.getElementById('id');
    let userId = document.getElementById('userId');
    let title = document.getElementById('title');
    let body = document.getElementById('body');
    fetch('https://akademia108.pl/api/ajax/get-post.php', {
    mode: 'cors',    
    method: 'GET'
    })
    .then(res => res.json())
    .then((out) => {
        id.innerHTML = "<p>ID: "+out.id+"</p>";
        userId.innerHTML = "<p>UserID: "+out.userId+"</p>";
        title.innerHTML = "<p>Title: "+out.title+"</p>";
        body.innerHTML = "<p>Body: "+out.body+"</p>";

    })
    .catch(err => { throw err })
    }

    button.addEventListener('click', getData);