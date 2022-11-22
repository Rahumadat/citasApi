const mongoose = require("mongoose");
// Conectarse a la BD con Mongoose
mongoose.connect("mongodb://0.0.0.0:27017/authorQuotesDB", { useNewUrlParser: true });

module.exports = mongoose;