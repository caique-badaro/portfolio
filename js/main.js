// // Esilização bottom bar
const columns = document.querySelectorAll('.bottom-bar--col');
const menuButton = document.getElementById('menuButton');
const menuCol = document.getElementById('menuCol');
const contatoButton = document.getElementById('contatoButton'); // Adicione esta linha
const contatoCol = document.getElementById('contatoCol'); // Adicione esta linha

function handleColumnClick(event) {
    columns.forEach(column => {
        column.classList.remove('bottom-bar--col-active');
    });

    event.currentTarget.classList.add('bottom-bar--col-active');

    if (event.currentTarget === menuCol) {
        openPopup();
    }
}

columns.forEach(column => {
    column.addEventListener('click', handleColumnClick);
});

function openPopup() {
    popup.style.display = 'flex';
}

function closePopup() {
    popup.style.display = 'none';
    menuCol.classList.remove('bottom-bar--col-active');
}

const closeButton = document.getElementById('closeButton');
closeButton.addEventListener('click', closePopup);

// Abrir popup ao clicar no botão de contato na coluna de contato
const popupContato = document.getElementById('popup--contato--bottom-bar');
const closeButtonContato = document.getElementById('closeButtonContato');

if (contatoButton && contatoCol && popupContato && closeButtonContato) {
    contatoButton.addEventListener('click', () => {
        popupContato.style.display = 'flex';
        contatoCol.classList.remove('bottom-bar--col-active'); // Remova a classe quando abrir o popup
    });

    closeButtonContato.addEventListener('click', () => {
        popupContato.style.display = 'none';
        contatoCol.classList.remove('bottom-bar--col-active'); // Remova a classe quando fechar o popup
    });
}

const sections = [
  // Bottom bar
  { buttonId: 'btn--botton-bar--post', sectionId: 'secao--publicacoes-home' },
  { buttonId: 'btn--botton-bar--projetos', sectionId: 'secao--projetos-home' },
  // NavBar
  { buttonId: 'btn--navbar--post', sectionId: 'secao--publicacoes-home' },
  { buttonId: 'btn--navbar--projetos', sectionId: 'secao--projetos-home' },
  { buttonId: 'btn--navbar--experiencias', sectionId: 'secao--experiencias-home' },
  { buttonId: 'btn--navbar--contato', sectionId: 'secao--contato-home' },
  { buttonId: 'btn--navbar--academico', sectionId: 'secao--academico-home' },
  { buttonId: 'btn--footer-back-top', sectionId: 'secao--super-banner-home' },
  // Popup
  { buttonId: 'btn-popup--curriculo', sectionId: 'secao--experiencias-home'},
  { buttonId: 'btn-popup--academico', sectionId: 'secao--academico-home'},
  // Rodapé
  { buttonId: 'btn-footer--projetos', sectionId:'secao--projetos-home'},
  { buttonId: 'btn-footer--posts', sectionId:'secao--publicacoes-home'},
  { buttonId: 'btn-footer--curriculo', sectionId:'secao--experiencias-home'},
  { buttonId: 'btn-footer--academico', sectionId:'secao--academico-home'},
  { buttonId: 'btn-footer--contato', sectionId:'secao--contato-home'}
];

sections.forEach(item => {
  const button = document.getElementById(item.buttonId);
  const section = document.getElementById(item.sectionId);

  if (button && section) {
    button.addEventListener('click', () => {
      section.scrollIntoView({ behavior: 'smooth' });

      // Aguarde um pouco para permitir o scroll acontecer antes de fechar o popup
      setTimeout(() => {
        const closeButton = document.getElementById('closeButton');
        if (closeButton) {
          closeButton.click();
        }
      }, 800); // Ajuste o tempo conforme necessário
    });
  }
});// Scroll página

// Seleciona os elementos da DOM
    const superBanner = document.querySelector('.super-banner');
    const navbarLeft = document.querySelector('.navbar-left');
    const navbar = document.querySelector('.navbar');

      // Adiciona o evento de mouseover na super-banner
      superBanner.addEventListener('mouseover', () => {
        // Altera a opacidade da navbar-left para 0%
        navbarLeft.style.opacity = '0';

        // Altera o background-color da navbar para 0% de opacidade
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0)';
      });

      // Adiciona o evento de mouseout na super-banner
      superBanner.addEventListener('mouseout', () => {
        // Restaura a opacidade da navbar-left para o estado original
        navbarLeft.style.opacity = '';

        // Restaura o background-color da navbar para o estado original
        navbar.style.backgroundColor = '';
      });
// Fim do script.



// Bloco de conteúdo dinâmico
    indow.onload = function() {
      exibirConteudo(document.getElementById("botao1"));
    };

    function exibirConteudo(botao) {
      var botoes = document.querySelectorAll('.botao');
      var conteudos = document.querySelectorAll('.conteudo');

      for (var i = 0; i < botoes.length; i++) {
        botoes[i].classList.remove('botao-ativo');
      }

      botao.classList.add('botao-ativo');

      for (var i = 0; i < conteudos.length; i++) {
        conteudos[i].classList.remove('visivel');
        if (conteudos[i].id === botao.dataset.target) {
          conteudos[i].classList.add('visivel');
        }
      }
    }

    // Parte 2 - Tab selector efeito trocar estilo
        window.onload = function() {
        var botoes = document.querySelectorAll('.botao');
        var conteudos = document.querySelectorAll('.conteudo');

        for (var i = 0; i < botoes.length; i++) {
          botoes[i].addEventListener('click', function() {
            for (var j = 0; j < botoes.length; j++) {
              botoes[j].classList.remove('botao-ativo');
            }
            this.classList.add('botao-ativo');
          });
        }
      };   
// Fim do script.

// Start - Enviar formulário contato

  function submitForm() {
  const nome = document.getElementById('nameFormCBport').value;
  const email = document.getElementById('mailFormCBport').value;

  // Verificar se o e-mail é válido antes de enviar
  if (!isValidEmail(email)) {
    document.getElementById('errorText').style.display = 'block';
    document.getElementById('successMessage').style.display = 'none';
    return;
  } else {
    document.getElementById('errorText').style.display = 'none';
  }

  // Enviar os dados para o Google Apps Script
  google.script.run.withSuccessHandler(alertSuccess).withFailureHandler(alertError).salvarDados(nome, email);
}

function alertSuccess(response) {
  document.getElementById('successMessage').style.display = 'block';
  document.getElementById('errorText').style.display = 'none';
}

function alertError(error) {
  alert('Erro ao enviar dados: ' + error.message);
}

function isValidEmail(email) {
  // Expressão regular para validar o formato de e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
// End - Enviar formulário contato


      