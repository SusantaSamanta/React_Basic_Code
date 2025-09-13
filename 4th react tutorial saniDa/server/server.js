import express from 'express';
const app = express();
import cors from 'cors';
import foodCollection from './foodCollectionApi.js'


app.use(cors());

app.get('/', (req, res) => {
    // res.writeHead(202, {"content-type": "text/html"});
    res.send(`<h2>Ok this backend home page....</h2><br><a href="/getdata">go to get data </a>`);
})

app.get('/getdata', (req, res) => {
    // res.writeHead(202, {"content-type": "application/json"});
    res.status(202);
    res.json(foodCollection);
})



 


const PORT = 5174
app.listen(PORT, () => {
    console.log(`server run on : http://localhost:${PORT}/`)
})



