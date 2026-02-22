Library API

API desenvolvida para gerenciamento de usuários, livros e sistema de empréstimos e devoluções, com foco em segurança, organização de arquitetura e regras de negócio.

Objetivo do Projeto

O projeto foi criado para praticar desenvolvimento backend, arquitetura de APIs e implementação de mecanismos básicos de segurança.

A aplicação permite:

Cadastro de usuários

Autenticação utilizando JSON Web Token

Controle de permissões por usuário

Gerenciamento de livros em estoque

Sistema de empréstimo e devolução

Tecnologias Utilizadas

Node.js

Express.js

JSON Web Token

bcrypt

UUID

dotenv

Funcionalidades
Usuários

Cadastro de usuários

Login com autenticação JWT

Hash de senha para segurança

Livros

Cadastro de livros

Consulta de livros

Atualização de livros

Exclusão de livros

Controle de quantidade disponível

Empréstimos

Realização de empréstimos de livros

Devolução de livros

Verificação de disponibilidade

Controle de atraso na devolução

Arquitetura do Projeto

O projeto foi estruturado utilizando separação de responsabilidades:

Routes → definição dos endpoints

Controllers → regras HTTP e validação

Models → manipulação dos dados

Middleware → autenticação e tratamento de erros

Conceitos Aplicados

REST API

Middleware

Autenticação e autorização

Hash de senha

Tratamento de erros

Identificação única com UUID

Observação

Este projeto foi desenvolvido sem utilização de banco de dados, utilizando armazenamento em memória para fins de estudo.

Licença

Projeto desenvolvido para fins educacionais.
