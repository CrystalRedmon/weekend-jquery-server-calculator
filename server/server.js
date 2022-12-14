const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

//This must be added before GET & POST routes. 
app.use(bodyParser.urlencoded({ extended: true }));

//Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

console.log('here in the server');


let completedCalculations = []; /// will hold equation strings with results 
let serverCurrentCalculation = []; /// the answer for the current calculation

////holds stored calculations that will be displayed when page loads
let allCalculations = [
    {
        firstNum: '3',
        secNum: '4',
        operation: '+'
    },
    {
        firstNum: '2',
        secNum: '1',
        operation: '-'
    },
    {
        firstNum: '5',
        secNum: '2',
        operation: '*'
    },
    {
        firstNum: '9',
        secNum: '3',
        operation: '/'
    },


];



////// RECEIVE DATA FROM CLIENT
app.post('/calculate', (req, res) => {

    currentCalculation = req.body;

    allCalculations.push(currentCalculation);

    res.sendStatus(201);
});




//// function that will iterate over the allCalculations array of object and calculate the outcome for each object 
//// function should push a string into completedCalculation array. 
function getCalculationStrings() {

    for (let objectEquation of allCalculations) {

        serverCurrentCalculation = [];


        if (objectEquation.operation === '+') {

            let result = Number(objectEquation.firstNum) + Number(objectEquation.secNum);
            let equationString = (`${Number(objectEquation.firstNum)} ${objectEquation.operation} ${Number(objectEquation.secNum)} = ${result}`);
            completedCalculations.push(equationString);
            serverCurrentCalculation.push(result);

        } else if (objectEquation.operation === '-') {

            let result = Number(objectEquation.firstNum) - Number(objectEquation.secNum);
            let equationString = (`${Number(objectEquation.firstNum)} ${objectEquation.operation} ${Number(objectEquation.secNum)} = ${result}`);
            completedCalculations.push(equationString);
            serverCurrentCalculation.push(result);

        } else if (objectEquation.operation === '*') {

            let result = Number(objectEquation.firstNum) * Number(objectEquation.secNum);
            let equationString = (`${Number(objectEquation.firstNum)} ${objectEquation.operation} ${Number(objectEquation.secNum)} = ${result}`);
            completedCalculations.push(equationString);
            serverCurrentCalculation.push(result);

        } else if (objectEquation.operation === '/') {

            let result = Number(objectEquation.firstNum) / Number(objectEquation.secNum);
            let equationString = (`${Number(objectEquation.firstNum)} ${objectEquation.operation} ${Number(objectEquation.secNum)} = ${result}`);
            completedCalculations.push(equationString);
            serverCurrentCalculation.push(result);

        };


    };
};


/// RESPOND WITH CURRENT RESULT
app.get('/calculatecurrent', (req, res) => {

    res.send(serverCurrentCalculation);
    completedCalculations = [];
});



///// RESPOND WITH ALL CALCULATIONS
app.get('/allcalculations', (req, res) => {

    getCalculationStrings();

    res.send(completedCalculations);

    completedCalculations = [];

});



app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});























    // serverCurrentCalculation = []


    // if(currentCalculation.operation === '+'){
    //     let result = Number(currentCalculation.firstNum) + Number(currentCalculation.secNum);
    //     serverCurrentCalculation.push(result);


    // }else if(currentCalculation.operation === '-'){
    //     let result = Number(currentCalculation.firstNum) - Number(currentCalculation.secNum);
    //     serverCurrentCalculation.push(result);

    // }else if(currentCalculation.operation === '*'){
    //     let result = Number(currentCalculation.firstNum) * Number(currentCalculation.secNum);
    //     serverCurrentCalculation.push(result);

    // }else if(currentCalculation.operation === '/'){
    //     let result = Number(currentCalculation.firstNum) / Number(currentCalculation.secNum);
    //     serverCurrentCalculation.push(result);

    //     currentCalculation =result;

  // }

    // console.log(currentCalculation);

    // console.log(currentCalculation);
    // console.log(currentCalculation.firstNum, currentCalculation.operation, currentCalculation.secNum);