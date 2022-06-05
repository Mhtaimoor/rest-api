const express = require('express');
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const amongoose = require('mongoose');

require('dotenv/config');


app.use(express.urlencoded({extended: true}));

// import routes
const postsRoute = require('./routes/posts');
const { urlencoded } = require('body-parser');

app.use('/posts', postsRoute);

//Routes
app.get('/', (req,res) => {
    res.send('We are on home');
});



// Connect to db
mongoose.connect(
    process.env.DB_connection,
    { useNewUrlParser: true }, 
    () => {
        console.log('Connected to DB');
});

app.listen(3000);
