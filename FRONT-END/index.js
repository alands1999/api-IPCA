const url = 'http://localhost:8080/historicoIPCA';

let selectTag = document.getElementById('anoIPCA');
let divDeRespostas = document.getElementById('resultados');

let inputPesquisa = document.getElementById('campoPesquisa');
let botaoDePesquisa = document.getElementById('botaoPesquisaID');

//variaveis da calculadora

let valor = document.getElementById('valor');
let mesInicial = document.getElementById('mesInicial');
let anoInicial = document.getElementById('anoInicial');
let mesFinal = document.getElementById('mesFinal');
let anoFinal = document.getElementById('anoFinal');
let botaoCalcular = document.getElementById('calcular');

botaoCalcular.addEventListener('click', async () => {

    divDeRespostas.innerHTML = ""

    const response = await fetch(`${url}/calculo?valor=${Number(valor.value)}&mesInicial=${Number(mesInicial.value)}&anoInicial=${Number(anoInicial.value)}&mesFinal=${Number(mesFinal.value)}&anoFinal=${Number(anoFinal.value)}`)
    const dados = await response.json();
    if (Number(valor.value) && Number(mesInicial.value) && Number(anoInicial.value) && Number(mesFinal.value) && Number(anoFinal.value)) {
    try { 
        if(response.ok) {
            divDeRespostas.innerHTML = `
            <div>
                <h1>Resultado: ${dados.resultado}</h1>
            </div>
        `  
        console.log(dados)
        } else {
            divDeRespostas.innerHTML = `
                <div>
                    <h1>Resultado: ${dados.erro}</h1>
                </div>
            `
        }
    } catch(error) {
        console.error("erro ao buscar os dados:", error)
        divDeRespostas.innerHTML = `
        <div>
            <h1>Erro ao buscar os dados</h1>
        </div>
    `;
    } } else {
        divDeRespostas.innerHTML = `
        <div>
            <h1>Erro: Dados inválidos</h1>
        </div>
    `;
    }
})

botaoDePesquisa.addEventListener('click', async () => {

    const valorPesquisa = Number(inputPesquisa.value);
    divDeRespostas.innerHTML = ""

    if(valorPesquisa) {
        try {
            const response = await fetch(`${url}/${valorPesquisa}`);
            const dados = await response.json();

            if(response.ok) {
                divDeRespostas.innerHTML = `
                <div>
                    <h1>ID: ${dados.id}</h1>
                    <h2>Mes: ${dados.mes}</h2>
                    <h2>Ano: ${dados.ano}</h2>
                    <h2>IPCA: ${dados.ipca}</h2>
                </div>
            `
            } else {
                divDeRespostas.innerHTML = `
                <div>
                    <h1>ID: ${dados.erro}</h1>
                </div>
            `
            }
        }catch(error) {
            console.error("erro ao buscar os dados:", error);
        }
    } else {
        divDeRespostas.innerHTML = `
                    <div>
                        <h1>Erro: ID inválido</h1>
                    </div>
                `;
    }
})


selectTag.addEventListener("change", async () => {
    const anoValue = Number(selectTag.value);
    if (anoValue) {
        try {
            const response = await fetch(`${url}?ano=${anoValue}`);
            const dados = await response.json();
            let divRespostas = "";

            dados.map(dado => {
                divRespostas += `
                    <div>
                    <h1>ID: ${dado.id}</h1>
                    <h2>Mes: ${dado.mes}</h2>
                    <h2>Ano: ${dado.ano}</h2>
                    <h2>IPCA: ${dado.ipca}</h2>
                    </div>
            `})
            divDeRespostas.innerHTML = divRespostas;
        }catch(error) {
            console.error("Erro ao buscar as informações da API", error)
        }
    } else {
        divDeRespostas.innerHTML = "";
    }
})



function fillSelect () {
    for (let ano = 2015; ano < 2024; ano++) {
    const option = document.createElement('option');
    option.value = ano;
    option.textContent = ano;
    selectTag.appendChild(option)
    }
}

fillSelect();