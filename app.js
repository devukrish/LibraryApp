const express = require('express');
const chalk = require('chalk');
const path = require('path');
// const bodyparser = require('body-parser');
const cors = require('cors');

const nav = [
    { link: "/books", title: "Books" },
    { link: "/authors", title: "Authors" },
    { link: "/books/admin", title: "Add Book" },

];
const booksRouter = require('./src/routes/bookRoutes')(nav);

const app = new express; //init a representative of express

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Setting the path for static files
app.use(express.static(path.join(__dirname, '/public')));
//Requesting for /books, use booksRouter
app.use('/books', booksRouter);

//Setting up ejs engine and ejs file path
app.set('views', './src/views');
app.set('view engine', 'ejs');

//Routing
app.get('/', function (req, res) {
    res.render("index",
        {
            nav,
            title: "Library"
        });
})

app.listen(3000, function () {
    console.log("Listening to port" + chalk.green(3000));
}); //creating a port