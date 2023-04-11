var price1 = document.getElementById("price1");
function buy1(){
    var price1 = document.getElementById("price1").innerHTML;   
    var nameProduct1= document.getElementById("nameProduct1").innerHTML;
    console.log(price1)
    // window.location= "trang.html";
    // document.getElementById("name").innerHTML = nameProduct1;
    // document.getElementById("price").innerHTML = price1;
    
}

var price2 = document.getElementById("price2");
function buy2(){
    var price2 = document.getElementById("price2");
    var nameProduct2= document.getElementById("nameProduct2");
    window.location= "trang.html";
    document.getElementById("name").innerHTML = nameProduct2;
    document.getElementById("price").innerHTML = price2;
}

var price3 = document.getElementById("price3");
function buy3(){
    var price3 = document.getElementById("price3");
    var nameProduct3= document.getElementById("nameProduct3");
    window.location= "trang.html";
    document.getElementById("name").innerHTML = nameProduct3;
    document.getElementById("price").innerHTML = price3;
}

var price4 = document.getElementById("price4");
function buy4(){
    var price4 = document.getElementById("price4");
    var nameProduct4= document.getElementById("nameProduct4");
    window.location= "trang.html";
    document.getElementById("name").innerHTML = nameProduct4;
    document.getElementById("price").innerHTML = price4;
}

function total(){
    var total = document.getElementById("total");
    total = price1 + price2 + price3 + price4;
    window.location = "trang.html";
    document.getElementById("total"). innerHTML = total;
}