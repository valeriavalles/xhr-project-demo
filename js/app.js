
const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForText;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    responseContainer.innerHTML = '';
    searchedForText = searchField.value;
    getNews();
});
function getNews() {
    const articleRequest = new XMLHttpRequest();
    articleRequest.open('GET',`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=6ca5a001d02046829ea401b24f7586da`);
    articleRequest.onload = addNews;
    articleRequest.onerror = handleError;
    articleRequest.send();
   // https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=dfcd365f4d354fd4abb3e5308452082b
}
function handleError() {
    console.log('se ha presentando un error');
}
function addNews(){
    const data = JSON.parse(this.responseText);
    const article = data.response.docs[0];
    const title = article.headline.main;
    const snippet = article.snippet;

    let li = document.createElement('li');
    li.className = 'articleClass';
    li.innerText = snippet;

    responseContainer.appendChild(li);
}