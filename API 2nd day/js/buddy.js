const getBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => showBuddies(data));
}
// type-1
// const showBuddies = (data) => {
//     const ul = document.getElementById('ul');
//     data.results.map(x => {
//         const li = document.createElement('li');
//         const buddyObj = x.name;
//         const buddyName=`${buddyObj.title} ${buddyObj.first} ${buddyObj.last}`
//         li.innerText = buddyName;
//         ul.appendChild(li);
//         console.log(buddyName);
//     })
// }
// type-2
const showBuddies = (datas) => {
    const ul = document.getElementById('ul');
    for (const d of datas.results) {
        const li=document.createElement('li')
        const nameObj = d.name;
        const fullName = `${nameObj.title} ${nameObj.first} ${nameObj.last}`
        li.innerText = fullName;
        ul.appendChild(li)
    }
}


// const fullName = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`