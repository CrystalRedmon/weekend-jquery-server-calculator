console.log('in client.js');

$(document).ready(onReady);

////   STATE/GLOBAL VARIABLES
let clientAllCalulations;
let clientCurrentResult = 0;


////   EVENTS
function onReady(){

    ///  listener for submit and clear
    $('#inputForm').on('submit', onCalculate);

    $('#clearbtn').on('click', onClear);

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
        
    });




///////////     UPDATE STATE   ---   AJAX GET/POST
function getStoredEquations(){

        $.ajax({
            url: '/allcalculations',
            method: 'GET'
        })
        .then(response=>{

            clientAllCalulations = response;
            console.log(clientAllCalulations);
            render();
        });



        $.ajax({
                url: '/calculatecurrent',
                method: 'GET'
            })
            .then(response=>{

                clientCurrentResult = response;
                console.log(clientCurrentResult);
                render();

            });

    };      
};



 

// RENDER FOR CALCULATION HISTORY
function render(){
    $('#calHistory').empty();
    $('#currentResult').empty();

    for(let cal of clientAllCalulations){
         $('#calHistory').append(`<li>${cal}</li>`);
    }
   
    $('#currentResult').append(`<p>${clientCurrentResult}</p>`);


    
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