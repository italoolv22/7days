const listaTecnologias = document.querySelector('.lista-tecnologias');
const adicionarTecnologiaButton = document.querySelector('.bt');
const verRespostasButton = document.querySelector('.bt');

function adicionarTecnologia() {
  const tecnologia = prompt('Digite o nome da tecnologia:');
  if (tecnologia) {
    const li = document.createElement('li');
    li.textContent = tecnologia;
    listaTecnologias.appendChild(li);
  }
}

function redirecionar() {
  const respostas = {
    areaAtuacao: areaAtuacao,
    tecnologias: Array.from(listaTecnologias.children).map((li) => li.textContent),
  };

  // Redirecionar para a página de respostas
  const queryString = new URLSearchParams(respostas).toString();
  const url = `pagina-de-respostas.html?${queryString}`;
  window.location.href = url;
}
