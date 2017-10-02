const passport = require('passport');

module.exports = (app) => {
    // app.get('/', (req, res) => {
    //     res.send({welcome: 'To Gobannus'});
    // });

    //send user to google page to ask for authentication
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email'],
        prompt: 'select_account'
    }));

    //handle request after user authorizes Gobannus to use google account
    //passprt sees code inside url and can handle it
    app.get('/auth/google/callback', 
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/tools');
        }
    );

    app.get('/api/logout', 
        (req, res) => {
            //kills cookie
            req.logout();
            // res.send(req.user);
            res.redirect('/');
    });

    app.get('/api/current_user', 
        (req, res) => {
            res.send(req.user);
    })
};

