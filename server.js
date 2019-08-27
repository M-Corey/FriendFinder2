const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3307;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

require("./routing/apiRoutes")(app);
require(path.join(__dirname, "./routing/htmlRoutes"))(app);
//require(path.join(__dirname, "./data/friends"))(app);

app.listen(PORT, function () {
    console.log("Friend finder is stalking on PORT: " + PORT);
});