// =============================================
//  CADASTRO DE ALUNOS — script.js
//  Gerenciamento de dados com localStorage
// =============================================

// ---------- ANO ATUAL NO RODAPÉ ----------
document.getElementById('ano').textContent = new Date().getFullYear();


// ---------- ELEMENTOS DO DOM ----------
const form = document.getElementById('formAluno');
const lista = document.getElementById('listaAlunos');
const totalAlunos = document.getElementById('totalAlunos');


// ---------- FUNÇÕES DE PERSISTÊNCIA ----------

/**
 * Busca todos os alunos armazenados no localStorage.
 * Se não houver dados, retorna um array vazio.
 * @returns {Array} Array de objetos com dados dos alunos
 */
function buscarAlunos() {
  const dados = localStorage.getItem('alunos');
  return dados ? JSON.parse(dados) : [];
}

/**
 * Salva a lista de alunos no localStorage.
 * Converte o array para JSON antes de armazenar.
 * @param {Array} alunos - Array de objetos com dados dos alunos
 */
function salvarAlunos(alunos) {
  localStorage.setItem('alunos', JSON.stringify(alunos));
}


// ---------- FUNÇÕES DE EXIBIÇÃO ----------

/**
 * Atualiza a contagem total de alunos na tela.
 */
function atualizarTotal() {
  const alunos = buscarAlunos();
  totalAlunos.textContent = alunos.length;
}

/**
 * Renderiza a lista de alunos na tela.
 * Se não houver alunos, exibe uma mensagem vazia.
 */
function listarAlunos() {
  const alunos = buscarAlunos();
  lista.innerHTML = '';

  if (alunos.length === 0) {
    lista.innerHTML = '<p class="empty-message">Nenhum aluno cadastrado ainda. Adicione um novo aluno acima.</p>';
    atualizarTotal();
    return;
  }

  alunos.forEach((aluno, index) => {
    const card = document.createElement('div');
    card.className = 'aluno-card';
    card.innerHTML = `
      <div class="aluno-info">
        <h3>${aluno.nome}</h3>
        <p><strong>Email:</strong> ${aluno.email}</p>
        <p><strong>Matrícula:</strong> ${aluno.matricula}</p>
      </div>
      <div class="aluno-actions">
        <button class="btn-delete" onclick="excluirAluno(${index})">Excluir</button>
      </div>
    `;
    lista.appendChild(card);
  });

  atualizarTotal();
}


// ---------- FUNÇÕES DE MANIPULAÇÃO ----------

/**
 * Adiciona um novo aluno à lista e salva no localStorage.
 * @param {string} nome - Nome do aluno
 * @param {string} email - Email do aluno
 * @param {string} matricula - Matrícula do aluno
 */
function adicionarAluno(nome, email, matricula) {
  const alunos = buscarAlunos();
  
  // Cria um objeto com os dados do novo aluno
  const novoAluno = {
    nome: nome,
    email: email,
    matricula: matricula,
    dataCadastro: new Date().toLocaleDateString('pt-BR')
  };

  // Adiciona o novo aluno ao array
  alunos.push(novoAluno);

  // Salva no localStorage
  salvarAlunos(alunos);
}

/**
 * Remove um aluno da lista pelo índice.
 * @param {number} index - Índice do aluno na lista
 */
function excluirAluno(index) {
  const alunos = buscarAlunos();
  
  // Confirma a exclusão
  if (confirm(`Tem certeza que deseja excluir o aluno "${alunos[index].nome}"?`)) {
    // Remove o aluno do array
    alunos.splice(index, 1);
    
    // Salva as alterações no localStorage
    salvarAlunos(alunos);
    
    // Atualiza a exibição
    listarAlunos();
  }
}


// ---------- EVENTOS ----------

/**
 * Evento de envio do formulário.
 * Valida os dados, adiciona o aluno e limpa o formulário.
 */
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Captura os valores dos campos
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const matricula = document.getElementById('matricula').value.trim();

  // Validação básica
  if (!nome || !email || !matricula) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  // Validação de email
  if (!validarEmail(email)) {
    alert('Por favor, insira um email válido!');
    return;
  }

  // Adiciona o novo aluno
  adicionarAluno(nome, email, matricula);

  // Limpa o formulário
  form.reset();

  // Atualiza a lista na tela
  listarAlunos();

  // Foca no primeiro campo
  document.getElementById('nome').focus();
});


// ---------- FUNÇÕES AUXILIARES ----------

/**
 * Valida o formato de um endereço de e-mail.
 * @param {string} email - Email a ser validado
 * @returns {boolean} True se o email é válido, false caso contrário
 */
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


// ---------- INICIALIZAÇÃO ----------

/**
 * Carrega a lista de alunos ao abrir a página.
 */
document.addEventListener('DOMContentLoaded', function () {
  listarAlunos();
});
