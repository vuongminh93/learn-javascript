function xuatChieu1() {
    var damageNhanVat1 = document.getElementById("damage1");

    var mauNhanVat2 = document.getElementById("mau2");

    var mauConLaiNv2 = mauNhanVat2.getAttribute('data-mau2') - damageNhanVat1.value;

    // var boxAfter = window.getComputedStyle(mauNhanVat1, "::after");

    // Ví dụ
    // Nv1 lực tay 20 đánh vô NV2 (100 MÁU)
    // -> NV2 còn lại 80 máu

    // mauConLaiNv1=mauNhanVat1.value - damageNhanVat2.value
    // mauConLaiNv1 = 100 - 20 = 80
    // console.log(mauConLaiNv1);
    var mauMatDi2 = (100 - mauConLaiNv2) + "%";
    // console.log(mauMatDi1);
    mauNhanVat2.style.setProperty('--mauMatDi2', mauMatDi2);

    mauNhanVat2.setAttribute('data-mau2', mauConLaiNv2);
}

function xuatChieu2() {

    var mauNhanVat1 = document.getElementById("mau1");

    var damageNhanVat2 = document.getElementById("damage2");


    var mauConLaiNv1 = mauNhanVat1.getAttribute('data-mau1') - damageNhanVat2.value;

    var mauMatDi1 = (100 - mauConLaiNv1) + "%";

    mauNhanVat1.style.setProperty('--mauMatDi1', mauMatDi1);

    mauNhanVat1.setAttribute('data-mau1', mauConLaiNv1);
}

function randomDamage() {
    var luctay1 = Math.floor(Math.random() * 10) + 1;
    var luctay2 = Math.floor(Math.random() * 10) + 1;
    var damageNhanVat1 = document.getElementById("damage1");
    var damageNhanVat2 = document.getElementById("damage2");
    damageNhanVat1.value = luctay1;
    damageNhanVat2.value = luctay2;
}