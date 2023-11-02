"use strict";
var mongoose = require("mongoose");
mongoose
    .connect("mongodb+srv://reena_123:Reena%40123@cluster0.4aylb5q.mongodb.net/schooldatabase?retryWrites=true&w=majority")
    .then(() => {
    console.log("connection is created");
})
    .catch((err) => {
    console.log(err);
});
