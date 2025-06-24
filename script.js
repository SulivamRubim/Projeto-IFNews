// ==== Carrossel de Depoimentos ====
(function(){
  const depoimentoEl = document.getElementById("depoimento");
  if (!depoimentoEl) return;

  const depoimentos = [
    { 
      texto: "Estudar no IFSul foi uma experiência transformadora. Os professores são altamente qualificados e a infraestrutura é excelente.", 
      autor: "Priscilla & João", 
      foto: "https://randomuser.me/api/portraits/women/32.jpg" 
    },
    { 
      texto: "Os projetos de pesquisa do IFSul abriram portas incríveis para minha carreira. Aprendi na prática o que só via na teoria.", 
      autor: "Marcos Silva", 
      foto: "https://randomuser.me/api/portraits/men/45.jpg" 
    },
    { 
      texto: "A comunidade acadêmica do IFSul é acolhedora e diversa. Fazer parte dessa instituição mudou minha perspectiva de futuro.", 
      autor: "Ana Clara", 
      foto: "https://randomuser.me/api/portraits/women/68.jpg" 
    }
  ];

  let index = 0;
  const autorEl = document.getElementById("autor-nome");
  const fotoEl = document.getElementById("foto-depoimento");
  const bolinhas = document.querySelectorAll(".bolinha");

  function atualizarDepoimento(i) {
    index = i;
    depoimentoEl.textContent = depoimentos[index].texto;
    autorEl.textContent = depoimentos[index].autor;
    fotoEl.src = depoimentos[index].foto;
    bolinhas.forEach((b, idx) => b.classList.toggle("active", idx === index));
  }

  bolinhas.forEach((b, i) => b.addEventListener("click", () => atualizarDepoimento(i)));
  setInterval(() => atualizarDepoimento((index + 1) % depoimentos.length), 5000);
})();

// ==== Contador de Dias para o Processo Seletivo ====
(function(){
  const contadorEl = document.getElementById("contador-dias");
  if (!contadorEl) return;

  const dataProcessoSeletivo = new Date("2025-12-10");
  const hoje = new Date();
  const diffMs = dataProcessoSeletivo - hoje;
  const diasFaltando = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  contadorEl.textContent = diasFaltando;
})();

// ==== Carrossel de Imagens da Notícia ====
(function(){
  const imagemPrincipal = document.getElementById("imagem-principal");
  if (!imagemPrincipal) return;
  window.trocarImagem = function(src) {
    imagemPrincipal.src = src;
  };
})();
