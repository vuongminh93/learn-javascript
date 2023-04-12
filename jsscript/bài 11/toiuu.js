var tongName = "";
var tongPrice = 0;
var priceText = "";

var buttons = document.getElementsByTagName("button"); // = [<button></button>, <></>, <></>, <></>]

for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];

    // if(index + 1 != buttons.length) {
    //     element.addEventListener('click', function() {
    //         var x = index + 1
    //         buy('nameProduct' + x, 'price' + x);
    //     });
    // }
    if(element.className != "tinhtong") {

        // buoc 1 gan su kien click
        element.addEventListener('click', function() {
            var x = index + 1
            buy('nameProduct' + x, 'price' + x);
        });

        // buoc 2 gan su kien chuot dua vao the
        element.addEventListener('mouseenter', function() {
            element.style.color = "red";
        });

        // gan su kien chuot roi khoi the
        element.addEventListener('mouseleave', function() {
            element.style.color = "black";
        });

    } else {

        element.addEventListener('click', function() {
            total();
        });

        element.addEventListener('mouseenter', function() {
            element.style.color = "green";
        });

        element.addEventListener('mouseleave', function() {
            element.style.color = "black";
        });

    }
}
var p = document.getElementsByTagName("p");
for (let index = 0; index < p.length; index++) {
    const element1 = p[index];
    if (element1.className == "product"){
        element1.addEventListener('mouseenter', function() {
            element1.style.fontStyle = "italic";  
        });
        element1.addEventListener('mouseleave', function() {
            element1.style.fontStyle = "normal"; 
        });
    } else {
        element1.addEventListener('mouseenter', function() {
            element1.style.color = "green";
        });
        element1.addEventListener('mouseleave', function() {
            element1.style.color = "black";
        });
    }
}

function buy(nameProduct, price){
    
    var a = document.getElementById(nameProduct).innerHTML; //<p></p> <div></div> <input style="" value="500">
    var b = document.getElementById(price).innerHTML;
    tongName = tongName + a + ",";
    priceText = priceText + b + ",";
    tongPrice += parseInt(b);
    
}

function total(){
    var a = tongName;
    var b = tongPrice;
    var c = priceText;
    window.location = "trang.html?name="+ a + "&price=" + c + "&total=" + b;
    
}