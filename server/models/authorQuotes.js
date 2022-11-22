const mongoose = require("mongoose");

// Creacion del esquema
const AuthorQuotesSchema = new mongoose.Schema({
  name: { 
    type: String, 
    require: [true, 'name required'],
    minlength:[3,"must have more than 3 characters"] },
  quotes: [{
      quote: {
        type:String,
        minlength:[3,"must have more than 3 characters"]
      },
      score: {
        type:Number,
        default:0
      }
  }]
}, { timestamps: true })


// crea un objeto que contenga métodos para que Mongoose interactúe con MongoDB
const AuthorQuotes = mongoose.model("AutoresCitasDb", AuthorQuotesSchema);

module.exports = AuthorQuotes;
  