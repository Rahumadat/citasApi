const authorsQuotes = require("../controllers/controllers");
module.exports = function(app){

  app.get("/getAllAuthors", (req, res) => {   
    authorsQuotes.getAllAuthors(req, res);
  });

  app.get("/getByIdAuthors/:id", (req, res) => {
    authorsQuotes.getByIdAuthors(req, res);
  });

  app.post("/newAuthors", (req, res) => {
    authorsQuotes.newAuthors(req, res);
  });

  app.put("/putUpdateAuthors/:id", (req, res) => {   
    authorsQuotes.putUpdateAuthors(req, res);
  });

  app.delete("/deleteAuthor/:id", (req, res) => {
    authorsQuotes.deleteAuthors(req, res)
  });

  app.get("/getAllQuotes/:id", (req, res) => {   
    authorsQuotes.getAllQuotes(req, res);
  });

  app.put("/newQuotes/:id", (req, res) => {
    authorsQuotes.newQuotes(req, res);
  });

  app.patch("/deleteQuotes/:id", (req, res) => {
    authorsQuotes.deleteQuotes(req, res)
  });

  app.put("/putUpdateQuotes/:id", (req, res) => {   
    authorsQuotes.putUpdateQuotes(req, res);
  });

  app.post('/newComentario/:id', authorsQuotes.newComentario
  );

    app.put("/VotosQuotes/:id", (req, res) => {   
      authorsQuotes.VotosQuotes(req, res);
    });
}