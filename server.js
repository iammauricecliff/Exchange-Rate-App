const express = require('express');
const app = express();
const apiRoutes = require('./api/rates');

//ejs for our view tempelates enjine getting dynamic files
app.set('view engine', 'ejs');

//middleware for css stylesheets
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))

//middleware for api routes
app.use(apiRoutes);



app.get('/', (req, res) => {
    res.redirect('/api/rates/GET_USD');
})

//error page
app.use((req, res) => {
    res.status('404').render('404', {title: '404 not found'});
})

//set our app port
const port = process.env.PORT || 3000;

//listen to a request on this port number
app.listen(port, () => {
    console.log(`listening to port ${port}`);
})