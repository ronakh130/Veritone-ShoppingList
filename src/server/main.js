const express = require('express');
const path = require('path');

const port = 3000;
const app = express();

//parse incoming request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serve static files
app.use(express.static(path.resolve(__dirname, '../client')));

//test route
app.use('/test', (req, res) => {
  console.log('test hit');
  res.sendStatus(200);
});

//catch all route for unknown endpoints
app.use((req, res) => res.status(404).send('Sorry, Page not found'));

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//start listening
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

module.exports = app;
