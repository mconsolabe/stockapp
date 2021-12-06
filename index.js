const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

//use body parser middleware
app.use(bodyParser.urlencoded({extended:false}));



//API KEY : pk_3779ed987b754035a3b7ca0a640f82e4 
//Create call_api function
function call_api(finishedAPI,ticker) {
    request('https://cloud.iexapis.com/stable/stock/' + ticker + '/quote?token=pk_3779ed987b754035a3b7ca0a640f82e4',{json: true}, (err,res, body)=>{
    if (err) {return console.log(err);}
    console.log(body);
    if (res.statusCode === 200){
        //console.log(body);
        finishedAPI (body)
    };
});

};



app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

const otherstuff = "Hell there , this is other stuff !";
//Set handlebar index GET route
app.get('/', function (req, res)  {
    call_api(function(doneAPI){
        res.render('home',{
            stock: doneAPI
        });

    })
    
    
});

//Set handlebar index POST route
app.post('/', function (req, res)  {
    call_api(function(doneAPI){
        //posted_stuff= req.body.stock_ticker;
        res.render('home',{
            stock: doneAPI    
        });

    }, req.body.stock_ticker);
    
    
});


//route for index2
app.get('/index2.html', function (req, res)  {
    res.render('index2');
})



app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => console.log('The server is listening on port'+" "+ PORT))