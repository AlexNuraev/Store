const express = require('express');
const cors = require('cors');

const brandRouter = require('./routes/brandRouter');
const fabricRouter = require('./routes/fabricRouter');
const providerRouter = require('./routes/providerRouter');
const shirtRouter = require('./routes/shirtRouter');
const sizeRouter = require('./routes/sizeRouter');
const productRouter = require('./routes/productRouter');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/brand', brandRouter);
app.use('/fabric', fabricRouter);
app.use('/provider', providerRouter);
app.use('/shirt', shirtRouter);
app.use('/size', sizeRouter);
app.use('/products', productRouter);

app.get('/', function (req, res) {
    res.send('hello world')
})


const port = process.env.PORT || 8000;

const server = app.listen(port, '127.0.0.1', () => {
    console.log(`App is running on port ${port}`);
});

