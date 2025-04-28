const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const Users = require("./Models/Items")
const cors = require("cors")

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err, 'server failed '));

// frontend gets all the users
app.get("/users", async (req, res) => {
  const newusers = await Users.find();
  res.json(newusers);
});

// post user in data
app.post("/users", async (req, res) => {
  const { personal, email, password, id } = req.body;

  const newUser = new Users({
    personal: {
      name: personal.name,  
      number: personal.number,  
    },
    email,
    password,
    id,
  });

 
  await newUser.save();
  res.status(201).json(newUser);  
});

// delete dynamic user
app.delete("/users/:id", async (req, res) => {
  await Users.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
