const time = 2000;
let currentContent = 0,
    text = [
    'Encontre professores para te ajudar no momento em que você mais precisa',
    'Dê aulas e ganhe uns trocados a mais'
];
let max = text.length;

function replaceContent() {
    'use strict';
    document.getElementById('text-content').textContent = text[currentContent];
    currentContent++;

    if (currentContent >= max) {
        currentContent = 0;
    }
}


( function(){
    'use strict';
    setInterval(replaceContent, time * 2);
}) ();