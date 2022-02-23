const btn = document.createElement('button')
btn.innerText = 'click me';
btn.setAttribute('onclick','clickme()')
console.log(btn)
const section=document.getElementById('body')
section.appendChild(btn)

const clickme = () => {
    console.log('hello')
}