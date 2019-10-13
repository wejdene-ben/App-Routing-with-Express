const express = require ('express')
const hbs = require ('hbs')

const app = express()

// Handlebars
app.set('view engine', hbs)

app.get('/connected_users', (req,res)=>{
    res.render('users.hbs', {name : 'wejdene'} )
})

// Middleware
// app.use(express.static(__dirname + '/public'))
app.use(express.json())

// Middleware
addRequestDate = (req, res, next)=>{
    let requestAt = new Date ()
    console.log(requestAt)
    next()
}
let t = new Date().getHours();
if (t < 8 || t > 17) app.get("*", (req, res) => res.render("error.hbs"));
else {

app.get('/user',(req,res)=>{
    res.send('this is the user page')
})

app.get('/home',addRequestDate,(req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/contact',addRequestDate,(req,res)=>{
    res.sendFile(__dirname + '/public/coord.html')
})

app.get('/story',addRequestDate,(req,res)=>{
    res.sendFile(__dirname + '/public/story.html')
})

app.get('/product',(req,res)=>{
    res.send('<h1>This is the product page</h1>')
})

app.get('/user/:id',(req,res)=>{
    
    console.log(req.params.id)
    res.send(req.params.id  + "/ /" + ' is connected')
})
}

app.listen(3000, (err)=>{
    if(err)console.log('server is not running')
    else console.log('server is running on port 3000')
})