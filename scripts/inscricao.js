let servidorapi = "http://localhost:8080"
let servidorweb = "http://localhost:8000"
let cont = 0

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    cont ++
    let nome = document.getElementById('inome').value;
    let datanas = document.getElementById('idata').value;
    let tel = document.getElementById('itel').value;
    let mem = document.getElementById('imem').value;
    if(document.getElementById('imem').checked == true) {   
        mem = true
    } else {  
        mem = false      
    }  
    // bloqueia o botão após duas tentatativas
    if (cont >= 2) {
        btn = document.getElementById('btn').disabled = true;
    }
    let inscricao = {"nome": `${nome}`, "datanas": `${datanas}`, "telefone": `${tel}`, "membro": `${mem}`}

    fetch(`${servidorapi}/inscricao`, {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(inscricao)
    }).then(res => res.json()).then(data => {
        const message = document.getElementById('msg');
        message.textContent = data;
        // teste de inscrição já existente
        if (data == "jaexiste") {
            message.textContent = 'Inscrição já existe!';
            message.classList.remove('success');
            message.classList.add('error');
        } else {
            message.textContent = 'Inscrição realizado com sucesso!';
            message.classList.remove('error');
            message.classList.add('success');
            let param = JSON.parse(data)
            window.location.href = `${servidorweb}/inscrito.html?id=` + param['id'] + '&nome=' + param['nome']
        }        
    })

});

const btn = document.getElementById("btn")
const chkAceito = document.getElementById("idireitos")
btn.disabled = true
btn.style.backgroundColor = "#06275b6b"
chkAceito.addEventListener("change", function(){
    btn.disabled = !this.checked
    btn.style.backgroundColor = "#06275b"
})

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