const express = require('express');
const { nextTick } = require('process');
const myMiddleware = require('./middlewares/middle')
const myMiddleware1 = require('./middlewares/middle1');
const morgan = require('morgan');

const app = express();

app.use(express.json());

app.use(myMiddleware);


app.use(myMiddleware1);
app.use(morgan('tiny'));

const courses =[
    {id:1, name: 'Neem'},
    {id:2, name: 'Tulsi'},
    {id:3, name: 'Hibiscus'},
    {id:4, name: 'Vattiver'}
]

app.get('/',(req,res)=>{
    res.send("hello Herbal Products");
});

app.get('/about', (req,res)=>{
    res.send("node is changing")
})

app.get('/contact', (req,res)=>{
    res.send("node is in contact");
})


//Route Parameters
app.get('/courses/:courId',(req,res)=>{
    console.log(req.params);
    let course = courses.find(courses=>courses.id === parseInt(req.params.courId));
    res.send(course);
});

app.get('/courses', (req,res)=>{
    res.send(courses);
});

app.post('/courses' ,(req,res)=>{
    console.log(req.body.name);
    const item ={
        name : req.body.name,
        id : courses.length+1 
        
    }
    courses.push(item);
    res.send(item);
});

//put
app.put('/courses/:courId', (req,res)=>{
    console.log(req.params.courId);

    let course = courses.find(courses=>courses.name === req.params.courId);
    course.name = req.body.name;
    res.send(course);
})
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Port runing in ${port}`);
});