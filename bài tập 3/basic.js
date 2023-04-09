var a = 1;
let b = 2;

var c = a + b;

var chuoi = "Hello";

var p = document.getElementById("ketqua");
p.innerHTML = c;



// Tính tiền 
function tinh(){
    var soLuong = document.getElementById("soLuong");
    var giaTien = document.getElementById("giaTien");
    var tongtien = soLuong.value * giaTien.value;
    var p = document.getElementById("ketQua");
    p.innerHTML = tongtien;
}

function thongTin(){
    var ten =document.getElementById("ten");
    var tuoi = document.getElementById("tuoi");
    var thongTinDayDu = " hello " + ten.value + " " + tuoi.value +" Đã gửi thành công";
    alert(thongTinDayDu);
}

function thongTin1(){
    alert (
        " hello " + document.getElementById("ten").value + 
        " " + 
        document.getElementById("tuoi").value +
        " Đã gửi thành công"
    );
}



// alert(c);