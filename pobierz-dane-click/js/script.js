let button = document.getElementById('pobierzDane');

const getData = () => {
    let title = document.getElementById('title');
    fetch('https://akademia108.pl/api/ajax/get-post.php', {
    mode: 'cors',    
    method: 'GET'
    })
    .then(res => res.json())
    .then((out) => {
        title.innerHTML = "<p>asasa</p>";

    })
    .catch(err => { throw err })
    }

    button.addEventListener('click', getData);