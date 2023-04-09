//

function changeBackgroud(){
    var divs = document.getElementsByTagName("div");
    console.log(divs);
    for( var i=0; i < divs. length; i++){
        if((i + 1) % 2 == 0){
            divs[i].style.backgroudColor = "red";
        }
        else{
            divs[i].style.backgroudColor = "blue"   
        }
    }
}