const express = require('express'); 
const bodyParser = require('body-parser'); 
const app = express();
const PORT = 5000;

//This must be added before GET & POST routes. 
app.use(bodyParser.urlencoded({extended:true}));

//Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

console.log('here in the server');



let serverCurrentCalculation = [];
let allCalculations= [];





////// RECEIVE DATA FROM CLIENT
app.post('/calculate', (req, res)=>{

    currentCalculation = req.body;

    allCalculations.push([`${currentCalculation.firstNum} ${currentCalculation.operation} ${currentCalculation.secNum}`]);

    serverCurrentCalculation = []


    if(currentCalculation.operation === '+'){
        let result = Number(currentCalculation.firstNum) + Number(currentCalculation.secNum);
        serverCurrentCalculation.push(result);
        

    }else if(currentCalculation.operation === '-'){
        let result = Number(currentCalculation.firstNum) - Number(currentCalculation.secNum);
        serverCurrentCalculation.push(result);

    }else if(currentCalculation.operation === '*'){
        let result = Number(currentCalculation.firstNum) * Number(currentCalculation.secNum);
        serverCurrentCalculation.push(result);
        
    }else if(currentCalculation.operation === '/'){
        let result = Number(currentCalculation.firstNum) / Number(currentCalculation.secNum);
        serverCurrentCalculation.push(result);

        currentCalculation =result;
        
    }

    console.log(currentCalculation);

    // console.log(currentCalculation);
    // console.log(currentCalculation.firstNum, currentCalculation.operation, currentCalculation.secNum);

    ///⬇️ IF NOT INCLUDED THE PAGE WILL NEED TO BE REFRESHED TO SEE NEW INFO
    res.sendStatus(201);

});






///// RESPOND WITH ALL CALCULATIONS
app.get('/allcalculations', (req, res)=>{

    console.log('in allcals');
    res.send(allCalculations);


})


/// RESPOND WITH CURRENT RESULT
app.get('/calculatecurrent', (req, res)=>{

    console.log(serverCurrentCalculation);
    res.send(serverCurrentCalculation);
    

});



//////////  UPDATE STATE   ////////


///////// GET will call this funtion to retrieve the current result

/////MOVED TO POST
// function serverCalculationResult(){

//     if(currentCalculation.operation === '+'){
//         let result = Number(currentCalculation.firstNum) + Number(currentCalculation.secNum);
//         return result;
//     }else if(currentCalculation.operation === '-'){
//         let result = Number(currentCalculation.firstNum) - Number(currentCalculation.secNum);
//         return result; 
//     }else if(currentCalculation.operation === '*'){
//         let result = Number(currentCalculation.firstNum) * Number(currentCalculation.secNum);
//         return result;
//     }else if(currentCalculation.operation === '/'){
//         let result = Number(currentCalculation.firstNum) / Number(currentCalculation.secNum);
//         return result;
//     }


// };




































app.listen(PORT, () =>{
    console.log('Server is running on port', PORT);
})

