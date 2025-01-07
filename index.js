let db = { path: ".env" };

require("dotenv").config(db);

var http = require("http");
var fs = require("fs");
var path = require("path"); // path 모듈 추가
var express = require("express");
const routers = require("./routers");

var app = express(); // Create an Express application
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Serve static files using Express static middleware
app.use(express.static(path.join(__dirname, "public")));
// Define your custom routes
app.use("/guest", routers);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server
var server = http.createServer(app);
server.listen(8000, function () {
  console.log("Server is running on port 8000");
});
