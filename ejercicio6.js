var real = prompt("Ingrese numero");

function valor_absoluto(real){
    if(real > 0){
        return real;
    }
    else if(real <= 0){
        return (real)*(-1);
    }
}

valor_absoluto(real);