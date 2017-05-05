var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var gem = require("./lib/gem.js");
var mfHPGem = require("./lib/hp-gem.js");

app.engine(".html", require("ejs").__express);
app.set("views", __dirname + "/views");
app.set("view engine", "html");
app.use(express.static(__dirname));

app.get("/get-basic-stat", gem.getBasicStats);

app.get("/get-square-main-stat", gem.getSquareMainStat);

app.get("/get-flat-hp-gem", mfHPGem.getFlatGems);

app.get("/get-percent-hp-gem", mfHPGem.getPercentGems);

app.get("*", function (request, response) {
    response.render("index");
});

app.listen(port, function () {
    console.log("Listening on port " + port);
});
