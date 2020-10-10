#language: pt
Funcionalidade: Cadastro de contas

Como um usuário 
Gostaria de cadastrar contas
Para que eu possa distribuir meu dinheiro de uma forma mais organizada

Contexto:
Dado que estou acessando a aplicação
Quando informo o usuário "marciorpnascimento@hotmail.com"
E a senha "maje1425"
E seleciono entrar
Então visualizo a página inicial
Quando seleciono Contas
E seleciono Adicionar

Esquema do Cenário: Deve validar regras cadastro contas
E informo a conta "<conta>"
E seleciono Salvar
Então recebo a mensagem "<mensagem>"

Exemplos:
		| conta    | mensagem                            |
		| Marcio   | Conta adicionada com sucesso!       |
		|          | Informe o nome da conta             |
		| Marcio   | Já existe uma conta com esse nome!  |
	
	