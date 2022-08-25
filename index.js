const express = require('express');
const app = express();
const subredditData = require('./data.json')



app.use(express.static('public'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('home')
})
app.get('/students', (req, res) => {
    const students = ['Juma', 'Shaban', 'John', 'Kingwendu', 'Mama ntilie']
    res.render('students', { students })
})
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = subredditData[subreddit]
    if (data) {
        res.render('subreddit', { ...data })
    } else {
        res.render('notfound', { subreddit })
    }

})

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    res.render('random', { num: num })
})

app.listen('3000', () => {
    console.log('listen')
})