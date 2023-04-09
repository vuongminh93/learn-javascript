var do_alert = setInterval(function() {
    alert("đây là quảng cáo");
}, 3000);

function xoaBo() {
    clearInterval(do_alert);
}
var day= "";
switch(new Date().getDay()){
    case 0:
        day = "sunday";
        break;
    case 1:
        day= "monday";
        break;
    case 2:
        day= "tuesday";
        break;
    case 3:
        day= "wednesday";
        break;
    case 4:
        day= "thursday";
        break;
    case 5:
        day= "friday";
        break;
    case 6:
        day= "satuday";
        break;
    default:
        day= "không thấy";

}
console.log(day);
