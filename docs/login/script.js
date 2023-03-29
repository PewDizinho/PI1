function emailChanges() {
    let txt = document.getElementById('email')
    if (txt.value.lenght > 0) {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(txt.value)) {
            txt.value += '@escola.uniopet.br';
        }
    }
}