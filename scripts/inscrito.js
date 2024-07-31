var nome = sessionStorage.getItem('nome').split(" ")[0];

var tabela = document.getElementById("tabela");
tabela.innerHTML = `
        <tr>
            <td>01</td>
            <td>${nome}</td>
        </tr>`