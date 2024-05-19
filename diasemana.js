/* Escribe tu código aquí */

function diaDeHoy(dia){
    if (dia == 0){
     nombreDia = "Domingo";
    } else if ( dia == 1){
     nombreDia = "Lunes";
    } else if (dia == 2){
     nombreDia = "Martes";
    } else if (dia == 3){
     nombreDia= "Miercoles";
    } else if (dia == 4){
     nombreDia = "Jueves";
    } else if (dia == 5){
     nombreDia = "Viernes";
    } else if (dia == 6){
     nombreDia= "Sábado";
    } else if(dia > 6){
     nombreDia="Valor inválido";
    }
    return nombreDia;
 }
 
 diaDeHoy(3);
 
 
 
 
 /* Fin */