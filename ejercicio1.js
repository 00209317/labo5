var palabra = prompt("Ingrese la palabra");

function palindromo(palabra){
    if(palabra.split("").reverse().join("") == palabra){
        console.log("Es palindromo " + palabra.split("").reverse().join(""));
    }
    else{
        console.log("No es palindromo " + palabra.split("").reverse().join(""));
    }
}

palindromo(palabra);