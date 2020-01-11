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
    },
    {
        customerName: "John",
        phoneNumber: 87878787,
        customerEmail: "test2@abc.com",
        customerID: 2
    }
];

var waitingList = [];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});


app.get("/table", function (req, res) {
    res.sendFile(path.join(__dirname, "public/table.html"));
});

app.get("/api/tables", function (req, res) {
    return res.json(customers);
});

app.post("/api/reservations", function (req, res) {
    var newCustomer = req.body;
    if (customers.length > 5) {
        waitingList.push(newCustomer);
    } else {
        customers.push(newCustomer);
    }
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});