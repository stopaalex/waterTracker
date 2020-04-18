/*

app.js

main app declaration

*/

// --- imports --- //
const express       = require('express');
const cors          = require('cors');
const path          = require('path');
const bodyParser    = require('body-parser');
const fs            = require('fs');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname)));


// --- APIS --- //

app.get('/api/water/get', async (req, res, next) => {
    console.log(' *** api/water/get ***');

    let data = await fs.readFileSync('data.json', 'utf8', (err, data) => {
        return data;
    });
    console.log(JSON.parse(data));
    return res.json(JSON.parse(data));
});

app.post('/api/water/add', async (req, res, next) => {
    console.log(' *** api/water/add ***');
    console.log(req.body);

    let data = await fs.writeFile('data.json', JSON.stringify({people:req.body}), (err, data) => {
        console.log(data);
        return data;
    })

    return res.json({test:'add'});
});
app.post('/api/water/remove', async (req, res, next) => {
    console.log(' *** api/water/remove ***');

    let data = await fs.writeFile('data.json', JSON.stringify({people:req.body}), (err, data) => {
        console.log(data);
        return data;
    })

    return res.json({test:'remove'});
});


// --- static serve and export --- //

/**
 * server up static files and index html when needed
 */
app.use('/', (req, res) => {
    return res.sendFile(path.join(__dirname, 'index.html'));
});

module.exports = app;