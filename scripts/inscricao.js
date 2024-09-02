document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    let nome = document.getElementById('inome').value;
    let datanas = document.getElementById('idata').value;
    let tel = document.getElementById('itel').value;
    let mem = document.getElementById('imem').value;
    if(document.getElementById('imem').checked == true) {   
        mem = true
    } else {  
        mem = false      
    }  
    console.log(`nome: ${nome} / data de nascimento: ${datanas} / telefone: ${tel} / membro: ${mem}`)
    window.sessionStorage.setItem('nome', nome)
    window.location.href = "inscrito.html";
});

const modal = document.querySelector("dialog")
const btnD = modal.querySelector("button")

// abre o dialog
function showmodal() {
    modal.showModal()
    btnD.blur()
    modal.scrollTop = 0
    document.body.classList.add('no-scroll')
}

// fecha o dialog
function hidemodal() {
    modal.close()
    document.body.classList.remove('no-scroll')
}

// máscaras de formulário
$('#idata').mask('00/00/0000');
$('#itel').mask('(00) 00000-0000');
