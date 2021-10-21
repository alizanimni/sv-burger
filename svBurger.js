const express = require('express')
const app = express();

const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));

app.get('/' , (req,res)=>res.sendFile(__dirname+ '/homePage.html'))
app.use('/register' , express.static('./register.html'));
app.use('/login' , express.static('./login.html'));
app.use('/regSuccess' , express.static('./regSucces.html'));
app.use('/menu' , express.static('./menu.html'));
app.use('/pay' , express.static('./pay.html'));

app.use(express.static('public'))
app.post('/regSuccess' , (req,res)=>{
    let data = req.body.userName;
    res.send('welcome ' +data);
})


app.listen(3000, ()=> console.log('server works on port 3000'));