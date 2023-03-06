const mongoose = require("mongoose");
 let url = "mongodb+srv://chaithanya:CHai**11@cluster0.cqec77r.mongodb.net/Realestate?retryWrites=true&w=majority";
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.log(`Error connecting to the database. n${err}`);
  });

// const mongoose = require("mongoose");
// let url = "mongodb://localhost:27017/RealEstateCatalog";
//"mongodb+srv://chaithanya:CHai**11@cluster0.cqec77r.mongodb.net/Realestate?retryWrites=true&w=majority";

// mongoose
//   .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Connected to the database ");
//   })
//   .catch((err) => {
//     console.log(`Error connecting to the database. n${err}`);
//   });