const loadFriend = () => {
    fetch("https://randomuser.me/api/?results=50")
        .then(res => res.json())
        .then(data => displayFriend(data.results))
}

loadFriend();

const displayFriend = (friends) => {
    const friendDiv = document.getElementById('friends');
    // console.log(friends);
    for (const friend of friends) {
        console.log(friend);
        const div = document.createElement('div');
        div.classList.add('firend')
        div.innerHTML = `<h2> Name: ${friend.title} ${friend.first} ${friend.last} Email: ${friend.email} </h2>
        <img src="${friend.picture.medium}" alt="">
        `;
        friendDiv.appendChild(div)




    }
}