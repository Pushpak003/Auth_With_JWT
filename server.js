const express = require("express");
const app = express();
require("dotenv").config();

const authroutes = require("./routes/authrouters");

app.use(express.json());
app.use("/api/auth", authroutes);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
});