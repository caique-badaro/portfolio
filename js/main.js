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
  { buttonId: 'btn--botton-bar--analitycs-project', sectionId:'section--hotjar-analytics'},
  { buttonId: 'btn--botton-bar--results-project', sectionId:'section--results-home-ap-ago22'},
  { buttonId: 'btn--bottom-bar--faq-projects', sectionId:'faq-project-home-ap22'},
  // NavBar
  { buttonId: 'btn--navbar--post', sectionId: 'secao--publicacoes-home' },
  { buttonId: 'btn--navbar--projetos', sectionId: 'secao--projetos-home' },
  { buttonId: 'btn--navbar--experiencias', sectionId: 'secao--experiencias-home' },
  { buttonId: 'btn--navbar--contato', sectionId: 'secao--contato-home' },
  { buttonId: 'btn--navbar--academico', sectionId: 'secao--academico-home' },
  { buttonId: 'btn--footer-back-top', sectionId: 'secao--super-banner-home' },
  { buttonId: 'btn--navbar--analitycs-project', sectionId: 'section--hotjar-analytics' },
  { buttonId: 'btn--navbar--results-project', sectionId: 'section--results-home-ap-ago22' },
  { buttonId: 'btn--navbar--faq-projects', sectionId: 'faq-project-home-ap22' },
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
    window.onload = function() {
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



// Start - Script Formulário página Home

//   var url = 'https://script.google.com/macros/s/AKfycbxPi9hnp6P-cBKz86fJm6_KEutGXRvnGTDsBd9zVyk/exec';


//   function enviarFormulario() {
//     var emailInput = document.getElementById("mailHomeForm").value;
//     var emailAlert = document.getElementById("emailAlert");
//     var btnContato = document.getElementById("btn-contato-form");
//     var mensagemFeedback = document.getElementById("mensagemFeedback");

//     // Desabilitar o botão se o e-mail estiver vazio ou incorreto
//     if (emailInput === "" || !validarEmail(emailInput)) {
//       emailAlert.innerText = "E-mail inválido, revise os dados e tente novamente";
//       mensagemFeedback.innerText = ""; // Limpar a mensagem de feedback
//       return;
//     }

//     // Limpar o alerta e a mensagem de feedback se o e-mail estiver correto
//     emailAlert.innerText = "";
//     mensagemFeedback.innerText = "";

//     // Alterar classe e desabilitar o botão
//     btnContato.classList.remove("btn-primary");
//     btnContato.classList.add("btn-primary-disabled");
//     btnContato.disabled = true;

//     // Enviar os dados para o script do Google Apps
//     google.script.run.withSuccessHandler(function(response) {
//       // Exibe a mensagem de feedback abaixo do botão em caso de sucesso
//       mensagemFeedback.innerText = response;
//       // Reativar o botão
//       btnContato.classList.remove("btn-primary-disabled");
//       btnContato.classList.add("btn-primary");
//       btnContato.disabled = false;
//     }).withFailureHandler(function(error) {
//       // Exibe a mensagem de feedback abaixo do botão em caso de falha
//       mensagemFeedback.innerText = error;
//       // Reativar o botão
//       btnContato.classList.remove("btn-primary-disabled");
//       btnContato.classList.add("btn-primary");
//       btnContato.disabled = false;
//     }).doPost({ mailHomeForm: emailInput });
//   }

//   function validarEmail(email) {
//     // Adicione a mesma lógica de validação de e-mail usada no script do Google Apps
//     var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   }

//   function validarEmailNoInput() {
//   var emailInput = document.getElementById("mailHomeForm").value;
//   var emailAlert = document.getElementById("emailAlert");
//   var btnContato = document.getElementById("btn-contato-form");
//   var mensagemFeedback = document.getElementById("mensagemFeedback");

//   // Desabilitar o botão se o e-mail estiver vazio ou incorreto
//   if (emailInput === "" || !validarEmail(emailInput)) {
//     emailAlert.innerText = ""; // Limpar o alerta se o e-mail estiver incorreto ou vazio
//     btnContato.classList.remove("btn-primary");
//     btnContato.classList.add("btn-primary-disabled");
//     btnContato.disabled = true;
//     mensagemFeedback.innerText = ""; // Limpar a mensagem de feedback
//   } else {
//     emailAlert.innerText = "Tudo certo, e-mail válido";
//     btnContato.classList.remove("btn-primary-disabled");
//     btnContato.classList.add("btn-primary");
//     btnContato.disabled = false; // Reativar o botão se o e-mail estiver correto
//   }
// }

//   function validarEmailNoBlur() {
//     var emailInput = document.getElementById("mailHomeForm").value;
//     var emailAlert = document.getElementById("emailAlert");

//     // Exibir feedback de preenchimento correto ao sair do campo de e-mail
//     if (emailInput !== "") {
//       if (validarEmail(emailInput)) {
//         emailAlert.innerText = "Tudo certo, e-mail válido";
//       } else {
//         emailAlert.innerText = "E-mail inválido, revise os dados e tente novamente";
//       }
//     } else {
//       emailAlert.innerText = ""; // Limpar o alerta se o e-mail estiver vazio
//     }
//   }
// Fim - Script Formulário página Home

      