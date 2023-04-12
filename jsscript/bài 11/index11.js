var tongName = "";
var tongPrice = 0;
var priceText = "";


function buy1(){
    var a = document.getElementById("nameProduct1").innerHTML; //<p></p> <div></div> <input style="" value="500">
    var b = document.getElementById("price1").innerHTML;
    tongName = tongName + a + ",";
    priceText = priceText + b + ",";
    tongPrice += parseInt(b);
    
}


function buy2(){
    var a = document.getElementById("nameProduct2").innerHTML;
    var b = document.getElementById("price2").innerHTML;
    tongName += a + ",";
    priceText += b + ",";
    tongPrice += parseInt(b);
}


function buy3(){
    var a = document.getElementById("nameProduct3").innerHTML;
    var b = document.getElementById("price3").innerHTML;
    tongName += a + ",";
    priceText += b + ",";
    tongPrice += parseInt(b);
    
}


function buy4(){
    var a = document.getElementById("nameProduct4").innerHTML;
    var b = document.getElementById("price4").innerHTML;
    tongName += a + ",";
    priceText += b + ",";
    tongPrice += parseInt(b);
    
}



function total(){
    var a = tongName;
    var b = tongPrice;
    var c = priceText;
    window.location = "trang.html?name="+ a + "&price=" + c + "&total=" + b;
    
}