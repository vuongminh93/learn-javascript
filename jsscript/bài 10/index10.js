
 
function dangNhap(){
    var useName = document.getElementById("useName").value;
    var passWord = document.getElementById("passWord").value;
    var passwordDung = "123456";
    var thuLai = 1;
    
    do{
        if(passWord == passwordDung) {
            alert("bạn đã đăng nhập thành công");
        } else {
            alert("bạn đặng nhập lại");
        }
        thuLai = thuLai + 1;
    } while(thuLai < 3);   
}
