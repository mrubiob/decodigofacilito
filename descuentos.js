/* Escribe tu código aquí */

function descuentos(cantidad, hora){
    if (hora == "Mañana"){
        if (cantidad >= 10){
            return "Descuento del 25% en la compra matutina";
        } else if(cantidad >= 5 && cantidad <10){
            return "Descuento del 15% en la compra matutina";
        } else if (cantidad <3){
            return "Sin descuento en la compra matutina";
        }

    }else {
         if (cantidad >= 10){
            return "Descuento del 15% en la compra nocturna";
        } else if(cantidad >= 5 && cantidad <10){
            return "Descuento del 5% en la compra nocturna";
        } else if (cantidad >=3 % cantidad<5 ){
            return "Descuento del 3% en la compra nocturna";
        } else if (cantidad<3){
            return "Sin descuento en la compra nocturna";
        }

    }
}



/* Fin */