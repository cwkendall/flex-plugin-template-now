const run = require("twilio-run").handlerToExpressRoute;
const bodyParser = require("body-parser");
const app = require("express")();
const morgan = require("morgan");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.all("/api/:name", (req, res) => {
  const twilioFunction = require(`./functions/${req.params.name}.js`).handler;
  console.log(req.url);
  run(twilioFunction, {
    logs: true,
    url: req.url,
    env: process.env
  })(req, res);
});

module.exports = app;
