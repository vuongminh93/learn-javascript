var do_alert = setTimeout(function() {
    alert("chaò bạn mình tên Minh");
}, 3000);

function xoaBo() {
    clearTimeout(do_alert);
}