var app = function(){

// create parent container
var cat = document.createElement('ul');
cat.classList.add('cat');

// create name
var catName = document.createElement('li');
catName.innerText = "Name: Bob";


// create favourite food
var favouriteFood = document.createElement('li');
favouriteFood.innerText = "Favourite food: Fish";

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
//
var createCat = function(){
  var cat = document.createElement('ul');
  cat.classList.add('cat');
  return cat
}

var createName = function(name){
  var catName = document.createElement('li');
  catName.innerText = "Name: " + name;
  return catName
}

var createFood = function(favFood){
  var favouriteFood = document.createElement('li');
  favouriteFood.innerText = "Favourite food: " + favFood;
  return favouriteFood
}

var createLi = function(){
  var Li = document.createElement('li');
  return Li
}

var createPic = function(pic){
  var picture = document.createElement('img')
  picture.src = pic
  picture.width = "500"
  return picture
}

var appendElements = function(cat, catName, favouriteFood, Li, picture){
  Li.appendChild(picture);
  favouriteFood.appendChild(Li);
  catName.appendChild(favouriteFood);
  cat.appendChild(catName);
  var cats = document.querySelector('#cats');
  cats.appendChild(cat);
}


var addCat = function(name, favFood, pic){
  var cat = createCat();
  var catName = createName(name);
  var favouriteFood = createFood(favFood);
  var Li = createLi();
  var picture = createPic(pic);
  appendElements(cat, catName, favouriteFood, Li, picture);
}

var cats = [{name: "Boba", favouritefood: "sock fluff", picture: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"}, {name: "Barnaby", favouritefood: "Tuna", picture: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"}, {name: "Max", favouritefood: "Whiskas Temptations", picture:"http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"}, ]

var addCats = function(cats){
for(cat of cats){
  addCat(cat.name, cat.favouritefood, cat.picture)
}
}

addCats(cats);
addCat("Tiggles", "cheese", "https://static.pexels.com/photos/20787/pexels-photo.jpg" );

}

window.onload = app;
