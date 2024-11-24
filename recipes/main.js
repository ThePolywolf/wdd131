import recipes from './recipes.mjs';

function getRandom(max) {
    return Math.floor(Math.random()*max)
}

function randomFromArray(arr) {
    return arr[getRandom(arr.length)]
}

function tagsTemplate(tags) {
    let html = "";

    for (let i = 0; i < tags.length; i++) {
        html += `<span class="recipe-tag">${tags[i]}</span>`;
    }

    return html;
}

function ratingTemaplate(rating) {
    let html = `
        <span
            class="rating"
            role="img"
            aria-label="Rating: 4 out of 5 stars"
        >
    `;

    for (let i = 0; i < 5; i++) {
        if (rating > i) {
            html += '<span aria-hidden="true" class="icon-star">⭐</span>';
        }
        else {
            html += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
        }
    }

    return html + '</span>';
}

function recipeTemplate(recipe) {
    return `
    <section class="recipe">
        <div class="img-section">
            <img src="${recipe.image}" alt="${recipe.name}">
        </div>
        <div class="content-section">
            <span class="tags">${tagsTemplate(recipe.tags)}</span>
            <h2><a href="#">${recipe.name}</a></h2>
            ${ratingTemaplate(recipe.rating)}
            <p class="description">${recipe.description}</p>
        </div>
    </section>
    `;
}

function renderRecipes(recipeList) {
    let html = "";
    
    for (let i = 0; i < recipeList.length; i++) {
        html += recipeTemplate(recipeList[i]);
    }

    document.getElementById('recipes-section').innerHTML = html;
}

function init() {
    const recipe = randomFromArray(recipes);
    renderRecipes([recipe]);
}

init();

function filterRecipes(recipes, q) {
    return recipes.filter((recipe) => 
        recipe.name.toLowerCase().includes(q) 
        || recipe.description.toLowerCase().includes(q) 
        || recipe.tags.some((tag) => tag.toLowerCase().includes(q)) 
        || recipe.recipeIngredient.some((i) => i.toLowerCase().includes(q))
    );
}

document.getElementById('search').addEventListener('click', (e) => {
    e.preventDefault();
    const q = document.getElementById('search-box').value;
    const results = filterRecipes(recipes, q.toLowerCase()).sort((A, B) => {
        const a = A.name.toLowerCase();
        const b = B.name.toLowerCase();

        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
    renderRecipes(results);
});