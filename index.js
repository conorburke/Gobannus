require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});

app.get('/', (req, res) => {
	res.send({new: 'Hello World'});
});
