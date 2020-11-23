const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-users.php')
    .then(res => res.json())
    .then((out) => {
        for(let user of out){
            let userId = document.createElement('p');
            let userName = document.createElement('p');
            let url = document.createElement('p');
            userId.innerText = "User ID: "+user.id;
            userName.innerText = "User Name: "+user.name;
            url.innerHTML = "User ID: "+user.website+"<br />--------";

            document.body.appendChild(userId);
            document.body.appendChild(userName);
            document.body.appendChild(url);
        }
    })
    .catch(err => { throw err })
}

const scrollToEndOfPage = () => {

    let element = document.documentElement;
    let maxScroll = element.scrollHeight;
    let topScroll = element.scrollTop;
    let client = element.clientHeight;
    let sum = Math.ceil(topScroll+client);

    if(sum >= maxScroll){
        getData();
    }    
}
window.addEventListener('scroll', scrollToEndOfPage);