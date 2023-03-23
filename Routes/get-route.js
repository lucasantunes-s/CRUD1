const express = require("express");
ticketsRouter = express.Router();


let tickets = ["avatar", "avengers", "moana"];

ticketsRouter.get("/", (req, res) => {
   res.send(tickets);
});



module.exports = ticketsRouter;