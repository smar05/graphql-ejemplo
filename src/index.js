const express = require("express");
const app = express();
const schema = {};
const graphqlHTTP = require("express-graphql").graphqlHTTP;

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
  })
);

app.get("/", (req, res) => {
  res.json({
    message: "Hola desarrollo web",
  });
});

app.listen(3000, () => console.log("Iniciando servidor en el puerto 3000"));
