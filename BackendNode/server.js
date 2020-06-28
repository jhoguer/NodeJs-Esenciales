const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');


// const router = require('./components/message/network');
const router = require('./network/routes');

db('mongodb+srv://userTelegram:telegram1234@cluster0-efbgv.mongodb.net/telegram?retryWrites=true&w=majority')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(router);

router(app);




  app.use('/app', express.static('public'));
  
app.listen(3000, () => {
  console.log(`La app esta escuchando en http://localhost:3000`);
});