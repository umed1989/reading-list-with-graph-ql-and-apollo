const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const { username, password } = require("./key");
const schema = require("./schema/schema");

mongoose
  .connect(
    `mongodb://${username}:${password}@ds231377.mlab.com:31377/graphql`,
    { useNewUrlParser: true },
    () => console.log("Your database is connected!!!")
  )
  .catch(err => console.log("Error: ", err));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => console.log("Your server is running on port 4000"));
