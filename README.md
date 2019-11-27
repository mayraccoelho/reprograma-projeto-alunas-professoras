# Reprograma | Meli - API Alunas/ Professoras
##### Desenvolvimento de API Alunas/ Professoras integrando com o banco de dados MongoDB

## Tecnologias Utilizadas
### Linguagens
- Javascript<br>
- NodeJS<br>

### Banco de Dados
- MongoDB<br>

### Dependências
- Express<br>
- Nodemon<br>
- Mongoose<br>
- BodyParser<br>


## Endpoints Criados

<table>
<thead>
<th>Verbo</th>
<th>Funcionalidade</th>
<th>Caminho</th>
</thead>
<tbody>
<tr>
<td>GET</td>
<td>Listar todas as alunas</td>
<td>'/alunas'
</tr>

<tr>
<td>GET</td>
<td>Listar todas as alunas que nasceram em SP</td>
<td>'/alunas/nasceuSp'</td>
</tr>

<tr>
<td>GET</td>
<td>Listar alunas por ID</td>
<td>'/alunas/:id'</td>
</tr>

<tr>
<td>GET</td>
<td>Listar alunas por ID mostrando livros</td>
<td>'/alunas/:id/livros'</td>
</tr>

<tr>
<td>GET</td>
<td>Listar alunas por ID mostrando a idade</td>
<td>'/alunas/:id/getAge'</td>
</tr>

<tr>
<td>POST</td>
<td>Adicionar nova aluna</td>
<td>'/alunas'</td>
</tr>

<tr>
<td>POST</td>
<td>Adicionar novos livros</td>
<td>'/alunas/:id/livros'</td>
</tr>

<tr>
<td>PUT</td>
<td>Atualizar dados</td>
<td>'/alunas/:id'</td>
</tr>

<tr>
<td>DELETE</td>
<td>Deletar dados</td>
<td>'/alunas/:id'</td>
</tr>
</table>


<table>
<thead>
<th>Verbo</th>
<th>Funcionalidade</th>
<th>Caminho</th>
</thead>
<tbody>
<tr>
<td>GET</td>
<td>Listar todas as professoras</td>
<td>'/professoras'
</tr>

<tr>
<td>GET</td>
<td>Listar professoras por ID</td>
<td>'/professoras/:id'</td>
</tr>

<tr>
<td>POST</td>
<td>Adicionar nova professora</td>
<td>'/professoras'</td>
</tr>
</table>

## Postman

https://www.getpostman.com/collections/e9f2e8262ab46006e1aa
