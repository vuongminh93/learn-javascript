function sword(){
    var damageSword=document.getElementById("damage1");

    var bloodMagicWand=document.getElementById("fullBlood2");

    var remainingBloodMagic=bloodMagicWand.getAttribute('data-blood2')-damageSword.value;
console.log(remainingBloodMagic);
    var bloodIsLostMagic=(100-remainingBloodMagic)+ "%";

    bloodMagicWand.style.setProperty('--bloodIsLostMagic', bloodIsLostMagic);

    bloodMagicWand.setAttribute('data-blood2', remainingBloodMagic);
    console.log(bloodIsLostMagic);
}

function magicWand(){
    var damageMagicWand=document.getElementById("damage2");

    var bloodSword=document.getElementById("fullBlood1");

    var remainingBloodSword=bloodSword.getAttribute('data-blood1')-damageMagicWand.value;
console.log(remainingBloodSword);
    var bloodIsLostSwand=(100-remainingBloodSword)+ "%";

    bloodSword.style.setProperty('--bloodIsLostSwand', bloodIsLostSwand);

    bloodSword.setAttribute('data-blood1', remainingBloodSword);
}
function handForce(){
    var damageSword=document.getElementById("damage1");
    var damageMagicWand=document.getElementById("damage2");

    damageSword.value =  Math.floor(Math.random() * 11);
    damageMagicWand.value =  Math.floor(Math.random() * 11);
}