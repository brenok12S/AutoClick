// Needs a id or class equals a name clicker.

let click = document.querySelector('#clicker');

setInterval (function(){
    click.click()
    console.log('Estou sendo clicado');
}, 200);