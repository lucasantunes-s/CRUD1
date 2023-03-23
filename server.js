const express = require("express");
const app = express();
const PORT = 4000;
const ticketsRouter = require("./Routes/get-route.js");

app.use("/tickets", ticketsRouter);









app.listen(PORT, () => {
    console.log("App lintening on port " + PORT);
})