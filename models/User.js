const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

//loads schema into Mongo, don't module export, Mongo will get confused
//and think there are more user schemas trying to be created
mongoose.model('users', userSchema);