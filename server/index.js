const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const masssive = require('massive');

const func = require('./controller/functions')

require('dotenv').config();

app.use(bodyParser.json());
masssive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('database connected')
})
app.post('/api/product', func.create);

app.get('/api/inventory', func.read);

app.delete('/api/delete:name', func.delete);

app.put('/api/update:name', func.update);




app.get('/api/test', (req, res)=>{

    let db = req.app.get('db');

    res.status(200).send('this end point is working');
})

const port = 4000;
app.listen(port, ()=>console.log(`server listening on port ${port}`));