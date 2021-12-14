const subjects = ['Artes', 'Biologia', 'Filosofia', 'Física', 'Geografia', 'História',
'Língua Espanhola', 'Língua Inglesa', 'Língua Portuguesa','Matemática', 'Química', 'Sociologia'];

let teachers = [];

function getData() {
    'use strict';
    teachers = JSON.parse(localStorage.getItem('teachers'));
}

function loadSelect() {
    'use strict';
    let selectSubjects = document.getElementById('subjects');

    subjects.forEach((subject, index) => {
        let option = new Option(subject, index);
        selectSubjects.options[selectSubjects.options.length] = option;
    });
}

function createrDivTeacher(photo, teacherName, phone, subject, description, cost) {
    'use strict';
    let sbj;

    for (var i = 0; i < subjects.length; i++) {
        if (subject == i) {
            sbj = subjects[i];
        }            
    }

    let divTeacher =
        `<article class="teacher">
            <div class="content">
                <div class="photo">
                    <img src=${photo}></img>
                </div>
                <div class="info">
                    <p>${teacherName}</p>
                    <p>${sbj}</p>
                    <p>Sobre/Bio: ${description}</p>
                    <p>R$ ${cost}</p>
                </div>
            </div>
            <div class='link-area'>
                <a href='https://api.whatsapp.com/send?phone=${phone}' target='_blank' 
                class="link-button">Entrar em contato</a>
            </div>
        </article>`;
    
    document.querySelector('.teachers').insertAdjacentHTML('beforeend', divTeacher);
}

function renderizaProfessores() {
    'use strict';
    getData();

    let newSection = document.createElement('section');
    newSection.id = 'content';
    main.appendChild(newSection);

    if (teachers == null) {
        let newDiv = document.createElement('div');
        $('newDiv').addClass('teachers');

        let newHeader = document.createElement('h1');
        $('newHeader').text('Infelizmente não conseguimos encontrar um professor :(');

        let newParagraph = document.createElement('p');
        $('newHeader').text('Tente mudar os filtros, pode ser que a gente ' +
        'consiga encontrar numa próxima.');

        newDiv.appendChild(newHeader);
        newDiv.appendChild(newParagraph);
        document.querySelector('#content').appendChild(newDiv);
    }else {
        let newHeader = document.createElement('h1');
        newHeader.innerText = 'Aqui estão os professores disponíveis para você';

        let newDiv = document.createElement('div');
        newDiv.className = 'teachers';

        document.querySelector('#content').appendChild(newHeader);
        document.querySelector('#content').appendChild(newDiv);

        teachers.forEach(teacher => {
            let photo = teacher.photo;
            let name = teacher.name;
            let phone = teacher.cellNumber;
            let subject = teacher.subject;
            let cost = teacher.cost;
            let bio = teacher.bio;
    
            createrDivTeacher(photo, name, phone, subject, bio, cost);
        });
    }    
}

function filter() {
    'use strict';
    let section = document.querySelector('#content');
    section.innerText = '';

    let newSection = document.createElement('section');
    newSection.id = 'content';
    document.querySelector('#main').appendChild(newSection);

    let selectSubject = document.getElementById('subjects').value;

    // Filtra o array de professores
    let professoresFiltrados = teachers.filter(teacher => {
        return teacher.subject === selectSubject;
    });

    if (professoresFiltrados.length === 0) {
        let newDiv = document.createElement('div');
        newDiv.className = 'teachers';

        let newHeader = document.createElement('h1');
        newHeader.innerText = 'Infelizmente não conseguimos encontrar um professor :(';

        let newParagraph = document.createElement('p');
        newParagraph.innerText = 'Tente mudar os filtros, pode ser que a gente '+
        'consiga encontrar numa próxima.';

        newDiv.appendChild(newHeader);
        newDiv.appendChild(newParagraph);
        document.querySelector('#content').appendChild(newDiv);
    }else {
        let newHeader = document.createElement('h1');
        newHeader.innerText = 'Aqui estão os professores disponíveis para você';

        let newDiv = document.createElement('div');
        newDiv.className = 'teachers';

        document.querySelector('#content').appendChild(newHeader);
        document.querySelector('#content').appendChild(newDiv);

        professoresFiltrados.forEach(teacher => {
            let photo = teacher.photo;
            let name = teacher.name;
            let phone = teacher.cellNumber;
            let subject = teacher.subject;
            let cost = teacher.cost;
            let bio = teacher.bio;
    
            createrDivTeacher(photo, name, phone, subject, bio, cost);
        });
    }
}

let start = function () {
    'use strict';
    renderizaProfessores();
    loadSelect();
};

document.querySelector('.filter').addEventListener('click', filter);
window.onload = start;