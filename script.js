function celtofar(){
    const cel = document.getElementById('cel').value;
    const far =  ( cel * (9/5)) + 32;
    if(far % 1 === 0){
        result = document.getElementById('result1').innerHTML =`${far}°F`;
    }
    else{
        result = document.getElementById('result1').innerHTML =`${far.toFixed(2)}°F`;
    }
}

function fartocel(){
    const far = document.getElementById('far').value;
    const cel =  ( (far - 32)*5) / 9;
    if(cel % 1 === 0){
        result = document.getElementById('result2').innerHTML =`${cel}°C`;
    }
    else{
        result = document.getElementById('result2').innerHTML =`${cel.toFixed(2)}°C`;
    }
}

function reset1(){
    document.getElementById('cel').value = "";
    document.getElementById('result1').innerHTML = "";
}

function reset2(){
    document.getElementById('far').value = "";
    document.getElementById('result2').innerHTML = "";
}

function exchange1(){
    document.getElementById('celtofar').style.display = "none";
    document.getElementById('fartocel').style.display = "flex";
    reset1();
}

function exchange2(){
    document.getElementById('celtofar').style.display = "flex";
    document.getElementById('fartocel').style.display = "none";
    reset2();
}