const { log } = require("console");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = 3500;

// We need to parse request body in JSON format.
app.use(express.json());

const { Schema } = mongoose;

// Create a Schema
const UserSchema = new Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
});

// Create a model with the Schema object
const UserModel = mongoose.model("User", UserSchema);

async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://sushmalb:Sushm%4014@cluster0.ptg1vhv.mongodb.net/"
    );
    console.log("Connected to DB");
  } catch (err) {
    console.error("Error connecting to DB:", err);
  }
}

connectToDB();

app.get("/info", (req, res) => {
  res.send("from info");
});

app.post("/takeinfo", async (req, res) => {
  try {
    const { name, password, email } = req.body;
    console.log(name, password, email);

    const insertData = new UserModel({
      name,
      email,
      password,
    });

    const dataSaved = await insertData.save();
    res.json({
      message: "Data received successfully !!!",
      dataSaved,
    });
  } catch (err) {
    console.error("Error saving data:", err);
    res.status(500).json({ error: "Failed to save data" });
  }
});

// Schema design: what our database is going to store and in which manner

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
