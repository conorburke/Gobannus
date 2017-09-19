const passport = require('passport');

module.exports = (app) => {
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
};

