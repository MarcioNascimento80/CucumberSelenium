$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/inserir_conta.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Cadastro de contas",
  "description": "\nComo um usuário \nGostaria de cadastrar contas\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 18,
  "name": "informo a conta \"\u003cconta\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;",
  "rows": [
    {
      "cells": [
        "conta",
        "mensagem"
      ],
      "line": 23,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;1"
    },
    {
      "cells": [
        "Marcio",
        "Conta adicionada com sucesso!"
      ],
      "line": 24,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2"
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ],
      "line": 25,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3"
    },
    {
      "cells": [
        "Marcio",
        "Já existe uma conta com esse nome!"
      ],
      "line": 26,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 381104,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuário \"marciorpnascimento@hotmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"maje1425\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 14,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "inserirContasSteps.que_estou_acessando_a_aplicação()"
});
formatter.result({
  "duration": 10612070676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "marciorpnascimento@hotmail.com",
      "offset": 19
    }
  ],
  "location": "inserirContasSteps.informo_o_usuário(String)"
});
formatter.result({
  "duration": 811689298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "maje1425",
      "offset": 9
    }
  ],
  "location": "inserirContasSteps.a_senha(String)"
});
formatter.result({
  "duration": 571775563,
  "status": "passed"
});
formatter.match({
  "location": "inserirContasSteps.seleciono_entrar()"
});
formatter.result({
  "duration": 1369860736,
  "status": "passed"
});
formatter.match({
  "location": "inserirContasSteps.visualizo_a_página_inicial()"
});
formatter.result({
  "duration": 281905002,
  "status": "passed"
});
formatter.match({
  "location": "inserirContasSteps.seleciono_Contas()"
});
formatter.result({
  "duration": 367360637,
  "status": "passed"
});
formatter.match({
  "location": "inserirContasSteps.seleciono_Adicionar()"
});
formatter.result({
  "duration": 1151239581,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 18,
  "name": "informo a conta \"Marcio\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "recebo a mensagem \"Conta adicionada com sucesso!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Marcio",
      "offset": 17
    }
  ],
  "location": "inserirContasSteps.informo_a_conta(String)"
});
formatter.result({
  "duration": 1454581531,
  "status": "passed"
});
formatter.match({
  "location": "inserirContasSteps.seleciono_Salvar()"
});
formatter.result({
  "duration": 2126307010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta adicionada com sucesso!",
      "offset": 19
    }
  ],
  "location": "inserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 532196817,
  "status": "passed"
});
formatter.after({
  "duration": 2129429739,
  "status": "passed"
});
formatter.after({
  "duration": 1763520309,
  "status": "passed"
});
formatter.before({
  "duration": 153263,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuário \"marciorpnascimento@hotmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"maje1425\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 14,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "inserirContasSteps.que_estou_acessando_a_aplicação()"
});
formatter.result({
  "duration": 12581512539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "marciorpnascimento@hotmail.com",
      "offset": 19
    }
  ],
  "location": "inserirContasSteps.informo_o_usuário(String)"
});
formatter.result({
  "duration": 921140138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "maje1425",
      "offset": 9
    }
  ],
  "location": "inserirContasSteps.a_senha(String)"
});
formatter.result({
  "duration": 452033538,
  "status": "passed"
});
formatter.match({
  "location": "inserirContasSteps.seleciono_entrar()"
});
formatter.result({
  "duration": 1894356098,
  "status": "passed"
});
formatter.match({
  "location": "inserirContasSteps.visualizo_a_página_inicial()"
});
formatter.result({
  "duration": 272403393,
  "status": "passed"
});
formatter.match({
  "location": "inserirContasSteps.seleciono_Contas()"
});
formatter.result({
  "duration": 425155760,
  "status": "passed"
});
formatter.match({
  "location": "inserirContasSteps.seleciono_Adicionar()"
});
formatter.result({
  "duration": 1044738366,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 18,
  "name": "informo a conta \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "recebo a mensagem \"Informe o nome da conta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "inserirContasSteps.informo_a_conta(String)"
});
formatter.result({
  "duration": 484399353,
  "status": "passed"
});
formatter.match({
  "location": "inserirContasSteps.seleciono_Salvar()"
});
formatter.result({
  "duration": 1565764104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Informe o nome da conta",
      "offset": 19
    }
  ],
  "location": "inserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 360841495,
  "status": "passed"
});
formatter.after({
  "duration": 441015722,
  "status": "passed"
});
formatter.after({
  "duration": 2427694859,
  "status": "passed"
});
formatter.before({
  "duration": 160789,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuário \"marciorpnascimento@hotmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"maje1425\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 14,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "inserirContasSteps.que_estou_acessando_a_aplicação()"
});
formatter.result({
  "duration": 10829995306,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "marciorpnascimento@hotmail.com",
      "offset": 19
    }
  ],
  "location": "inserirContasSteps.informo_o_usuário(String)"
});
formatter.result({
  "duration": 701522091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "maje1425",
      "offset": 9
    }
  ],
  "location": "inserirContasSteps.a_senha(String)"
});
formatter.result({
  "duration": 454517900,
  "status": "passed"
});
formatter.match({
  "location": "inserirContasSteps.seleciono_entrar()"
});
formatter.result({
  "duration": 1563597214,
  "status": "passed"
});
formatter.match({
  "location": "inserirContasSteps.visualizo_a_página_inicial()"
});
formatter.result({
  "duration": 1966610607,
  "status": "passed"
});
formatter.match({
  "location": "inserirContasSteps.seleciono_Contas()"
});
formatter.result({
  "duration": 469964599,
  "status": "passed"
});
formatter.match({
  "location": "inserirContasSteps.seleciono_Adicionar()"
});
formatter.result({
  "duration": 925441075,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 18,
  "name": "informo a conta \"Marcio\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "recebo a mensagem \"Já existe uma conta com esse nome!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Marcio",
      "offset": 17
    }
  ],
  "location": "inserirContasSteps.informo_a_conta(String)"
});
formatter.result({
  "duration": 709805808,
  "status": "passed"
});
formatter.match({
  "location": "inserirContasSteps.seleciono_Salvar()"
});
formatter.result({
  "duration": 1053167819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Já existe uma conta com esse nome!",
      "offset": 19
    }
  ],
  "location": "inserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 225648664,
  "status": "passed"
});
formatter.after({
  "duration": 850035785,
  "status": "passed"
});
formatter.after({
  "duration": 1281788687,
  "status": "passed"
});
});