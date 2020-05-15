function calculateFK(e){ // Из цельсия в кельвины фаренгейты
    var key = e.keyCode || e.which;
    if (key === 13){
        var cTemp = parseFloat(document.getElementById("cTemp").value)
        if (cTemp < -273.15){
            alert("Такой температуры не существует");
        }
        else{
            var prost = cTemp * 1.8 + 32 ;
            document.getElementById("fTemp").value = prost.toFixed(1);
            prost = cTemp + 273.16 ;
            document.getElementById("kTemp").value = prost.toFixed(1);
        };
    }
};

function calculateCK(e){ // Из фаренгейтов в цельсии и кельвины
    var key = e.keyCode || e.which;
    if (key === 13){
        var fTemp = parseFloat(document.getElementById("fTemp").value)
        if (fTemp < -459.67){
            alert("Такой температуры не существует");
        }
        else{
            var prost = (fTemp - 32) / 1.8 ;
            document.getElementById("cTemp").value = prost.toFixed(1);
            prost = prost + 273.16 ; 
            document.getElementById("kTemp").value.toFixed(1) = prost.toFixed(1);
        };
    }
};

function calculateCF(e){ // из кеолвинов в цельсии и фаренгейты
    var key = e.keyCode || e.which ;
    if (key === 13){
        var kTemp = parseFloat(document.getElementById("kTemp").value);
        if (kTemp < 0){
            alert("Такой темепературы не существует");
        }
        
        else{
            var prost = kTemp - 273.16 ; 
            document.getElementById("cTemp").value = prost.toFixed(1);
            prost = prost * 1.8 + 32 ;
            document.getElementById("fTemp").value = prost.toFixed(1);
        }
    }
}


function reset(){  // очищающая ф-ия
    document.getElementById("cTemp").value = null;
    document.getElementById("fTemp").value = null;
    document.getElementById("kTemp").value = null;  
    
      
};

function digitalWatch() {
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
if (hours < 10) hours = "0" + hours;
if (minutes < 10) minutes = "0" + minutes;
if (seconds < 10) seconds = "0" + seconds;
document.getElementById("digital_watch").innerHTML = hours + ":" + minutes + ":" + seconds;
setTimeout("digitalWatch()", 1000);
}