const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send({hey:"Hello"})
})

app.listen(PORT, () => {
    console.log('Server started at ' + PORT);
})