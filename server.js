// используем библиотеку express
const express = require('express');
// используем библиотеку body-parser
const bodyParser = require('body-parser');
// создаем объект express
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
require('./app/routes')(app);
// говорим, что мы раздаем папку public
app.use(express.static('About me'));
// говорим, что запускаемся на порту 80
app.listen(200);
console.log("Server started at 200");
