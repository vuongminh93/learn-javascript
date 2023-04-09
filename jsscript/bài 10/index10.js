var thuLaiToanCuc = 1;


function dangNhap(){
    var useName = document.getElementById("useName").value;
    var passWord = document.getElementById("passWord").value;
    var passwordDung = "123456";
    
    if(passWord == passwordDung) {
        alert("bạn đã đăng nhập thành công");
        window.location= "trangchu.html";
    } else {
        if (thuLaiToanCuc <= 3) {
            thuLaiToanCuc++;
        } else {
            // an nut dang nhap
            console.log("an nut dang nhap");
            ////
            var dangNhap  = document.getElementById("dangNhap");
            dangNhap.style.display="none";
        }
        alert("bạn đặng nhập lại");
    }
}
