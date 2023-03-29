function emailChanges(){
    let txt = document.getElementById('email')
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(txt.value))
    { 
        txt.value +='@escola.uniopet.br';
    
    }
    
}