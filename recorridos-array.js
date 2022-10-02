var articles = [
  { name: "Bike", price: 200 },
  { name: "TV", price: 500 },
  { name: "Book", price: 30 },
  { name: "Phone", price: 1000 },
  { name: "Laptop", price: 1500 },
  { name: "Keyboard", price: 50 },
  { name: "Headphones", price: 100 },
];

//Metodo filter
var filteredArticles = articles.filter(function (article) {
  return article.price <= 500;
});

//Metodo map
var articleNames = articles.map(function (article) {
  return article.name;
});

//Metodo find
var findArticle = articles.find(function (article) {
  return article.name === "Laptop";
});

//Metodo forEach
articles.forEach(function(article){
    console.log(article.name)
})

//Metodo some
var cheapArticles = articles.some(function(article){
    return article.price <= 100;
})