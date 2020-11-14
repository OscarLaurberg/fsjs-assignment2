import express from 'express';
const app = express.Router();

app.use('/', async function (req, res, next) {
  console.log(new Date(), req.method, req.url);
  next();
})

module.exports = app;