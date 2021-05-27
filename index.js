const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const programmingLanguagesRouter = require('./routes/programmingLanguages');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
app.use(express.json());
app.use(
    express.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
    res.json({'message': 'ok'});
  })
  app.use('/people', programmingLanguagesRouter);
  const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = {
      info: {
        title: "my-posts",
        description: "API documentation",
        contact: {
          name: "Developer",
        },
        servers: ["http://localhost:3000/"],
      },
    }),
    apis: ["index.js", "./routes/*.js"],
  };
  
  const swaggerDocs = swaggerJsdoc(swaggerOption);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

  /* Error handler middleware */
  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'message': err.message});
    return;
  });
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });