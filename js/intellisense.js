export default class Intellisense {
    #commands;

    constructor(commands) {
        this.#commands = commands;
    }

    showOptions(value) {
        const text = value;
        const lastWord = this.#getLastWord(text);
        const options = this.#getOptions(lastWord);
        this.#render(options);
    }

    #render(options) {
        console.log(options);
    }

    #getLastWord(text) {
        const words = text.split(' ');
        return words[words.length - 1];
    }

    #getOptions(lastWord) {
        const options = [];
        for (const [key, value] of Object.entries(this.#commands)) {
            if (key.startsWith(lastWord)) {
                options.push(value);
            }
        }

        return options;
    }
}