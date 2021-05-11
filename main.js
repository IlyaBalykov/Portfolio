let window_flashcards = document.querySelector('.window-flashcards');
let window_virtual_piano = document.querySelector('.window-virtual-piano');
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