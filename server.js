const express = require("express");
const app = express();
const PORT = 4000;
const ticketsRouter = require("./Routes/get-route.js");
const  filmsArray  = require("./films-tickets/films.js");


app.param("filmId", (req, res, next, id) => {
    let filmId = Number(id);
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


app.get("/tickets", (req, res, next) => {
    res.status(200).send(filmsArray);
})

// app.get("/tickets/filmId/:filmId", (req, res, next) => {
//     let filmId = req.params.filmId;
//     console.log(filmId);
//     res.status(200).send(filmsArray[filmId]);
// })


// app.use("/tickets", ticketsRouter);

app.use("/tickets/:filmId", ticketsRouter);





app.listen(PORT, () => {
    console.log("App lintening on port " + PORT);
})