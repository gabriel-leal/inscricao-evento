const modal = document.querySelector("dialog")
let nome = document.getElementById('inome')
let datanas = document.getElementById('idata')
let tel = document.getElementById('itel')
let mem =  document.getElementById('imem')
let conv = document.getElementById('iconv')
let direitos = document.getElementById('idireitos')

function showmodal() {
    modal.showModal()
    modal.scrollTop()
}

function hidemodal() {
    modal.close()
}

// máscaras de formulário
$('#idata').mask('00/00/0000');
$('#itel').mask('(00) 00000-0000');