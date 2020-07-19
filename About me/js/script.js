function setResume() {
    setInfo();
    setFacts();
    setSkills();
    setContacts();
}

function setContacts() {
    setPhoneNum();
    setTelegram();
    setGithub();
    setEmail();
}

function setInfo() {
    $.getJSON("/index_hw7", function (response) {
        let html = "<p>" + response.description + "</p>";
        $("#info").append(html);
    });
}

function setFacts() {
    $.getJSON("/index_hw7", function (response) {
        if (response.facts.length === 3) {
            let html = "<div class='col-4'><p>" + response.facts[0] + "</p></div>\n"
            html += "<div class='col-4'><p>" + response.facts[1] + "</p></div>\n"
            html += "<div class='col-4'><p>" + response.facts[2] + "</p></div>\n"
            $("#facts").append(html);
        }
    });
}

function setPhoneNum() {
    $.getJSON("/index_hw7", function (response) {
        $("#phone-num").append(response.phone_number);
    });
}

function setTelegram() {
    $.getJSON("/index_hw7", function (response) {
        $("#telegram").append(response.telegram);
    });
}

function setGithub() {
    $.getJSON("/index_hw7", function (response) {
        let git = response.github;
        let html = "<a href='" + git.link + "'>" + git.text + "</a>";
        $("#github").append(html);
    });
}

function setEmail() {
    $.getJSON("/index_hw7", function (response) {
        let email = response.email;
        let html = "<a target='_blank' href='" + email.link + "'>" + email.text + "</a>";
        $("#email").append(html);
    });
}

function setSkills() {
    $.getJSON("/index_hw7", function (response) {
        let skills = response.skills;
        let html = "";
        html += "<div class='col-6'>" + getList(skills[0].list) + "</div>\n";
        html += "<div class='col-6'>" + getList(skills[1].list) + "</div>";
        $("#skills").append(html);
    });
}

function getList(list) {
    let html = "<ul>"
    for(let i = 0; i < list.length; i++){
        if(list[i].length > 1) {
            html += "\t<ul>\n"
            for(let j = 0; j < list[i].length; j++){
                html += "\t<li>";
                html += list[i][j];
                html += "\t</li>\n";
            }
            html += "\t</ul>\n";
        } else {
            html += "\t<li>" + list[i][0] + "</li>\n";
        }
    }
    html += "</ul>\n";
    return html;
}

function getRequests() {
    $.getJSON("/requests", function (response) {
        let html = "";
        for (let i = 0; i < response.length; i++) {
            html += "<div class='container request'>" +
                "<div class='row'>" +
                "<div class='col-12 request-item'>"
            html += "<p><span>full name: </span>" + response[i].fio + "</p>"
            html += "<p><span>EMAIL: </span>" + response[i].email + "</p>"
            html += "</div></div></div>"
        }
        $("#req").append(html);
    });
}

function sendRequest(form) {
    let fio = form.fio.value;
    let email = form.email.value;
    if(valid(fio, email)) {
        $.post("/send",
            {
                fio: fio,
                email: email
            },
            function () {
                alert("Thanks! Your request sanded");
            },
        );
    }
}

function valid(fi, em) {
    return fio(fi) & email(em);
}

function fio(fi) {
    if(fi.length === 0) {
        alert("You input incorrect fio");
        return false;
    } else {
        return true;
    }
}

function email(em) {
    if(em.length === 0) {
        alert("You input incorrect email");
        return false;
    } else {
        return true;
    }
}