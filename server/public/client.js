console.log('in client.js');

$(document).ready(onReady);

////   STATE/GLOBAL VARIABLES



////   EVENTS
function onReady(){

    $('#equalBtn').on('submit', onPostEquation);


};




///    UPDATE STATE   ---   AJAX GET/POST

function onPostEquation(evt){
    evt.preventDefault();

    let equation = {
        num1: $('#firstNum').val(),
        // operation: //HOW TO DETERMINE WHICH OPERATION WAS SELECTED
        num2: $('#secNum').val()
    };

    console.log(equation);

    $.ajax({
        url: '/equations',
        method: 'POST',
        data: equation
    })
    .then(response=>{
        console.log('here in postEquation', response);
    })
    .catch(err=>{
        console.log('Oops! Error: ', err);
    });
    


}







///    RENDER TO DOM