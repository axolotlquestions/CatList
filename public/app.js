var app = function(){

// create parent container
var cat = document.createElement('ul');
cat.classList.add('cat');

// create name
var catName = document.createElement('li');
catName.innerText = "Name: Bob";


// create favourite food
var favouriteFood = document.createElement('li');
favouriteFood.innerText = "Favourite Food Fish";

// create picture
var image = document.createElement('li');

var picture = document.createElement('img')
picture.src = "https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg"
picture.width = "500"

// append these
image.appendChild(picture);
favouriteFood.appendChild(image);
catName.appendChild(favouriteFood);
cat.appendChild(catName);
var cats = document.querySelector('#cats');
cats.appendChild(cat);



// append cite to blockQuote
//     blockQuote.appendChild(cite);
//
//     // append block quote to article
//     quoteArticle.appendChild(blockQuote);
//
//     // append quotearticle to quotelist
//     var quotes = document.querySelector('#quotes');
//     quotes.appendChild(quoteArticle);




}

window.onload = app;
