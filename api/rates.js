const express = require('express');
const router = express.Router();
const request = require('request');



//the route for the default route EUR Api endpoint
router.get('/api/rates', (req, res) => {
    request('https://api.exchangeratesapi.io/latest', (error, response, body) => {
        if(error) {
            console.log(error);
        }else {
           res.send(JSON.parse(response.body))
            
        }
    });
});

//1 route for the USD endpoint
router.get('/api/rates/USD', (req, res) => {
    
    request(`https://api.exchangeratesapi.io/latest?base=USD&symbols=CZK,GBP,EUR,CAD,BGN,PLN`, (error, response, body) => {
        if(error) {
            console.log(error);
        }else {
    
            res.render('USD', {
                USD: JSON.parse(response.body),
                title: 'Exchange rates | USD',
            })
        }
    })
    
});



//route for GET_USD
router.get('/api/rates/Get_USD', (req, res) => {
    res.render('Get_USD', { title: 'Exchange rates | Get_USD'});
    
});

//redirect route for the post USD data
router.post('/api/rates/Post_USD', (req, res) => {

    if(req.body.name !== 'USD'){
        res.status('404').render('404', {title: '404 not found'});
    }else {
        return res.redirect('USD');
    }
})



//2 route for the GBP endpoint
router.get('/api/rates/GBP', (req, res) => {
    
    request(`https://api.exchangeratesapi.io/latest?base=GBP&symbols=CZK,USD,EUR,CAD,BGN,PLN`, (error, response, body) => {
        if(error) {
            console.log(error);
        }else {
            res.render('GBP', {
                GBP: JSON.parse(response.body),
                title: 'Exchange rates | GBP',
            });
            
        }
    })
    
});



//route for GET_GBP
router.get('/api/rates/Get_GBP', (req, res) => {
    res.render('Get_GBP', { title: 'Exchange rates | Get_GBP'});
});

//redirect route for the post GBP data
router.post('/api/rates/Post_GBP', (req, res) => {
    if(req.body.name !== 'GBP'){
        res.status('404').render('404', {title: '404 not found'});
    }else {
        return res.redirect('GBP');
    }
})


//3 route for the EUR endpoint
router.get('/api/rates/EUR', (req, res) => {
    
    request(`https://api.exchangeratesapi.io/latest?base=EUR&symbols=CZK,USD,GBP,CAD,BGN,PLN`, (error, response, body) => {
        if(error) {
            console.log(error);
        }else {
            res.render('EUR', {
                EUR: JSON.parse(response.body),
                title: 'Exchange rates | EUR',
            });
            
        }
    })
    
});



//route for GET_EUR
router.get('/api/rates/Get_EUR', (req, res) => {
    res.render('Get_EUR', { title: 'Exchange rates | Get_EUR'});
});

//redirect route for the post EUR data
router.post('/api/rates/Post_EUR', (req, res) => {
    if(req.body.name !== 'EUR'){
        res.status('404').render('404', {title: '404 not found'});
    }else {
        return res.redirect('EUR');
    }
})

//4 route for the CAD endpoint
router.get('/api/rates/CAD', (req, res) => {
    
    request(`https://api.exchangeratesapi.io/latest?base=CAD&symbols=CZK,USD,GBP,EUR,BGN,PLN`, (error, response, body) => {
        if(error) {
            console.log(error);
        }else {
            res.render('CAD', {
                CAD: JSON.parse(response.body),
                title: 'Exchange rates | CAD',
            });
            
        }
    })
    
});



//route for GET_CAD
router.get('/api/rates/Get_CAD', (req, res) => {
    res.render('Get_CAD', { title: 'Exchange rates | Get_CAD'});
});

//redirect route for the post CAD data
router.post('/api/rates/Post_CAD', (req, res) => {
    if(req.body.name !== 'CAD'){
        res.status('404').render('404', {title: '404 not found'});
    }else {
        return res.redirect('CAD');
    }
});



//*5 route for the BGN endpoint
router.get('/api/rates/BGN', (req, res) => {
    
    request(`https://api.exchangeratesapi.io/latest?base=BGN&symbols=CZK,USD,GBP,EUR,CAD,PLN`, (error, response, body) => {
        if(error) {
            console.log(error);
        }else {
            res.render('BGN', {
                BGN: JSON.parse(response.body),
                title: 'Exchange rates | BGN',
            });
            
        }
    })
    
});



//route for GET_BGN
router.get('/api/rates/Get_BGN', (req, res) => {
    res.render('Get_BGN', { title: 'Exchange rates | Get_BGN'});
});

//redirect route for the post BGN data
router.post('/api/rates/Post_BGN', (req, res) => {
    if(req.body.name !== 'BGN'){
        res.status('404').render('404', {title: '404 not found'});
    }else {
        return res.redirect('BGN');
    }
});


//*6 route for the CZK endpoint
router.get('/api/rates/CZK', (req, res) => {
    
    request(`https://api.exchangeratesapi.io/latest?base=CZK&symbols=BGN,USD,GBP,EUR,CAD,PLN`, (error, response, body) => {
        if(error) {
            console.log(error);
        }else {
            res.render('CZK', {
                CZK: JSON.parse(response.body),
                title: 'Exchange rates | CZK',
            });
            
        }
    })
    
});



//route for GET_CZK
router.get('/api/rates/Get_CZK', (req, res) => {
    res.render('Get_CZK', { title: 'Exchange rates | Get_CZK'});
});

//redirect route for the post BGN data
router.post('/api/rates/Post_CZK', (req, res) => {
    if(req.body.name !== 'CZK'){
        res.status('404').render('404', {title: '404 not found'});
    }else {
        return res.redirect('CZK');
    }
});

//*7 route for the CZK endpoint
router.get('/api/rates/PLN', (req, res) => {
    
    request(`https://api.exchangeratesapi.io/latest?base=PLN&symbols=BGN,USD,GBP,EUR,CAD,CZK`, (error, response, body) => {
        if(error) {
            console.log(error);
        }else {
            res.render('PLN', {
                PLN: JSON.parse(response.body),
                title: 'Exchange rates | PLN',
            });
            
        }
    })
    
});



//route for GET_CZK
router.get('/api/rates/Get_PLN', (req, res) => {
    res.render('Get_PLN', { title: 'Exchange rates | Get_PLN'});
});

//redirect route for the post BGN data
router.post('/api/rates/Post_PLN', (req, res) => {
    if(req.body.name !== 'PLN'){
        res.status('404').render('404', {title: '404 not found'});
    }else {
        return res.redirect('PLN');
    }
})


module.exports = router;

