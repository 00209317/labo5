var anio = prompt("Ingrese anio");
function bisiesto(n){
    if(((n%4==0)&&(n%100!=0))||((n%4==0)&&(n%100==0)&&(n%400==0))){
        console.log("El anio " + n + " es bisiesto");
    }
    else{
        console.log("El anio " + n + " no es bisiesto");
    }
}
bisiesto(anio);