const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 5000;

app.use(require("./routes/Home"));

app.listen(PORT, () => {
    console.log("Server up on port " + PORT);
});