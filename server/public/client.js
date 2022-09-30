console.log('in client.js');

$(document).ready(onReady);

////   STATE/GLOBAL VARIABLES


///UNSURE IF THIS NEEDS TO BE GLOBAL
let clientCurrentEquation = []


////   EVENTS
function onReady(){

    ///  listener for each operation
    $('#add').on('click', onAddNum)

    $('#equalBtn').on('submit', onPostEquation);


};


function onAddNum(){
    let addNumbers ={
        firstNum: $('#firstNum'),
        addOperation: '+',
        secNum: $('#secNum')
        
    };

    clientCurrentEquation = addNumbers

    $.ajax({
        url: '/add',
        method: 'POST',
        data: addNumbers
    })
    .then(response=>{
        console.log('in add ajax POST');

        ///THIS CALLS FUNCTION THAT WILL 'GET' EQUATION HISTORY
        getStoredEquations();

        ///THIS CALLS THE FUNCTION THAT WILL GET CURRENT RESULT
        getCurrentResult();
    })

};





//     UPDATE STATE   ---   AJAX GET/POST













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