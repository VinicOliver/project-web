import { Teacher } from './teacher.js';

let teachers = [];

const subjects = [
    'Artes',
    'Biologia',
    'Filosofia',
    'Física',
    'Geografia',
    'História',
    'Língua Espanhola',
    'Língua Inglesa',
    'Língua Portuguesa',
    'Matemática',
    'Química',
    'Sociologia'
];

// Validation Functions

function nameValidate(name) {
    'use strict';
    return name.trim().length > 0;
}

function linkValidate(link) {
    'use strict';
    return link.includes('https://');
}

function sizeText(text) {
    'use strict';
    return text.trim().length > 0;
}

function register() {
    'use strict';
    let name = document.getElementById('name').value;
    let number = document.getElementById('phone').value;
    let photo = document.getElementById('photo').value;
    let bio = document.getElementById('bio').value;
    let subject = document.getElementById('subjects').value;
    let cost = document.getElementById('cost').value;

    if (nameValidate(name) && linkValidate(photo) && sizeText(bio)) {
        let user = new Teacher(name, number, photo, bio, subject, cost);

        if (JSON.parse(localStorage.getItem('teachers')) !== null) {
            teachers = (JSON.parse(localStorage.getItem('teachers')));
        }
        
        teachers.push(user);

        localStorage.setItem('teachers', JSON.stringify(teachers));
        window.alert('Cadastro efetuado!');

        return true;
    } else {
        window.alert('Preencha os campos corretamente!');
        return false;
    }
}

function loadSelect() {
    'use strict';
    let selectSubjects = document.getElementById('subjects');

    subjects.forEach((subject, index) => {
        let option = new Option(subject, index);
        selectSubjects.options[selectSubjects.options.length] = option;
    });
}

// JQuery

$(function() {
    'use strict';
    $('#name').blur(function() {
        if ($(this).val() === '')
            window.alert('Preencha esse campo!');
    });

    $('#phone').blur(function() {
        if ($(this).val() === '')
            window.alert('Preencha esse campo!');
    });

    $('#photo').blur(function() {
        if ($(this).val() === '')
            window.alert('Preencha esse campo!');
    });

    $('#bio').blur(function() {
        if ($(this).val() === '')
            window.alert('Preencha esse campo!');
    });

    $('#cost').blur(function() {
        if ($(this).val() === '')
            window.alert('Preencha esse campo!');
    });

    $('input').focus(function() {
        $(this).css({'border-color': 'white'});
    });

    $('input').blur(function() {
        $(this).css({'border-color': 'black'});
    });
});

// JQuery Masks

$(document).ready(function() {
    'use strict';
    $('#phone').mask('(00) 0 0000-0000');
});

window.onload = loadSelect;
document.querySelector('#frmClass').addEventListener('submit', register);