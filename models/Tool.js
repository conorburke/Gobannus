const mongoose = require('mongoose');
const { Schema } = mongoose;

const toolSchema = new Schema({
    type: String,
    owner: {type: Schema.Types.ObjectId, ref: 'User'}
});

//loads schema into Mongo, don't module export, Mongo will get confused
//and think there are more user schemas trying to be created
mongoose.model('tools', toolSchema);