console.log('in client.js');

$(document).ready(onReady);

////   STATE/GLOBAL VARIABLES


///UNSURE IF THIS NEEDS TO BE GLOBAL
let clientAllCalulations;
let clientCurrentResult = 0;


////   EVENTS
function onReady(){

    ///  listener for each operation
    $('#inputForm').on('submit', onCalculate)

    // $('#equalBtn').on('submit', onPostEquation);

};


function onCalculate(evt){
    evt.preventDefault();
    

    let addNumbers ={
        firstNum: $('#firstNum').val(),
        secNum: $('#secNum').val(),
        operation: $('input[name=operation]:checked').val()
        
    };
    console.log(addNumbers);
    

    
    $.ajax({
        url: '/calculate',
        method: 'POST',
        data: addNumbers
    })
    .then(response=>{
        console.log('in add ajax POST');


        getStoredEquations();
        getCurrentResult();
    });



function getStoredEquations(){

        $.ajax({
            url: '/allcalculations',
            method: 'GET'
        })
        .then(response=>{

            clientAllCalulations = response;
            console.log(clientAllCalulations);
            // render(); SHOULD EACH GET HAVE A RENDER????

        });
    };
};

function getCurrentResult(){

    $.ajax({
        url: '/calculatecurrent',
        method: 'GET'
    })
    .then(response=>{

        clientCurrentResult = response;
        console.log(clientCurrentResult);


    });

}

 







//     UPDATE STATE   ---   AJAX GET/POST


// RENDER FOR CALCULATION HISTORY
function render(){
    $('#calHistory').empty();

    for(let cal of clientAllCalulations){
         $('#calHistory').append(`<p>${cal}</p>`);
    }
   
    
}









// function onPostEquation(evt){
//     evt.preventDefault();

//     let equation = {
//         num1: $('#firstNum').val(),
//         // operation: //HOW TO DETERMINE WHICH OPERATION WAS SELECTED
//         num2: $('#secNum').val()
//     };

//     console.log(equation);

//     $.ajax({
//         url: '/equations',
//         method: 'POST',
//         data: equation
//     })
//     .then(response=>{
//         console.log('here in postEquation', response);
//     })
//     .catch(err=>{
//         console.log('Oops! Error: ', err);
//     });
    


// }







// ///    RENDER TO DOM