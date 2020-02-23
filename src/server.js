(function() {
  "use strict";
  let express = require("express");
  let app = express();
  app.get("/", function(req, res) {
    res.send("Hello world!");
  });
  let server = app.listen(4111, function() {
    console.log("Express server listening on port " + server.address().port);
  });
  module.exports = app;
})();
