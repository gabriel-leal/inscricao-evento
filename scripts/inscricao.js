let servidorapi = "http://localhost:8080"
let servidorweb = "http://localhost:8000"

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

    let inscricao = {"nome": `${nome}`, "datanas": `${datanas}`, "telefone": `${tel}`, "membro": `${mem}`}

    fetch(`${servidorapi}/inscricao`, {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(inscricao)
    }).then(res => res.json()).then(data => {
        console.log(data)
        const message = document.getElementById('msg');
        message.textContent = data;
        // teste de inscrição já existente
        if (data == "jaexiste") {
            message.textContent = 'Cadastro já existe!';
            message.classList.remove('success');
            message.classList.add('error');
        } else {
            message.textContent = 'Cadastro realizado com sucesso!';
            message.classList.remove('error');
            message.classList.add('success');
            //window.location.href = `${servidorweb}/Templetes/login.html`
        }
    })

});


const modal = document.querySelector("dialog")

// abre o dialog
function showmodal() {
    modal.showModal()
    modal.scrollTop = 0
}

// fecha o dialog
function hidemodal() {
    modal.close()
}

// máscaras de formulário
$('#idata').mask('00/00/0000');
$('#itel').mask('(00) 00000-0000');