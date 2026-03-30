# 📚 Cadastro de Alunos com localStorage

Aplicação web para gerenciamento de alunos com persistência de dados usando **localStorage**, desenvolvida como atividade prática da disciplina de **Desenvolvimento Web**.

---

## 🎯 Objetivo

Revisar os conceitos de **JavaScript** e introduzir a ideia de **armazenamento de dados** (persistência), preparando para o estudo de **Banco de Dados**.

---

## ✅ Funcionalidades

| Recurso | Descrição |
|---|---|
| **Formulário de Cadastro** | Campos para Nome, Email e Matrícula do aluno |
| **Armazenamento com localStorage** | Dados persistem mesmo após fechar o navegador |
| **Listagem de Alunos** | Exibe todos os alunos cadastrados em cards |
| **Contador de Alunos** | Mostra o total de alunos cadastrados |
| **Exclusão de Alunos** | Remove um aluno da lista com confirmação |
| **Design Responsivo** | Funciona em desktop, tablet e mobile |
| **Validação de Dados** | Valida email e campos obrigatórios |

---

## 🗂️ Estrutura do Projeto

```
cadastro-alunos/
├── index.html   → Estrutura HTML da aplicação
├── style.css    → Estilização (Preto & Branco minimalista)
├── script.js    → Lógica JavaScript com localStorage
└── README.md    → Documentação do projeto
```

---

## 📖 O que é localStorage?

O **localStorage** é um recurso do navegador que permite **armazenar dados no formato chave–valor** de forma persistente.

### Características:

- ✅ Os dados **não são perdidos ao atualizar a página**
- ✅ Os dados ficam salvos **no navegador do usuário**
- ✅ Não há necessidade de banco de dados ou servidor
- ✅ Capacidade de armazenamento: ~5-10MB por domínio
- ⚠️ Os dados são **públicos** (qualquer script pode acessar)

### Importante:

O localStorage **não substitui um banco de dados**, mas ajuda a entender o conceito de **persistência de dados**, que será aprofundado no próximo semestre.

---

## 🔧 Como Usar

### 1. Abrir a Página

Abra o arquivo `index.html` em um navegador web.

### 2. Adicionar um Aluno

1. Preencha os campos: **Nome**, **Email** e **Matrícula**
2. Clique no botão **"Salvar Aluno"**
3. O aluno será adicionado à lista automaticamente

### 3. Visualizar Alunos

A lista de alunos é exibida abaixo do formulário com:
- Nome do aluno
- Email
- Matrícula
- Botão para excluir

### 4. Excluir um Aluno

Clique no botão **"Excluir"** do aluno desejado. Uma confirmação será solicitada.

### 5. Persistência de Dados

Atualize a página ou feche o navegador. Os dados serão mantidos!

---

## 💾 Conceitos de JavaScript Utilizados

### localStorage

```javascript
// Salvar dados
localStorage.setItem('chave', JSON.stringify(dados));

// Recuperar dados
const dados = JSON.parse(localStorage.getItem('chave'));

// Remover dados
localStorage.removeItem('chave');

// Limpar tudo
localStorage.clear();
```

### Manipulação do DOM

```javascript
// Selecionar elementos
const elemento = document.getElementById('id');

// Criar elementos
const div = document.createElement('div');

// Adicionar conteúdo
elemento.innerHTML = '<p>Conteúdo</p>';

// Adicionar evento
elemento.addEventListener('click', funcao);
```

### Array e Objetos

```javascript
// Criar objeto
const aluno = { nome: 'João', email: 'joao@email.com' };

// Array de objetos
const alunos = [{ nome: 'João' }, { nome: 'Maria' }];

// Adicionar ao array
alunos.push(novoAluno);

// Remover do array
alunos.splice(index, 1);

// Iterar sobre array
alunos.forEach((aluno, index) => { ... });
```

### JSON

```javascript
// Converter objeto para JSON (string)
const json = JSON.stringify(objeto);

// Converter JSON para objeto
const objeto = JSON.parse(json);
```

---

## 🚀 Como Publicar no GitHub Pages

### 1. Criar Repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Nome do repositório: `cadastro-alunos`
3. Deixe como **Public**
4. Clique em **Create repository**

### 2. Versionar com Git

No terminal, dentro da pasta do projeto:

```bash
# Inicializa o repositório
git init

# Adiciona todos os arquivos
git add .

# Cria o primeiro commit
git commit -m "feat: adiciona aplicação de cadastro de alunos com localStorage"

# Define a branch principal
git branch -M main

# Conecta ao repositório remoto (substitua SEU_USUARIO)
git remote add origin https://github.com/SEU_USUARIO/cadastro-alunos.git

# Envia para o GitHub
git push -u origin main
```

### 3. Ativar GitHub Pages

1. No repositório, clique em **Settings**
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione a branch `main` e pasta `/ (root)`
4. Clique em **Save**
5. Acesse: `https://SEU_USUARIO.github.io/cadastro-alunos/`

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Semântica e estrutura
- **CSS3** — Estilo minimalista (Preto & Branco)
- **JavaScript (ES6+)** — Lógica e manipulação do DOM
- **localStorage** — Persistência de dados
- **Git** — Controle de versão
- **GitHub Pages** — Hospedagem gratuita

---

## 📝 Licença

Projeto desenvolvido para fins educacionais.

---

## 👤 Autor

**Davi Muniz** — Atividade de Desenvolvimento Web
