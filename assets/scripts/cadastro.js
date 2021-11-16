window.onload = loadSelect;

let teachers = [];

const subjects = ["Artes", "Biologia", "Filosofia", "Física", "Geografia", "História", "Língua Espanhola", "Língua Inglesa", "Língua Portuguesa", 
"Matemática", "Química", "Sociologia"];

function cadastro() {
    let name = document.getElementById("name").value;
    let number = document.getElementById("phone").value;
    let photo = document.getElementById("photo").value;
    let bio = document.getElementById("bio").value;
    let subject = document.getElementById("subjects").value;
    let cost = document.getElementById("cost").value;

    let user = new Teacher(name, number, photo, bio, subject, cost);

    if(JSON.parse(localStorage.getItem('teachers')) != null) {
        teachers = (JSON.parse(localStorage.getItem('teachers')));
    }

    teachers.push(user);

    localStorage.setItem('teachers', JSON.stringify(teachers));
    alert("Item adicionado.");

    return false;
}

function loadSelect() {
    let selectSubjects = document.getElementById("subjects");

    subjects.forEach((subject, index) => {
        option = new Option(subject, index);
        selectSubjects.options[selectSubjects.options.length] = option;
    });
}

$(document).ready(function() {
    $('#phone').mask('(00) 0 0000-0000');
})

$(function(){
    $('#cost').maskMoney({prefix:'R$ ', allowNegative: true, thousands:'.', decimal:',', affixesStay: true});
})