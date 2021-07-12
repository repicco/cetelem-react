# cetelem

Inicio: 09/07/2021

Término: 12/07/2021

## Instalações

Inicialização do projeto:

```bash
  npm install
  yarn install
```

Bibliotecas utilizadas:

```bash
    Styled Components
    React-Icons
    Redux
    React-Redux
    React-Simple-Cep-Mask
    Axios
```

## Lógicas implementadas

Pensando em utilizar o formato Mockado, decidi pelo Redux ao invés de localStore ou sessionStore, já que após liberação da API pelo Backend a lógica seria reaproveitada.

Criação do usuário: Validado se todos os campos requeridos estão preenchidos, verificamos se os item não possuem nome, sobrenome, cep e numero duplicados para travar o cadastro.

Listagem: Captura a lista do store do Redux e renderizada no card dentro de Lista Clientes.

Edição: Valida o item exato a ser editado e envia um novo payload com os novos e antigos dados.

Exclusão: Valida o item exato a ser excluido e envia um novo payload sem o item filtrado.

CEP: máscara do cep para travar a quantidade de caracteres e o padrão de envio, utilização da ViaCEP para retornar os campos de rua, bairro, cidade e estado.

Idade: travado o máximo do campo de seleção para 200 e deixado alerta para quando o usuário digitar acima de 100 anos.

Busca do cabeçalho: valida se a informação é válida para qualquer campo dentro da lista, alertando e retornando o valor original em caso de falha da busca. Não é necessário diferenciar maiusculas e minusculas, pois a pesquisa já corrige esse caso.

## Itens Implementados

- Layout Desktop e Mobile (Mobile First)
- Movimentação Redux: Listar, Criar, Editar e Excluir
- Alerta campos faltantes e inválidos
- Modal confirmação cadastro/update/exclusão
- Favicon
- Alertas de eventos na tela
- MascaraCEP para controle do input
- ValidarCEP para povoar os itens referente ao endereço
- Funcionalidade Buscar do cabeçalho
