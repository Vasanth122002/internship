const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jobRoutes = require("./routes/jobRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 5000;
app.use("/api", jobRoutes);

app.listen(port, () => console.log("Server running on port 5000"));
