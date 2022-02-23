const getQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(req=>req.json())
    .then(data=>showQuote(data))
}
// type-1
const showQuote = (quote) => {
    const quoteElement=document.getElementById('quote')
    quoteElement.innerText=quote.quote
}
// type-2
// const showQuote = ({quote}) => {
//     const quoteElement=document.getElementById('quote')
//     quoteElement.innerText=quote
// }