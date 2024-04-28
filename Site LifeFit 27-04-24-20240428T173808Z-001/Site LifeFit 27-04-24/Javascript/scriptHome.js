
// Função para remover a classe 'active' de todos os botões e adicionar ao botão clicado
function setActiveButton(activeButtonId) {
    // Seleciona todos os botões dentro do container
    const buttons = document.querySelectorAll('#ButtonContainer button');
    
    // Remove a classe 'active' de todos os botões
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Adiciona a classe 'active' ao botão com o ID fornecido
    const activeButton = document.getElementById(activeButtonId);
    if (activeButton) {
      activeButton.classList.add('active');
    }
  }
  
  // Adiciona um event listener a cada botão
  document.querySelectorAll('#ButtonContainer button').forEach(button => {
    button.addEventListener('click', () => setActiveButton(button.id));
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o elemento do botão de login
    var loginButton = document.getElementById('LoginButton');

    // Adiciona um event listener para o evento de clique
    loginButton.addEventListener('click', function(event) {
        // Evita o comportamento padrão do link
        event.preventDefault();

       
    });
})

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || currentScrollPos <= 0) {
    document.getElementById("mainHeader").style.visibility = "visible";
    document.getElementById("mainHeader").style.opacity = "1";
     // Remove a cor de fundo azul
  } else {
    document.getElementById("mainHeader").style.visibility = "hidden";
    document.getElementById("mainHeader").style.opacity = "0";
    
  }
  prevScrollpos = currentScrollPos;
};

