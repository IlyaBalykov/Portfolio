let window_flashcards = document.querySelector('.window-flashcards');
let window_virtual_piano = document.querySelector('.window-virtual-piano');
let hamburger_menu = document.getElementById('hamburger');

function flashcards(oldToken, newToken) {
    window_flashcards.classList.replace('window-flashcards', 'open-window-flashcards');
}
function flashcards_close(oldToken, newToken) {
    window_flashcards.classList.replace('open-window-flashcards', 'window-flashcards');
}
function virtual_piano(oldToken, newToken) {
    window_virtual_piano.classList.replace('window-virtual-piano', 'open-window-virtual-piano');
}
function virtual_piano_close(oldToken, newToken) {
    window_virtual_piano.classList.replace('open-window-virtual-piano', 'window-virtual-piano');
}
function hamburger() {
    hamburger_menu.classList.replace('hamburger', 'open-hamburger-menu');
}
function hamburger_close() {
    hamburger_menu.classList.replace('open-hamburger-menu','hamburger');
}
icon.onclick = function () {
    this.classList.toggle('icon-click');
}