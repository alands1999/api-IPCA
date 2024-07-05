# API de Histórico do IPCA 

Esta API permite a consulta de dados do Índice Nacional de Preços ao Consumidor Amplo (IPCA) dos anos de 2015 a 2023. A API fornece endpoints para obter a lista completa de dados, dados filtrados por ano, por ID específico e um cálculo ajustado do IPCA entre dois períodos.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Javascript
- html e css (camada Front-End)

## Endpoints

1. Obter Lista Completa de Dados

```markdown
> GET /historicoIPCA 
```
Retorna a lista completa de dados do IPCA.

2. Obter Dados por Ano

```markdown
> GET /historicoIPCA?ano=<ANO>
```
Retorna os dados do IPCA filtrados pelo ano especificado (2015 a 2023).

3. Obter Dados por ID

```markdown
> GET /historicoIPCA/:idIPCA
```
Retorna os dados do IPCA com o ID especificado.

4. Calcular IPCA Ajustado

```markdown
> GET /historicoIPCA/calculo?valor=<VALOR>&mesInicial=<MES_INICIAL>&anoInicial=<ANO_INICIAL>&mesFinal=<MES_FINAL>&anoFinal=<ANO_FINAL>
```
Retorna o valor reajustado do IPCA para o período especificado.

## Tratamento de Erros

A API possui tratamento de erros para:

- Valores de entrada inválidos.
- Anos fora do intervalo de 2015 a 2023.
- Meses fora do intervalo de 1 a 12.
- Parâmetros faltando ou incorretos.

## Como Executar

1. Clone o repositório:
```markdown
> git clone <URL_DO_REPOSITORIO>
```

2. Instale as dependências:
```markdown
> npm install
```

3. Execute o servidor:
```markdown
> node index.js
```
O servidor estará disponível em http://localhost:8080.

## Frontend de Exemplo

Um exemplo de frontend que consome esta API está incluído no projeto. Ele permite a seleção de ano, busca por ID e cálculo do IPCA ajustado.

![1](https://github.com/alands1999/api-IPCA/assets/150439841/6d034578-c7b8-4587-bace-d74f41f7ba85)
![2](https://github.com/alands1999/api-IPCA/assets/150439841/cc9df924-180e-44c9-815b-8f4c205260e8)
![3](https://github.com/alands1999/api-IPCA/assets/150439841/a7e327f7-6799-4666-88b5-67767d3f97cb)
![4](https://github.com/alands1999/api-IPCA/assets/150439841/4e7f6eb1-cf02-4abe-bb68-da7a1065be73)
![5](https://github.com/alands1999/api-IPCA/assets/150439841/a72a7d7f-01c7-4637-99ed-992df681b860)

