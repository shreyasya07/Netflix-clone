const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors(
  {
    origin:["https://deploy-mern-1whq.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
));
app.use(express.json());

mongoose
  .connect("mongodb+srv://Shrey:9569941857@cluster0.pysbujr.mongodb.net/netflix?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user",userRoutes);

app.listen(5000, console.log("Server started at port 5000"));


