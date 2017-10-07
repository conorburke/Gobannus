require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

//need to load schema before running passport code that creates model instance
require('./models/User');
require('./models/Tool');

//just need to require as we're not invoking anything
require('./services/passport');

const app = express();
const PORT = process.env.PORT;

// mongoose.connect(`${process.env.MONGO_URI}`);
let mongoPromise = mongoose.connect(`${process.env.MONGO_URI}`, {
	useMongoClient: true
});

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});

app.use(cookieSession({
	//expires in 30 days
	maxAge: 1000 * 60 * 60 * 24 * 30,
	//can pass multiple to randomly select one for enhances security
	keys: [`${process.env.COOKIE_KEY}`]
}));

//get passport to use cookies
app.use(passport.initialize());
app.use(passport.session());

//for post requests
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//immediately invoke routes
require('./routes/authRoutes')(app);
require('./routes/toolRoutes')(app);

if (process.env.NODE_ENV === 'production') {
	//express will serve up production assets
	app.use(express.static('client/build'));

	//express will serve up index.html if it doesn't recognize route
	const path = require('path');
	app.get('*', (req, res) => {
	  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}