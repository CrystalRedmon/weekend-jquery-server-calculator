const express = require('express'); 
const bodyParser = require('body-parser'); 
const app = express();
const PORT = 5000;

//This must be added before GET & POST routes. 
app.use(bodyParser.urlencoded({extended:true}));

//Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

console.log('here in the server');



let currentCalculation
let allCalculations= [];




app.post('/equations', (req, res)=>{

    currentCalculation= req.body;

     console.log(req.body);
     allCalculations.push(currentCalculation);

    ///⬇️ IF NOT INCLUDED THE PAGE WILL NEED TO BE REFRESHED TO SEE NEW INFO
    res.sendStatus(201);
    
});


























app.listen(PORT, () =>{
    console.log('Server is running on port', PORT);
})

