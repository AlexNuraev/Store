const express = require('express');
const app = express();
const path = require('path');
const brandRouter = require('./routes/brandRouter');
const fabricRouter = require('./routes/fabricRouter');
const providerRouter = require('./routes/providerRouter');
const shirtRouter = require('./routes/shirtRouter');
const sizeRouter = require('./routes/sizeRouter');
const cors = require('cors');

app.use(express.json());
app.use(cors());
//d
app.get('/', function (req, res) {
    res.sendFile(path.resolve("FrontEnd", "index.html"));
})
app.use(express.static('FrontEnd'));

app.use('/', brandRouter);
app.use('/fabric', fabricRouter);
app.use('/provider', providerRouter);
app.use('/shirt', shirtRouter);
app.use('/size', sizeRouter);


const port = process.env.PORT || 8000;

const server = app.listen(port, '127.0.0.1', () => {
    console.log(`App is running on port ${port}`);
});

