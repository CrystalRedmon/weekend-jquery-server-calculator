const express = require('express'); 
const bodyParser = require('body-parser'); 
const app = express();
const PORT = 5000;

//This must be added before GET & POST routes. 
app.use(bodyParser.urlencoded({extended:true}));

//Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

console.log('here in the server');



let currentCalculation =[]
let allCalculations= [];






app.post('/calculate', (req, res)=>{

    currentCalculation = req.body;
    allCalculations.push(currentCalculation);

    console.log(currentCalculation);
    console.log(allCalculations)

    ///⬇️ IF NOT INCLUDED THE PAGE WILL NEED TO BE REFRESHED TO SEE NEW INFO
    res.sendStatus(201);
 

console.log(serverCalculationResult());

});








//////////  UPDATE STATE   ////////


///////// GET will call this funtion to retrieve the current result
function serverCalculationResult(){

    if(currentCalculation.operation === '+'){
        let result = Number(currentCalculation.firstNum) + Number(currentCalculation.secNum);
        return result;
    }else if(currentCalculation.operation === '-'){
        let result = Number(currentCalculation.firstNum) - Number(currentCalculation.secNum);
        return result; 
    }else if(currentCalculation.operation === '*'){
        let result = Number(currentCalculation.firstNum) * Number(currentCalculation.secNum);
        return result;
    }else if(currentCalculation.operation === '/'){
        let result = Number(currentCalculation.firstNum) / Number(currentCalculation.secNum);
        return result;
    }


};




































app.listen(PORT, () =>{
    console.log('Server is running on port', PORT);
})

