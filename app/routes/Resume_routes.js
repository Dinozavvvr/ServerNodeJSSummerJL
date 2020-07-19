bodyParser = require('body-parser').json();
const fs = require("fs");

module.exports = function (app) {
    app.get('/index_hw7', (request, response) => {
        let result = {
            "description": "&nbsp;&nbsp;&nbsp;&nbsp;Привет. Я Шагалиев Динар, мне 18 и я студент Высшей Школы ИТИС -" +
                " лучшего казанского института. Начал свое обучение в сентябре 2019 года, и вот уже как год набираю" +
                " необходимые навыки в этом учебном заведении. До этого заканчивал МБОО Лицей №2 города Буинска, оттуда и родом." +
                " На данный момент я учусь на программиста. Считаю данную профессию перспективной и востребованной. Изучаю" +
                " такие языки как Java, CSS, HTML. Вникаю в верстку сайтов, предпочитаю верску без использования технологий Bootstrap.",
            "facts": [
                "На данный момент учусь играть на гитаре",
                "Люблю пить малиновый чаек",
                "Нравится чистое программирование"
            ],
            "github": {
                "link": "https://github.com/Dinozavvvr",
                "text": "Dinozavvvr"
            },
            "email": {
                "link": "https://mail.google.com/",
                "text": "dinar.shagaliev2002@gmail.com"
            },
            "phone_number": "+79274781374",
            "telegram": "@lllakilOhNil",
            "skills": [
                {
                    "list": [
                        ["Программирую на java"],
                        ["Слегка знаю HTML, CSS, SASS"],
                        ["Умею работать с базами данных (PostgresSQL)"],
                        ["Немного владею Photoshop"],
                        ["Могу спать 3 часа в день"]
                    ]
                },
                {
                    "list": [
                        ["Не плохо готовлю"],
                        ["Могу подтянуться 15 раз и отжаться 50"],
                        ["Имеются такие качества как:"],

                        ["Целеустремленность",
                            "Выдержка",
                            "Ответственность",
                            "Общительность"]
                    ]
                }
            ]
        };
        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify(result));
    });

    app.get('/requests', (request, response) => {

        let array = fs.readFileSync('app\\data\\requests.txt').toString().trim().split("\n");

        for(let i = 0; i < array.length; i++) {
            array[i] = JSON.parse(array[i]);
        }

        response.setHeader('Content-Type', 'application/json');
        response.send(array);
    });

    app.post('/send', bodyParser, (request, response) => {
        let body = request.body;
        let user = request.body;
        fs.appendFileSync('app\\data\\requests.txt', JSON.stringify({fio: user.fio, email: user.email }) + "\n");
        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify(body));
    });


};
