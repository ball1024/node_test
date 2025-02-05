const express = require('express');
const chalk = require('chalk').default;
const debug = require('debug')('app');
const morgan = require('morgan');



const app = express();
const port = 3000;

app.use(morgan('combined'))

app.get("/", (req, res) => {
    res.send("Hello BALl");
    res.send("Dom BAll");
 })

app.listen(port, () =>  {
   debug("Listening on Port :" + chalk.red(port));
})