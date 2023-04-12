var nameTag = document.getElementById("name");
var priceTag = document.getElementById("price");
var totalTag = document.getElementById("total");
var trang = new URLSearchParams(location.search);
var nameValue = trang.get('name');
var priceValue = trang.get('price');
var totalValue = trang.get('total');




nameTag.innerHTML = nameValue;
priceTag.innerHTML = priceValue;
totalTag.innerHTML = totalValue;

