require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

//just need to require as we're not invoking anything
require('./services/passport');

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});

// mongoose.connect(`${process.env.MONGO_URI}`);
let mongoPromise = mongoose.connect(`${process.env.MONGO_URI}`, {
	useMongoClient: true
});

//immediately invoke auth routes
require('./routes/authRoutes')(app);