var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var customers = [
    {
        customerName: "John Smith",
        phoneNumber: 1123445,
        customerEmail: "test@abc.com",
        customerID: 1
    }
];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});


app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function (req, res) {
    return res.json(customers);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});