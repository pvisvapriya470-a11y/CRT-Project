const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());   // VERY IMPORTANT
app.use(cors());

app.use("/api/users", userRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});