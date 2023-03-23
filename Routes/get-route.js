const express = require("express");
ticketsRouter = express.Router();
const filmsArray = require("./films-tickets/films.js");

let films = ["avatar", "avengers", "moana"];

ticketsRouter.get("/", (req, res, next) => {
   res.send(tickets);
});

ticketsRouter.get("/:id", (req, res, next) => {
        let filmIndex  = filmsArray.indexOf( target => target.id == req.filmId);
        res.status(200).send(filmsArray[filmIndex]);    
})

module.exports = ticketsRouter;