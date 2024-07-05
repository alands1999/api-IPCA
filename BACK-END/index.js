import express from 'express';
import cors from "cors";
import {retornarListaDeDados, retornarListaPorAno, retornarListaPorId, calcularIPCAAno, verificaSeENumero, verificaMesValido, verificaAnoValido} from './servicos/servicos.js';

const app = express();
const port = 8080;

app.use(cors());

app.get('/historicoIPCA/calculo', (req, res) => {
    let valor = Number(req.query.valor);
    let mesInicial = Number(req.query.mesInicial);
    let anoInicial = Number(req.query.anoInicial);
    let mesFinal = Number(req.query.mesFinal);
    let anoFinal = Number(req.query.anoFinal);

    let resultado = calcularIPCAAno(valor, mesInicial, anoInicial, mesFinal, anoFinal);

    if (verificaMesValido(mesInicial, mesFinal)){
        res.status(404).json({erro: "Nenhum histórico encontrado para o mês especificado."})

    } else if (verificaAnoValido(anoInicial, anoFinal)) {
        res.status(404).json({erro: "Nenhum histórico encontrado para o ano especificado."})

    } else if (isNaN(valor)) {
        res.status(404).json({erro: "Insira um valor válido"})

    } else {
    anoInicial > anoFinal || (anoInicial === anoFinal && mesInicial > mesFinal) ? res.status(404).json({erro: "Parâmetros inválidos."}) : res.json({resultado: resultado});
    }
});

app.get("/historicoIPCA", (req, res) => {

    let ano = Number(req.query.ano);
    let listaDeDados = retornarListaDeDados();
    let dadoAno = retornarListaPorAno(ano);


    if (verificaSeENumero(ano)) {
        ano < 2015 || ano > 2023 ? res.status(404).json({erro: "Nenhum histórico encontrado para o ano especificado."}) : !isNaN(req.query.ano) ? res.json(dadoAno) : res.json({erro: "Insira um valor válido."})
    } else {
        res.json(listaDeDados)
    }

})


app.get("/historicoIPCA/:idIPCA", (req, res) => {
    let id = Number(req.params.idIPCA);
    let dado = retornarListaPorId(id);

    dado ? res.json(dado) : res.status(404).json({erro: "Elemento não encontrado"});
})

app.listen(port, () => {
    console.log("Iniciado na porta:" + port);
});

