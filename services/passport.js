const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const GOOGLE_CLIENT_ID=process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET=process.env.GOOGLE_CLIENT_SECRET;

const User = mongoose.model('users');

//user is what is passed back form the create/find user below
passport.serializeUser((user, done) => {
    //null indicates no error, second is user record
    done(null, user.id);
});

//deserialize the token, for us the user id
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => done(null, user));
});

passport.use(new GoogleStrategy({
	clientID: GOOGLE_CLIENT_ID,
	clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
    proxy: true
	}, (accessToken, refreshToken, profile, done) => {
		console.log('access token', accessToken);
		console.log('refresh token', refreshToken);
        console.log('profile', profile);
        
        //check to see if user already exists
        User.findOne({ googleId: profile.id })
            .then((existingUser) => {
                if(!existingUser) {
                    new User({ googleId: profile.id}).save()
                        .then(user => done(null, user));
                } else {
                    //null indicates no error, second is user record
                    done(null, existingUser);
                }
            })
	})
);