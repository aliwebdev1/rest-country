const loadKanye = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayKanye(data))
}

const displayKanye = (receiveData) => {
    console.log(receiveData);
    const blog = document.getElementById('blog');
    blog.innerText = receiveData.quote

}