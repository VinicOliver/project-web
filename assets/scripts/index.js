const time = 2000
let currentContent = 0,
    text = ["Encontre professores das mais diversas disciplinas para te ajudar no momento em que você mais precisa",
            "Dê aulas e ganhe uns trocados a mais"];
    max = text.length;

function replaceContent() {
    document.getElementById('text-content').textContent = text[currentContent];
    currentContent++;

    if(currentContent >= max) {
        currentContent = 0;
    }
}


( function(){
    setInterval(replaceContent, time * 2);
}) ();