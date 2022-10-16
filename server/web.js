const path = require('path');
const express = require('express');
const historyAPIfallback = require("./middleware/historyAPIfallback");
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, '../docs')));
app.use(historyAPIfallback);
app.use(express.json());

app.use('/', require('./routes/index'));

app.listen(port, function() {
	console.log(`listening on port ${port}`);
});
