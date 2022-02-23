const searchField = document.getElementById('searchInput')
searchField.focus();
const searchFood = () => {
    searchField.focus();
    const searchText = searchField.value
    getFood(searchText)
    // clear input
    searchField.value = '';
}

const getFood = (link) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${link}`
    fetch(url)
        .then(res => res.json())
        .then(data => showFood(data.meals))
}

const showFood = food => {
    const container = document.getElementById("search-items")
    
    // container.innerHTML=''
    container.textContent = ''
    
    food.map(food => {
        const searchItem = document.createElement('div')
        searchItem.classList.add("col")
        console.log(food)
        const template = `
        <div onclick="foodDetails('${food.idMeal}')" class="col">
                <div class="card h-100">
                    <img src = "${food.strMealThumb}"
                    class = "card-img-top"
                    alt = "...">
                    <div class="card-body">
                        <h5 class="card-title">${food.strMeal}</h5>
                        <p class="card-text">${food.strInstructions.slice(0,150)}</p>
                    </div>
                </div>
            </div>
        `;
        searchItem.innerHTML = template;
        container.appendChild(searchItem)
    })
}
const foodDetails = (foodId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
    fetch(url)
        .then(res => res.json())
        .then(data => showFoodDetails(data.meals[0]))
}
const showFoodDetails = (data) => {
    const details = document.getElementById('details')
    const template = `
        <div class="card mb-3">
            <img src = "${data.strMealThumb}"
            class = "card-img-top"
            alt = "..." >
            <div class="card-body">
                <h5 class="card-title">${data.strMeal}</h5>
                <p class="card-text">${data.strInstructions}</p>
            </div>
        </div>
    `;
    details.innerHTML = template;
    console.log('data', data)
}