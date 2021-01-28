
/* swal("BIENVENIDOS");
alert("BIENBENIDOS"); */
/*console.log("Otra manera de generar una alerta");*/

/*esta funcion me va a generar un nuevo valor del los botones seleccionados*/

function updateInput(newValue, clear = false) {
    var div = document.getElementById('date');
    
    /* las comillas invertidas se sacan con la tecla altgr + cierrra corchetes*/
    div.value = clear ? newValue : `${div.value}${newVlaue}`;
 
   /* if(clear){
        div = newValue;
    }
    else{
        div = `${div}${newVlaue}`;
    } */
}

function printOperate(date) {
    updateInput( `${date.value}` );   
}
function printnumber(date) {
    updateInput(date.value);   
}
function ClearInput() {
    updateInput('' , true);   
}
function printOperation() {
    var date = document.getElementById('date').value;
    var array = validateOperate (date.split(' '));
    updateInput(array , true);
}

function validateOperate (arrayDate) {
    var resultado;
    var numero1, numero2;

    numero1 = Number(arrayDate[0]);
    numero2 = Number(arrayDate[2]);

    switch (arrayDate) {
        case '+':
            resultado = numero1 + numero2;
            break;
         case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            resultado = numero1 / numero2;
            break;
    }

    return resultado;
}