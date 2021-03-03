const annoyer = {
    phrases: ["Hmmm that's weird...", "Ohh ah see, ah see.", "Do you guys wanna see my DDR shoes?", "Oh my gosh! *giggle*", "I know we ran a little bit over, but...", "Yeah...I see wut you mean.", "Oh man, I totally thought we were supposed to do this other problem.", "I can't believe I said that!"],
    pickPhrase() {
        const {phrases} = this;
        let i = Math.floor(Math.random() * phrases.length);
        return phrases[i];
    },
    start(ul) {
        this.timerId = setInterval(() => {
            createLi(this.pickPhrase(), ul)
        }, 2000);
    },
    stop(ul) {
        clearInterval(this.timerId);
        createLi("Finally, some peace and quiet!", ul);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const ul = document.querySelector('ul');
    const btn = document.querySelector('button');

    annoyer.start(ul);

    btn.addEventListener('click', () => annoyer.stop(ul));

});

const createLi = (phrase, ul) => {
    const li = document.createElement('li');
    li.innerText = phrase;
    ul.appendChild(li);
}