var n = Number(prompt("Ingrese la cantidad de numeros"));

function fibonacci(n){
    let i = 3;
    let primero = 0;
    let segundo = 1;
    let total = "0, 1";
    if(n == 1){
        console.log("0");
        return;
    }
    if(n == 2){
        console.log("0, 1");
        return;
    }  
    for(i; i <= n; i++){
        let actual = primero+segundo;
        total += ", "+actual;
        primero = segundo;
        segundo = actual; 
        
    }
    return total;
}

fibonacci(n);