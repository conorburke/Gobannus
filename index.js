require('dotenv').config();
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
const GOOGLE_CLIENT_ID=process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET=process.env.GOOGLE_CLIENT_SECRET;
const PORT = process.env.PORT;

passport.use(new GoogleStrategy({
	clientID: GOOGLE_CLIENT_ID,
	clientSecret: GOOGLE_CLIENT_SECRET,
	callbackURL: '/auth/google/callback'
	}, (accessToken, refreshToken, profile, done) => {
		console.log('access token', accessToken);
		console.log('refresh token', refreshToken);
		console.log('profile', profile);
	})
);

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});

app.get('/', (req, res) => {
	res.send({new: 'Hello World'});
});

//send user to google page to ask for authentication
app.get('/auth/google', passport.authenticate('google', {
	scope: ['profile', 'email']
}));

//handle request after user authorizes Gobannus to use google account
//passprt sees code inside url and can handle it
app.get('/auth/google/callback', passport.authenticate('google'));