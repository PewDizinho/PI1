# Repositório do código fonte do site do PI

#### Aqui terá apenas o código original do site, esse readme funciona como um passo a passo de como usar:

* [Baixando o código](https://github.com/PewDizinho/PI1/edit/main/README.md#baixando-c%C3%B3digo)
* [Enviando o código](https://github.com/PewDizinho/PI1/edit/main/README.md#enviando-os-arquivos)


## Baixando código

1 - Baixe o código em ZIP

<img src="https://user-images.githubusercontent.com/55335712/228983951-83b86095-0b43-421b-ace8-1d2d50b25e0e.png">

2 - Descompacte o ZIP e abra a pasta pelo [Visual Studio Code](https://code.visualstudio.com/download)

3 - Mexa apenas dentro na pasta ./DOCS/, ela é a página ROOT, ou seja, a Raíz do nosso site

4 - Após realizar suas alterações, você irá enviar os arquivos


## Enviando os arquivos

1 - Envie o arquivo dentro da pasta editada
  
2 - Edite a descrição do seu commit, com as alterações que você realizou (VERMELHO)
  
3 - Mude para "Create a new branch for this commit and start a pull request" <strong>ATENÇÃO! NÃO ENVIE DIRETAMENTE PARA O MAIN BRANCH!</strong> (AMARELO)
  
4 - Confirme que o botão verde está escrito "Propose Changes" ao invés de "Commit Changes" <strong>NÃO REALIZE O COMMIT SE O BOTÃO ESTIVER COMO "COMMIT CHANGES</strong>
  
5 - Caso tudo acima esteja correto, aperte em "Propose Changes" (AZUL)
  
<img src="https://user-images.githubusercontent.com/55335712/228985371-446015fc-dfed-4f9c-b91b-486b59427c4c.png">
  
6 - Agora sua alteração vai para ánalise, e apenas irá para o site após eu (Paulo) verificar e aceitar sua modificação


## Regras para formatação de arquivos

#### Algumas regras que devem ser seguidas na hora da realização de criação de novas páginas

1 - Toda página deverá estar dentro de uma pasta, não deve haver mais de um arquivo html por página, por questão de organização, então por exemplo, você quer criar uma página de login, você cria a página `./docs/login/` e dentro dessa página você cria o `index.html` da página de login, e vamos dizer que dentro dessa página você queira abrir uma página de "Esqueci a senha", você deverá criar uma pasta `./docs/login/esqueciasenha/` e dentro dessa pasta criar o `index.html` dessa página

2 - TODAS as imagens devem ser colcadas em `./docs/assets/`
