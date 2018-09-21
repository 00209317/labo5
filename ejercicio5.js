var radio = prompt("Ingrese el radio de la circunferencia");

function areacirculo(radio){
    if(radio <= 0){
        return -1;
    }
    else if(radio > 0){
        let area;
        area = Math.PI*(Math.pow(radio, 2));
        return area;
    }
}

areacirculo(radio);