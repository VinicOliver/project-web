/**
 * Deixar uma linha em branco depois de blocos e antes da próxima declaração,
 * Usando sintaxe literal para definir Array,
 * Aspas simples para Strigns,
 * Usar let ao invés de var,
 * Comparação estrita,
 * Coloque um espaço antes da chave que abre o escopo da função,
 * Colocar espaço entre operadores,
 * Coloque 1 espaço antes do parênteses de abertura de comandos de controle (if, while etc.) e não coloque
 * espaços antes da lista de argumentos em chamadas e declarações de funções,
 */

import { Teacher } from "./teacher.js";
window.onload = loadSelect;
document.querySelector('button').addEventListener('click', register);

let teachers = [];

const subjects = ['Artes', 'Biologia', 'Filosofia', 'Física', 'Geografia', 'História', 'Língua Espanhola', 'Língua Inglesa', 'Língua Portuguesa', 
'Matemática', 'Química', 'Sociologia'];

function register() {
    let name = document.getElementById("name").value;
    let number = document.getElementById("phone").value;
    let photo = document.getElementById("photo").value;
    let bio = document.getElementById("bio").value;
    let subject = document.getElementById("subjects").value;
    let cost = document.getElementById("cost").value;

    if (nameValidate(name) && linkValidate(photo) && sizeText(bio)) {
        let user = new Teacher(name, number, photo, bio, subject, cost);

        if (JSON.parse(localStorage.getItem('teachers')) !== null) {
            teachers = (JSON.parse(localStorage.getItem('teachers')));
        }

        teachers.push(user);

        localStorage.setItem('teachers', JSON.stringify(teachers));
        alert('Cadastro efetuado!');

        return true;
    } else {
        alert('Preencha os campos corretamente!');
        return false;
    }
    /*
    let user = new Teacher(name, number, photo, bio, subject, cost);

    if (JSON.parse(localStorage.getItem('teachers')) !== null) {
        teachers = (JSON.parse(localStorage.getItem('teachers')));
    }

    teachers.push(user);

    localStorage.setItem('teachers', JSON.stringify(teachers));
    alert('Cadastro efetuado!');

    return false;
    */
}

function loadSelect() {
    let selectSubjects = document.getElementById("subjects");

    subjects.forEach((subject, index) => {
        let option = new Option(subject, index);
        selectSubjects.options[selectSubjects.options.length] = option;
    });
}

// Validation Functions

function nameValidate(name) {
    return name.trim().length > 0;
}

function linkValidate(link) {
    return link.includes('https://');
}

function sizeText(text) {
    return text.trim().length > 0;
}

// JQuery Masks

$(document).ready(function() {
    $('#phone').mask('(00) 0 0000-0000');
});

// Export Functionalities

//export { register };