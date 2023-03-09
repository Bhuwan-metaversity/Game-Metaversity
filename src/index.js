const express = require("express");
const bodyParser = require("body-Parser");
const mongoose = require("mongoose");
const route = require("./routes/route");
const app = express();
const dotenv = require('dotenv');
dotenv.config();



app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

console.log("URI string", process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI,
        { useNewUrlParser: true }
    )
    .then(() => console.log("mongodb connected"))
    .catch((error) => console.log(error.message));


app.use("/", route);


console.log(process.env.PORT);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});