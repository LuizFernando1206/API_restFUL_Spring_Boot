CRUD de Produtos | Spring Boot + HTML/JS

Aplicação full stack que realiza o gerenciamento de produtos por meio de uma API RESTful desenvolvida com Spring Boot e um frontend simples em HTML, CSS e JavaScript para consumir os endpoints.

 Funcionalidades
Inserir produto — POST
Adiciona um novo produto ao banco de dados enviando os dados via JSON no corpo da requisição.

 Buscar todos os produtos — GET
Retorna uma lista contendo todos os produtos cadastrados.

 Buscar produto por ID — GET
Retorna apenas um produto específico, identificado pelo seu ID.

 Atualizar produto — PUT
Atualiza as informações de um produto já existente, informando o ID e enviando os novos dados.

 Deletar produto por ID — DELETE
Remove um produto específico da base de dados com base no ID informado.

 Deletar todos os produtos — DELETE
Remove todos os produtos cadastrados no banco.

Inserindo um produto:

<img width="1918" height="1020" alt="Imagem crud" src="https://github.com/user-attachments/assets/fc829d2f-d3aa-4a72-af0a-90e00d6ebfa4" />

-------------------------------
Resultado da inserção:
<img width="1916" height="1020" alt="Resultado crud" src="https://github.com/user-attachments/assets/067235de-51db-474e-98fd-cd43a360f2f0" />

--------------------------------
 Tecnologias utilizadas no Backend:
 
Java

Spring Boot

Maven

Spring Web

PostgreSQL Driver

Spring Data JPA

tecnologias utilizados no Frontend:

HTML

CSS

JavaScript puro (Fetch API)

Outros

Git e GitHub

PostgreSQL

 Como executar o projeto
 Backend (Spring Boot)

Clone o repositório

git clone https://github.com/SEU-USUARIO/NOME-DO-REPO.git


Abra o projeto em sua IDE (ex.: IntelliJ)

Configure o banco de dados no arquivo:
src/main/resources/application.properties

Exemplo:

spring.datasource.url=jdbc:postgresql://localhost:5432/nome_do_banco
spring.datasource.username=USUARIO
spring.datasource.password=SENHA


Execute a aplicação pelo método main()

 A API estará rodando em:

http://localhost:8080/produtos

 Frontend

Localize o arquivo index.html



 Rodar com Live Server (VS Code)

Clique com botão direito no index.html

Selecione Open with Live Server


Acesse:
 http://localhost:8000/index.html

