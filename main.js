import Intellisense from './js/intellisense.js';

const jsonEditor = document.getElementById("json-editor");
const lineCounter = document.getElementById("line-counter");
const interllisense = document.querySelector('.interllisense');

const commands = {
    menu: '{\n"id": 1,\n"texto": "Texto da mensagem"\n}',
    criarmenu: ''
}

const inter = new Intellisense(commands);

jsonEditor.addEventListener("input", (event) => {
    inter.showOptions(event.target.value);  
    linhas();
});

jsonEditor.addEventListener("scroll", () => {
    lineCounter.scrollTop = jsonEditor.scrollTop;
});

jsonEditor.addEventListener('focusout', () => {
    interllisense.style.display = "none";
});

function novo() {
    jsonEditor.textContent += commands.menu;
    linhas();
}

function linhas() {
    const content = jsonEditor.value;
    const lines = content.split('\n');
    const lineNumberHtml = lines
        .map((line, index) => `${index + 1}\n`)
        .join('');
    lineCounter.value = lineNumberHtml;

    jsonEditor.setAttribute('rows', lines.length);
    lineCounter.setAttribute('rows', lines.length);
}

function salvar() {
    console.log(JSON.parse(jsonEditor.textContent));
}

function getCursorPosition(textarea) {
    const { selectionStart, selectionEnd } = textarea;
    const { top, left } = textarea.getBoundingClientRect();
    const lineHeight = parseInt(getComputedStyle(textarea).lineHeight, 10);
    const height = (selectionEnd - selectionStart) * lineHeight;
    return {
        top: top + lineHeight * Math.floor(selectionEnd / textarea.cols),
        left: left + (selectionEnd % textarea.cols) * parseFloat(getComputedStyle(textarea).fontSize),
        height: height
    }
}
