import dados from "../dados/dados.js";

function retornarListaDeDados () {
    return dados;
};

function retornarListaPorAno (ano) {
    let dadoAno = dados.filter(dado => dado.ano === ano);
    return dadoAno
};

function retornarListaPorId (id) {
    let dado = dados.find(item => item.id === id);
    return dado;
}

function calcularIPCAAno (valor, mesInicial, anoInicial, mesFinal, anoFinal) {

    let resultado = valor;
    let mesAtual = mesInicial;
    let anoAtual = anoInicial;

    while (anoAtual < anoFinal || (anoAtual === anoFinal && mesAtual <= mesFinal)) {
    let dado =  dados.find( dado => dado.ano === anoAtual && dado.mes === mesAtual);
    if (dado) {
        resultado *= (1 + (dado.ipca/100));
    }  
    mesAtual++;
    if (mesAtual > 12) {
        mesAtual = 1;
        anoAtual++;
    }
    }
    return resultado.toFixed(2);
}

function verificaMesValido (mesInicial, mesFinal) {
   if ((mesInicial > 12 || mesInicial < 1) || (mesFinal > 12 || mesFinal < 1)) {
        return true;
   } else {
        return false;
   }
}

function verificaAnoValido (anoInicial, anoFinal) {
    if ((anoFinal > 2023 || anoFinal < 2015) || (anoInicial > 2023 || anoInicial < 2015)) {
        return true;
    } else {
        return false;
    }
 }

function verificaSeENumero (valor) {
    if (isNaN(valor)) {
        return false
    } else {
        return true
    }
}


export {retornarListaDeDados, retornarListaPorAno, retornarListaPorId, calcularIPCAAno, verificaSeENumero, verificaMesValido, verificaAnoValido};