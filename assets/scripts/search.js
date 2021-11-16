document.querySelector('.filter').addEventListener('click', filter);

window.onload = start;

const subjects = ["Artes", "Biologia", "Filosofia", "Física", "Geografia", "História", "Língua Espanhola", "Língua Inglesa", "Língua Portuguesa", 
"Matemática", "Química", "Sociologia"];

let teachers = [];

function start() {
    renderizaProfessores();
    loadSelect();
}

function getData() {
    teachers = JSON.parse(localStorage.getItem('teachers'));
}

function loadSelect() {
    let selectSubjects = document.getElementById("subjects");

    subjects.forEach((subject, index) => {
        option = new Option(subject, index);
        selectSubjects.options[selectSubjects.options.length] = option;
    });
}

function renderizaProfessores() {
    getData();

    let newSection = document.createElement('section');
    newSection.id = "content";
    // Inserir section no documento!!!
    document.querySelector('#main').appendChild(newSection);

    if(teachers == null) {
        let newDiv = document.createElement('div');
        newDiv.className = "teachers";

        let newHeader = document.createElement('h1');
        newHeader.innerText = "Infelizmente não conseguimos encontrar um professor :(";

        let newParagraph = document.createElement('p');
        newParagraph.innerText = "Tente mudar os filtros, pode ser que a gete consiga encontrar numa próxima.";

        newDiv.appendChild(newHeader);
        newDiv.appendChild(newParagraph);
        document.querySelector('#content').appendChild(newDiv);
    } else {
        let newHeader = document.createElement('h1');
        newHeader.innerText = "Aqui estão os professores disponíveis para você";

        let newDiv = document.createElement('div');
        newDiv.className = "teachers";

        document.querySelector('#content').appendChild(newHeader);
        document.querySelector('#content').appendChild(newDiv);

        teachers.forEach(teacher => {
            photo = teacher.photo;
            nome = teacher.name;
            materia = teacher.subject;
            valor = teacher.cost;
            descricao = teacher.bio;
    
            createrDivTeacher(photo, nome, materia, descricao, valor);
        });
    }    
}

function filter() {

    // Apaga todo o conteúdo
    let section = document.querySelector('#content');
    section.innerText = "";

    // Cria nova área para conteúdo
    let newSection = document.createElement('section');
    newSection.id = "content";
    document.querySelector('#main').appendChild(newSection);

    // Armazena qual disciplina foi selecionada
    let selectSubject = document.getElementById('subjects').value;

    // Filtra o array de professores
    professoresFiltrados = teachers.filter(teacher => {
        return teacher.subject == selectSubject;
    })

    if (professoresFiltrados.length == 0) {
        let newDiv = document.createElement('div');
        newDiv.className = "teachers";

        let newHeader = document.createElement('h1');
        newHeader.innerText = "Infelizmente não conseguimos encontrar um professor :(";

        let newParagraph = document.createElement('p');
        newParagraph.innerText = "Tente mudar os filtros, pode ser que a gente consiga encontrar numa próxima.";

        newDiv.appendChild(newHeader);
        newDiv.appendChild(newParagraph);
        document.querySelector('#content').appendChild(newDiv);
    } else {
        let newHeader = document.createElement('h1');
        newHeader.innerText = "Aqui estão os professores disponíveis para você";

        let newDiv = document.createElement('div');
        newDiv.className = "teachers";

        document.querySelector('#content').appendChild(newHeader);
        document.querySelector('#content').appendChild(newDiv);

        professoresFiltrados.forEach(teacher => {
            photo = teacher.photo;
            nome = teacher.name;
            materia = teacher.subject;
            valor = teacher.cost;
            descricao = teacher.bio;
    
            createrDivTeacher(photo, nome, materia, descricao, valor);
        });
    }
}

function createrDivTeacher(photo, teacherName, subject, description, cost) {
    let newArticle = document.createElement('article');
    newArticle.className = 'teacher';

    let divContent = document.createElement('div');
    divContent.className = 'content';

    let divPhoto = document.createElement('div');
    divPhoto.className = 'photo';
    let newImg = document.createElement('img');
    newImg.src = "";

    let divInfo = document.createElement('div');
    divInfo.className = 'info';
    let newParagraph = document.createElement('p');
    newParagraph.innerText = teacherName;

    let newParagraph2 = document.createElement('p');
    for(var i = 0; i < subjects.length; i++) {
        if(subject == i) {
            newParagraph2.innerText = subjects[i];
        }            
    }
    
    let newParagraph3 = document.createElement('p');
    newParagraph3.innerText = "Sobre: " + description;

    let newParagraph4 = document.createElement('p');
    newParagraph4.innerText = "R$ " + cost;

    let newButton = document.createElement('button');
    newButton.className = 'button';
    newButton.innerText = "Entrar em contato";

    
    newArticle.appendChild(divContent);
    newArticle.appendChild(newButton);

    divContent.appendChild(divPhoto);
    divContent.appendChild(divInfo);

    divPhoto.appendChild(newImg);

    divInfo.appendChild(newParagraph);
    divInfo.appendChild(newParagraph2);
    divInfo.appendChild(newParagraph3);
    divInfo.appendChild(newParagraph4);

    document.querySelector('.teachers').appendChild(newArticle);
}