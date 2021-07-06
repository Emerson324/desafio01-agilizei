# Desafio 01 - Bootcamp 

## Vídeo da execução do teste automatizado do desafio

![Execução teste automatizado](https://media.giphy.com/media/3YX8X4NRU93ZP2VTJW/giphy.gif)



## Ferramenta utilizada
Cypress

## Descrição do desafio

Desafio empresa GoT - Game of Testers

Vamos usar um outro sistema criado para fins de teste: o Automation Practice.

O Automation Practice é um site que simula um ecommerce, e é muito utilizado em processos seletivos de diversas empresas.

Este desafio tem os objetivos de:

- Consolidar os aprendizados do Chapter 1

- Adicionar mais um projeto em seu portfólio

- Preparar você para desafios técnicos de processos seletivos com Cypress

Abaixo, o enunciado do Desafio:

Instruções:

Utilizando o site automation practice, criar um novo projeto (do zero) e configurar o projeto para implementar testes utilizando o Cypress, conforme visto até aqui. Neste primeiro desafio, você deve utilizar apenas a abordagem sem cucumber. 

Importante:

- o e-mail de cadastro deve ser diferente entre um teste e outro

- você deve utilizar o mochawesome como ferramenta de relatório

- subir o projeto no Github e enviar o link para correção

- adicione GIFs ou imagens de seu projeto executando quando subir para o Github

Cenários que devem ser implementados

- Cadastrar um novo usuário

Fluxo do cenário de "Cadastrar um novo usuário":

- Acessar o site automation practice http://automationpractice.com

- Clicar no botão de Sign in

- Preencher as informações de e-mail (não pode ser repetido)

- Clicar no botão Create an Account

- Preencher as informações do formulário de cadastro

- Clicar no botão Register

- Validar que foi redirecionado para a url correta

- Validar exibição do texto 'Welcome to your account'



Checklist

Para facilitar esse primeiro desafio, criei um checklist para te guiar. 

Espero que te ajude a não esquecer nenhum detalhe :)



[✓] Criar uma nova pasta/diretório com o nome do desafio

[✓] Abrir o pasta criada no Visual Studio Code

[✓] Configurar um novo projeto node

[✓] Instalar o Cypress no projeto

[✓] Abrir o Cypress e gerar arquivos padrão

[✓] Configurar arquivo cypress.json com as opções: baseUrl, experimentalSourceRewriting e watchForFileChanges. Se quiser, pode adicionar o schema também.

[✓] Configurar o arquivo support/index para exceções indesejadas

[✓] Apagar as specs de exemplo geradas

[✓] Criar um novo arquivo de testes

[✓] Mapear os elementos necessários para interagir

[✓] Interagir com os elementos mapeados, navegando pela página para executar o fluxo

[✓] Instalar e configurar uma biblioteca para geração de dados fictícios

[✓] Adicionar as asserções para validar que o cadastro foi finalizado corretamente

[✓] Adicionar os scripts para execução no modo interativo e no modo headless

[✓] Conferir se o vídeo está sendo gerado corretamente

[✓] Adicionar as bibliotecas do mochawesome

[✓] Adicionar as configurações para gerar os arquivos do relatório

[✓] Adicionar os scripts para geração dos relatórios em html

[✓] Suba seu projeto no Github

[✓] Configure as actions para executar os testes

[✓] Habilite o GH Pages

[✓] Adicione a action para publicar o relatório do mochawesome

[✓] Lembre-se, para o resultado aparecer o arquivo do relatório deve ser index.html :)

[✓] Crie uma descrição de seu projeto no Github com imagem ou vídeos da execução, tecnologias, tags e aprendizados
