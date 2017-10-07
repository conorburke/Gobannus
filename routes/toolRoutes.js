const mongoose = require('mongoose');
const Tool = mongoose.model('tools');

module.exports = (app) => {
    // app.get('/', (req, res) => {
    //     res.send({welcome: 'To Gobannus'});
    // });

    app.get('/api/tools', (req, res) => {
        Tool.find({}, (err, tools) => {
            !err ? res.send(tools) : null;
        });
    });

    app.post('/api/tools', (req, res) => {
        console.log(req.body.tool);
        console.log(req);
        new Tool({type: req.body.tool, owner: req.user._id}).save();
        res.redirect('/tools');
    });

};