var myCanvar=document.getElementById("myCanvar");
var context=myCanvar.getContext("2d");
console.log(context);

nhanvat = {
    x:100, y:500
}
 setInterval( start, 100);

 function start(){
 context.fillstyle="red";
 context.fillRect(100,500,25,25);
 context.fillRect(nhanvat.x, nhanvat.y, 25,25);
 vacham();
 }

 function vacham() {
    if(nhanvat.x <= o || x + 25 >= 300){
        console.log("thua");
    }

 }

 document.addEventListener("keydown", key=>{
    switch(key.code){
        case 37:
            if(nhanvat.x > 0)
            nhanvat.x -= 5;
            break;
        case 38:
            nhanvat.y -= 5;
            break;
        case 39:
            if(nhanvat.x +25 >= 300)
            nhanvat.x += 5;
            break;
        case 40:
            nhanvat.y += 5;
            break; 
    }
 });
