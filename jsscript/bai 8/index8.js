

function printSnt(){
    var number = document.getElementById("number").value; // "1"
    number = parseInt(number); // 1
    var html = "";
    for( var i = 1; i <= number; i++){
        if(kiemTraSnt(i)){
            html += i + "|";
        }
    }
    document.getElementById('result'). innerHTML = html;
}
    function kiemTraSnt(n){
        var flag = true;
        if(n < 2){
            flag = false;
        } else if(n == 2){
            flag = true;
        } else if(n % 2 == 0){
            flag = false;
        } else{
            for(var i = 3; i <= Math.sqrt(n); i += 2){
                if(n % i == 0){
                    flag = false;
                    break;
                }   
            }
            console.log("exit");
        }

        return flag;
    }
