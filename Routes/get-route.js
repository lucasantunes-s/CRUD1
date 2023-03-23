const express = require("express");
ticketsRouter = express.Router();


let films = ["avatar", "avengers", "moana"];

ticketsRouter.get("/", (req, res, next) => {
   res.send(tickets);
});

ticketsRouter.get("/:id")

module.exports = ticketsRouter;