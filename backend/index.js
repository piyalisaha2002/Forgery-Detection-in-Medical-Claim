const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const cors = require("cors");
const auth = require("./auth");
dotEnv.config();

// require database connection
const User = require("./db/userModel");

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Server is Operational!" });
});

// register endpoint
app.post("/register-login", (request, response) => {
  if (request.body.name === undefined) {
    User.findOne({ email: request.body.email })

      // if email exists
      .then((user) => {
        // compare the password entered and the hashed password found
        bcrypt
          .compare(request.body.password, user.password)

          // if the passwords match
          .then(async (passwordCheck) => {
            // check if password matches
            if (!passwordCheck) {
              //password mismatch
              return response.redirect(`${process.env.HOST_URL}/error-400-2`);
            }

            //   create JWT token
            const token = jwt.sign(
              {
                userId: user._id,
                userEmail: user.email,
              },
              "RANDOM-TOKEN",
              { expiresIn: "24h" }
            );

            await User.findOneAndUpdate(
              { _id: user._id },
              { token: token },
              { new: true }
            );

            //   return success response
            response.redirect(`${process.env.HOST_URL}/dashboard`);
          });
        // catch error if password do not match
        // response.redirect(`${process.env.HOST_URL}/error-400-2`);
      })
      // catch error if email does not exist
      .catch((e) => {
        //email not found
        response.redirect(`${process.env.HOST_URL}/error-404`);
      });
  } else {
    // hash the password
    bcrypt
      .hash(request.body.password, 10)
      .then((hashedPassword) => {
        // create a new user instance and collect the data
        const user = new User({
          name: request.body.name,
          email: request.body.email,
          password: hashedPassword,
          token: "",
        });

        // save the new user
        user
          .save()
          // return success if the new user is added to the database successfully
          .then((result) => {
            //success
            response.redirect(`${process.env.HOST_URL}/dashboard`);
          })
          // catch erroe if the new user wasn't added successfully to the database
          .catch((error) => {
            response.redirect(`${process.env.HOST_URL}/error-400-1`);
          });
      })
      // catch error if the password hash isn't successful
      .catch((e) => {
        response.status(500).send({
          message: "Password was not hashed successfully",
          e,
        });
      });
  }
});

// share token to frontend for the given user
app.get("/get-token", async (req, res) => {
  const { email } = req.query;
  User.findOne({ email: email })
    .then((user) => {
      res.json({ token: user.token });
    })
    .catch((err) => {
      console.log("Error in finding the user with email");
    });
});

// authentication endpoint
app.get("/auth-endpoint", auth, (request, response) => {
  response.send({ message: "You are authorized to access me" });
});

app.listen(process.env.SERVER_PORT, () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
      console.log(`Server running on port ${process.env.SERVER_PORT}`);
    })
    .catch(() => {
      console.log("Could not connect to MongoDB");
    });
});
