# 🛒 Lista de Compras API

API REST desenvolvida em Laravel para gerenciamento de listas de compras.
O sistema permite criar listas, adicionar produtos a cada lista e calcular automaticamente o valor total com base nos itens cadastrados.

## 🚀 Tecnologias Utilizadas

* PHP 8.2
* Laravel 12
* PostgreSQL
* Eloquent ORM
* API REST
* Insomnia (para testes)

## ⚙️ Instalação e Execução

Clone o repositório:

```bash
git clone https://github.com/douglasmf/lista-compras-api.git
cd lista-compras-api
```

Instale as dependências:

```bash
composer install
```

Crie o arquivo de ambiente:

```bash
cp .env.example .env
```

Configure as variáveis de ambiente do banco de dados no arquivo `.env`:

```env
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=lista_compras
DB_USERNAME=postgres
DB_PASSWORD=senha
```

Gere a chave da aplicação:

```bash
php artisan key:generate
```

Execute as migrations e seeders:

```bash
php artisan migrate:fresh --seed
```

Inicie o servidor:

```bash
php artisan serve
```

A API estará disponível em:

```
http://127.0.0.1:8000
```

---

## ☁️ Deploy

A API está hospedada utilizando:

* Render (backend)
* PostgreSQL (banco de dados)

URL base da API em produção:

```
https://lista-compras-fullstack-laravel-react.onrender.com
```

---

## 🗄️ Estrutura do Banco de Dados

### Tabela listas

| Campo       | Tipo      | Descrição                             |
| ----------- | --------- | ------------------------------------- |
| id          | bigint    | Identificador da lista                |
| nome        | string    | Nome da lista                         |
| valor_total | decimal   | Valor total calculado automaticamente |
| created_at  | timestamp | Data de criação                       |
| updated_at  | timestamp | Data de atualização                   |

### Tabela produtos

| Campo      | Tipo      | Descrição                  |
| ---------- | --------- | -------------------------- |
| id         | bigint    | Identificador do produto   |
| lista_id   | bigint    | Chave estrangeira da lista |
| nome       | string    | Nome do produto            |
| valor      | decimal   | Valor do produto           |
| created_at | timestamp | Data de criação            |
| updated_at | timestamp | Data de atualização        |

### Relacionamento

* Uma **Lista** possui vários **Produtos**
* Um **Produto** pertence a uma **Lista**

---

## 🧠 Arquitetura do Projeto

O projeto segue uma separação de responsabilidades para manter o código organizado e escalável.

**Controllers**

* Recebem as requisições HTTP
* Chamam as regras de negócio
* Retornam respostas da API

**Requests**

* Responsáveis pela validação dos dados recebidos

**Resources**

* Padronizam as respostas JSON da API

**Services**

* Centralizam regras de negócio
* Exemplo: recalcular o valor total da lista

**Models**

* Representam as tabelas do banco
* Definem relacionamentos entre entidades

Essa arquitetura melhora a manutenção, reutilização de código e organização do projeto.

---

## 🔗 Endpoints da API

### Listas

| Método | Endpoint            | Descrição              |
| ------ | ------------------- | ---------------------- |
| GET    | /api/listas         | Listar todas as listas |
| POST   | /api/listas         | Criar uma nova lista   |
| GET    | /api/listas/{lista} | Exibir uma lista       |
| PUT    | /api/listas/{lista} | Atualizar uma lista    |
| DELETE | /api/listas/{lista} | Remover uma lista      |

### Produtos

| Método | Endpoint                               | Descrição                |
| ------ | -------------------------------------- | ------------------------ |
| GET    | /api/listas/{lista}/produtos           | Listar produtos da lista |
| POST   | /api/listas/{lista}/produtos           | Criar produto            |
| GET    | /api/listas/{lista}/produtos/{produto} | Exibir produto           |
| PUT    | /api/listas/{lista}/produtos/{produto} | Atualizar produto        |
| DELETE | /api/listas/{lista}/produtos/{produto} | Remover produto          |

---

## 🧪 Testes

As requisições foram testadas utilizando o **Insomnia**, simulando operações completas de:

* criação
* leitura
* atualização
* exclusão

---

## 💡 Regras de Negócio

* Sempre que um produto é **criado**, **atualizado** ou **removido**, o valor total da lista é recalculado automaticamente
* Essa lógica fica centralizada no **ListaService**
* O valor total nunca é informado manualmente pela API

---

## 🎯 Objetivo do Projeto

Este projeto foi criado para demonstrar:

* Desenvolvimento de API REST com Laravel
* CRUD completo
* Relacionamento entre tabelas
* Organização de código em camadas
* Uso de Services para regras de negócio
* Integração com banco de dados PostgreSQL
* Deploy de API em ambiente cloud

---

## 👨‍💻 Autor

Douglas Monteiro
Desenvolvedor Front-end Júnior / Full Stack Júnior

Projeto desenvolvido para fins de estudo e portfólio.
