const modal = document.querySelector("dialog")

function showmodal() {
    modal.showModal()
}

function hidemodal() {
    modal.close()
}



// máscaras de formulário
$('#idata').mask('00/00/0000');
$('#itel').mask('(00) 00000-0000');