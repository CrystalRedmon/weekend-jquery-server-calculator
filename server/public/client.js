console.log('in client.js');

$(document).ready(onReady);

////   STATE/GLOBAL VARIABLES
let clientAllCalulations;
let clientCurrentResult = 0;


////   EVENTS
function onReady(){

    ///  listener for submit and clear
    $('#inputForm').on('submit', onCalculate);

    $('#inputForm').on('submit', '#clearbtn', onClear);

    getStoredEquations();
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
        console.log('in add ajax POST', response);
        getStoredEquations();
        
    });

}


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




 

// RENDER FOR CALCULATION HISTORY
function render(){
    $('#calHistory').empty();
    $('#currentResult').empty();

    let revClientAllCalculations = clientAllCalulations.reverse();
    console.log(revClientAllCalculations)

    for(let cal of clientAllCalulations){
         $('#calHistory').append(`<li>${cal}</li>`);
    }
   
    $('#currentResult').append(`<p>${clientCurrentResult}</p>`);
    
}




/// CLEAR FORM

function onClear(evt){
    evt.preventDefault();

    form.reset();
 
 };











