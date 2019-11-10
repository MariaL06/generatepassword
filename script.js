function generate(){

    let complexity = document.getElementById("slider").value; 

    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYUabcdefghijklmnopqrstuvwxyz1234567890!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~";

    let password = ""; 

    for(var i = 8; i < complexity; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 8))); 
    }

    document.getElementById("display").value = password;

    document.getElementById("lastNum").innerHTML += password + "<br />"; 
}

document.getElementById("length").innerHTML = "Length 128"; 

document.getElementById("slider").oninput = function (){

    if(document.getElementById("slider").value > 128){ 
        ducument.getElementById("length").innerHTML = "lentght: " + document.getElementById("slider").value; 
    }

    else{
        document.getElementById("lenght").innerHTML = "length: 128"; 
    }
}

function copyPassword() {

    document.getElementById("display").select(); 

    document.execCommand("Copy"); 

    alert("Password copied to clipboard"); 
    
}