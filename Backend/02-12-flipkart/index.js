const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

//It is a built-in middleware that is responsible for parsing the incoming request body in JSON format before your routes or handlers receive it.
app.use(express.json());

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sushmalb:Sushm%4014@cluster0.ptg1vhv.mongodb.net/flipkartUsers"
    );
    console.log("Connected to db");
  } catch (error) {
    console.log(err.message);
  }
};

connectDb();

// Problem statement for E-commerce website
// Product , userdetail,orders, whislist

const { Schema } = mongoose;
const userDetailSchema = new Schema({
  userName: {
    type: String,

    required: true,
    lowercase: true,
    minlength: 5,
    maxlength: 10,
  },
  email: {
    type: String,
    required: true,
    // pattern using regex},
    trim: true, // to remove spaces
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 5,
    required: true,
    //custom validation in a schema
    // validate: {
    //   validator: function (val) {
    //     return val > 7;
    //   },
    //   message: "password should be greater than 7",
    // },
  },
});

const UserModel = mongoose.model("flipkart", userDetailSchema);

// =================================================================

const productSchema = new Schema({
  productName: { type: String, required: true },
  category: { type: String, required: true },
  productDetails: { type: String, required: true },
  price: { type: String, required: true },
  quantity: { type: Number, required: true, deafult: 10 },
  image: { type: String },
  // comments: {},
});

const ProductModel = mongoose.model("flipKartProducts", productSchema);

// User Model : register and login

app.post("/user/register", async (req, res) => {
  //registration logic
  // This code represents an Express route that handles POST requests to the "/user/register" endpoint
  try {
    const { email, password, userName } = req.body;
    const insertData = await UserModel.create({
      email,
      password,
      userName,
    });

    res.json({
      message: "Data saved successfully",
      insertData,
    });
  } catch (error) {
    console.log(error.message);
  }
});
app.post("/user/login", (req, res) => {
  //login logic
  //Step1 : Take all credentials from req.body
  //step2: Usee email as a field to check if that user is in db
  // step3: if user found , he is logged in
  // step4: if user isnt found ,then we can say to register
  // authentication : validate if user is in the db or not
});
app.listen(port, () => {
  console.log(`Server is listening on port  + ${port}`);
});
