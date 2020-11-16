const express = require("express")
const mongoose = require("mongoose")
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs');

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test article 1',
        createdAt: new Date(),
        description: "description"
    },
    {
        title: 'Test article 2',
        createdAt: new Date(),
        description: "description"
    }]
    res.render('articles/index', { articles: articles })
})

app.listen(5000);