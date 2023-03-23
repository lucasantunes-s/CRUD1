const express = require("express");
const app = express();
const PORT = 4000;
const ticketsRouter = require("./Routes/get-route.js");
const filmsArray = require("./films-tickets/films.js");


app.param("filmId", (req, res, next, id) => {
    let filmId = Number(filmId);
    try {
        const found = filmsArray.find(((target) => {
            return filmId === target.id;
        }))
        if (found) {
            req.filmId = found;
            next();
        } else {
            next(new Error("Your film does not exist"));
        };
        
    } catch (err) {
        next (err)
    }
});


app.use("/tickets", ticketsRouter);

app.use("/tickets/:filmId", ticketsRouter)





app.listen(PORT, () => {
    console.log("App lintening on port " + PORT);
})