// const express = require("express");
// const app = express();

// const port = 3000;

// app.get("/greeting/:name", (req, res) => {
//   const name = req.params.name;
//   res.send(`Wow! Hello there, ${name}!`);
// });

// app.listen(port,() => {
//     console.log('listening on port' , port);
// });

const express = require("express");
const app = express();

const port = 3000;

app.get("/tip/:total/:tipPercentage", (req, res) => {
  const total = parseFloat(req.params.total);
  const tipPercentage = parseFloat(req.params.tipPercentage);

  const tipAmount = (total * tipPercentage) / 100;
  res.send(tipAmount.toString());
});

app.listen(port, () => {
  console.log("listening on port", port);
});
