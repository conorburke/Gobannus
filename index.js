require('dotenv').config();
const express = require('express');

//just need to require as we're not running anything
require('./services/passport');

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});

//immediately invoke auth routes
require('./routes/authRoutes')(app);