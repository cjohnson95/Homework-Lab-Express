const express = require("express");
const app = express();

const port = 3000;

app.get("/greeting/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Wow! Hello there, ${name}!`);
});

app.listen(port,() => {
    console.log('listening on port' , port);
});
