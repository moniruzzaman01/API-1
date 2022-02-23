const getCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => showCountries(data));
}
const showCountries = (data) => {
    const countrySection=document.getElementById('country-section')
    data.map(country => {
        const div=document.createElement('div')
        const h1=document.createElement('h1')
        const p = document.createElement('p')
        const btn = document.createElement('button')
        h1.innerText = country.name.official
        p.innerText = country.name.common
        btn.innerText = `${country.name.common} details`
        btn.setAttribute('onclick', 'loadDetails("shakib")')
        div.classList.add('div')
        div.appendChild(h1)
        div.appendChild(p)
        div.appendChild(btn)
        countrySection.appendChild(div)
        // console.log(country.name)
    })
}

const loadDetails = (name) => {
    console.log(name)
}