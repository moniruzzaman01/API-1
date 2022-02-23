function copiedJson() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}


const myJson = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            for (const user of data) {
                loadUsers1(user)
            }
        })
}

const loadUsers1 = data => {
    const ul = document.getElementById('ul')
    const li = document.createElement('li')
    li.innerText = data.name
    const element = ul.appendChild(li)
    console.log(data)
}

const loadUsers = () => {
    const ul = document.getElementById('ul')
    // const li = document.createElement('li')
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            data.map(x => {
                const li = document.createElement('li')
                li.innerText = x.name
                ul.appendChild(li)
            })
        })
}

// posts
const post = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => showPost(data))
}
const showPost = (posts) => {
    const postsDiv = document.getElementById('posts')
    for (const post of posts) {
        console.log(post)
        const div=document.createElement('div')
        const template = `
            <h1>${post.title}</h1>
            <p>${post.body}</p>
            `
        div.innerHTML = template
        postsDiv.appendChild(div)
    }




}
post();

// const obj = {
//     student: {
//         id: 1,
//         name: 'shakib',
//         class: 5
//     },
//     teacher: {
//         id: 2,
//         name: 'rakib',
//         sector: 'eee'
//     }
// }

// const stringified = JSON.stringify(obj)
// console.log(obj)
// console.log(stringified)
// const mainForm = JSON.parse(stringified)
// console.log(mainForm)