const express = require("express");
const app = express();
const PORT = 4000;
const ticketsRouter = require("./Routes/get-route.js");
const filmsArray = require("./Routes/get-route.js")


app.use("/tickets", ticketsRouter);

app.param("filmId", (req, res, next, id) => {
    let filmName = String(filmName);
    try {
        const found = filmsArray.find(target => target === filmName)
    }
})







app.listen(PORT, () => {
    console.log("App lintening on port " + PORT);
})