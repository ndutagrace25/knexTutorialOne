const express = require("express");
const router = require("./routes");

const app = express();
app.use(express.json());
app.use(router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("server running on port", port);
});
