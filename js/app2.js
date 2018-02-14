// Declarando las variables
const form2 = document.getElementById('search-form2');
const searchFi = document.getElementById('search-key');
const responseContent = document.getElementById('response-content');
let searchedText;

//const btn = document.getElementById('btn');

// 
form2.addEventListener('submit',function(e){
    e.preventDefault();
responseContent.innerHTML = '';
//obtener el valor 
searchedText = searchFi.value;    
const uriApi = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=6ca5a001d02046829ea401b24f7586da`
console.log(searchedForText);
// accediendo a la data de la Api con fetch
    fetch(uriApi)
    .then(function(response){
        console.log(response);
        return response.json()
    }).then(function(data){
       console.log(data.response.docs[0]);
      
   })
    .catch(function(error){
        console.log(error);
    }) 
});  