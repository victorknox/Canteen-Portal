const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const DB_NAME = "tutorial"

// routes
var testAPIRouter = require("./routes/testAPI");
var UserRouter = require("./routes/Users");
var ItemRouter = require("./routes/Items");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connection to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/' + DB_NAME, { useNewUrlParser: true });
// const uri = process.env.ATLAS_URI;
mongoose.connect('mongodb://pengo:pengo@cluster0-shard-00-00.lepp6.mongodb.net:27017,cluster0-shard-00-01.lepp6.mongodb.net:27017,cluster0-shard-00-02.lepp6.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-3bicl1-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully !");
})

// setup API endpoints
app.use("/api/testAPI", testAPIRouter);
app.use("/api/user", UserRouter);
app.use("/api/item", ItemRouter);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
