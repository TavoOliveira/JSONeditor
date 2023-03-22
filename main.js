const jsonEditor = document.getElementById("json-editor");
const lineCounter = document.getElementById("line-counter");

const commands = {
    menu: '{\n"id": 1,\n"texto": "Texto da mensagem"\n}'
}

jsonEditor.addEventListener("input", () => {
    linhas();
});

jsonEditor.addEventListener("scroll", () => {
    lineCounter.scrollTop = jsonEditor.scrollTop;
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
