require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

//need to load schema before running passport code that creates model instance
require('./models/User');

//just need to require as we're not invoking anything
require('./services/passport');

const app = express();
const PORT = process.env.PORT;

app.use(cookieSession({
	//expires in 30 days
	maxAge: 1000 * 60 * 60 * 24 * 30,
	//can pass multiple to randomly select one for enhances security
	keys: [`${process.env.COOKIE_KEY}`]
}));

//get passport to use cookies
app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});

// mongoose.connect(`${process.env.MONGO_URI}`);
let mongoPromise = mongoose.connect(`${process.env.MONGO_URI}`, {
	useMongoClient: true
});

//immediately invoke auth routes
require('./routes/authRoutes')(app);