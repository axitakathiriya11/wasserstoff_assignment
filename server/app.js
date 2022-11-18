const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
require("./config/conn");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", userRoutes);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Backend Home Page"));
app.listen(port, () => console.log(`server runing at: ${port}`));
