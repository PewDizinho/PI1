function copy(element) {
    var inp = document.createElement('input');
    document.body.appendChild(inp);
    inp.value = element.textContent;
    inp.select();
    document.execCommand('copy', false);
    inp.remove();
    document.getElementById("popUp").innerHTML = 'Email Copiado!';
    setTimeout(function () { document.getElementById("popUp").innerHTML = ''; }, 2300);
}