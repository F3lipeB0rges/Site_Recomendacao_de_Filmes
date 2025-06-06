# Site_Recomendação_de_Filmes

DCC704 – ARQUITETURA E TECNOLOGIA DE SISTEMAS WEB

Trabalho Final – Sistema de Recomendação de Filmes

Aluno: Felipe Rubens de Sousa Borges

### Descrição do Trabalho
Os alunos deverão desenvolver um sistema de recomendação de filmes com uma arquitetura web completa, utilizando React no front-end, Node.js no back-end e MongoDB para o armazenamento dos dados. O sistema deve incluir tanto recomendações baseadas em filtro colaborativo, filtro baseado em conteúdo, ou híbrido, quanto recomendações descritivas, similares às encontradas em plataformas de streaming.

### Objetivos
	•	Aplicar conceitos de arquitetura web em uma aplicação real.
	•	Desenvolver um front-end interativo e responsivo com React.
	•	Construir um back-end robusto e seguro com Node.js e Express.
	•	Armazenar e recuperar dados eficientemente com MongoDB.
	•	Implementar um sistema de recomendação eficiente e útil.

### Requisitos do Sistema

O sistema deverá conter os seguintes módulos e funcionalidades:

### Estrutura e Arquitetura Web
	•	Aplicação separada em front-end e back-end com comunicação via API REST.
	•	Utilização de Express.js no back-end para gerenciar rotas e requisições.
	•	Banco de dados MongoDB para armazenamento dos filmes, usuários e histórico de interações.
	•	Autenticação e controle de usuários com JWT (JSON Web Token).

### Front-End (React)
	•	Interface responsiva e intuitiva com React.
	•	Página inicial exibindo filmes populares ou mais bem avaliados.
	•	Sistema de login e cadastro de usuários.
	•	Página de detalhes do filme, incluindo sinopse, elenco e avaliações dos usuários (link externo do youtube).
	•	Página de recomendações personalizadas com base no comportamento do usuário.

### Back-End (Node.js + Express)
	•	API RESTful com endpoints para:
	•	Autenticação: registro, login e gerenciamento de usuários.
	•	Filmes: adição, edição, exclusão e listagem de filmes.
	•	Avaliações: usuários podem dar notas e escrever resenhas dos filmes.
	•	Histórico de interações: registro de filmes assistidos e curtidos pelo usuário.
	•	Recomendações: fornecer sugestões de filmes com base em diferentes algoritmos.

### Banco de Dados (MongoDB)
	•	Coleções principais:
	•	Usuários (id, nome, e-mail, senha, histórico de interações, preferências).
	•	Filmes (id, título, gênero, descrição, elenco, avaliações).
	•	Avaliações (id, usuário, filme, nota, comentário).

### Implementação do Sistema de Recomendação

### A) Recomendação Baseada em Filtro Colaborativo, Baseado em Conteúdo ou Híbrido
	•	Utilizar métodos de filtragem colaborativa, sugerindo filmes com base em usuários com preferências semelhantes.
	•	Implementação com Matriz de Similaridade do Coseno ou Modelo de vizinhos mais próximos (KNN).
	•	Alternativamente, pode ser feita uma recomendação híbrida combinando:
	•	Filtragem colaborativa (baseada em interações de usuários).
	•	Filtragem baseada em conteúdo (com recomendações por gêneros e palavras-chave).

### B)Recomendação Descritiva (Baseada em Categorias)
	•	O sistema deve exibir sugestões com base em categorias pré-definidas, como:
	•	“Mais populares” (baseados nas avaliações de usuários).
	•	“Filmes semelhantes ao que você assistiu” (baseado no gênero e tags).
	•	“Tendências da semana” (baseado em acessos recentes).
	•	Implementação baseada em consultas ao banco de dados com agregações.


### Relatório Técnico
	•	Introdução ao projeto e sua motivação.
	•	Arquitetura do sistema, explicando as decisões tomadas.
	•	Explicação do sistema de recomendação implementado.
	•	Capturas de tela da interface e funcionamento do sistema.
	•	Código-fonte documentado, hospedado em um repositório GitHub.
