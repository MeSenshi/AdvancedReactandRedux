const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./router');
const cors = require('cors');


const app = express();

// Middlewares
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type:'*/*'}));
router(app);


mongoose.connect("mongodb://localhost:27017/auth", { useNewUrlParser: true });

const connection = mongoose.connection;

connection.on("connected", function() {
    console.log("connected to db");
});

// server setup
const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port, function () {
    console.log(`listening to port: ${port}`)
});