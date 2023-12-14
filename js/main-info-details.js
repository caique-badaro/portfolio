// Ocultar e exibir menu desktop primeira quebra de página
// Seleciona os elementos da DOM
const superBannerProjects = document.querySelector('.super-banner-projects');
const navbarProjects = document.querySelector('.navbar');

// Define as opções para o Intersection Observer
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1 // 10% visível
};

// Cria o Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Quando a super-banner estiver visível, oculta a navbar
      navbarProjects.style.display = 'none';
    } else {
      // Quando a super-banner não estiver visível, restaura a navbar para o estado original
      navbarProjects.style.display = '';
    }
  });
}, options);

// Observa a super-banner
observer.observe(superBannerProjects);
// Fim do script

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// âncoras de scroll nos componentes do site
// Função para realizar o scroll suave para um elemento com o ID especificado
function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    window.scrollTo({
      behavior: 'smooth',
      top: element.offsetTop
    });
  }
}

// Adiciona um evento de clique a qualquer elemento com um ID específico para fazer o scroll
function addSmoothScrollListener(elementId, scrollToId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.addEventListener('click', () => {
      scrollToElement(scrollToId);
    });
  }
}

// Scroll ao clicar no elemento
addSmoothScrollListener('timeline-steps--analise', 'section--hotjar-analytics');
addSmoothScrollListener('timeline-steps--pesquisa', 'section--matriz-csd');
addSmoothScrollListener('timeline-steps--benchmarking', 'section--benchmarking');
addSmoothScrollListener('timeline-steps--project-home-ap-ago22', 'section--project-home-ap-ago22');
addSmoothScrollListener('timeline-steps--results-home-ap-ago22', 'section--results-home-ap-ago22');
addSmoothScrollListener('btn--footer-back-top', 'super-banner--home-ap-ago-22');






// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Função para exibir popup
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    const overlay = document.getElementById('overlay');

    // Exibe o overlay
    overlay.style.display = 'block';

    // Exibe o popup
    popup.style.display = 'block';
}

// Função para fechar popup
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    const overlay = document.getElementById('overlay');

    // Oculta o overlay
    overlay.style.display = 'none';

    // Oculta o popup
    popup.style.display = 'none';
}

// Adicionando evento de clique aos heatmap cards
document.getElementById('heatmap-card--order-1').addEventListener('click', function() {
    openPopup('popup-heatmap-view-1');
});

document.getElementById('heatmap-card--order-2').addEventListener('click', function() {
    openPopup('popup-heatmap-view-2');
});

document.getElementById('heatmap-card--order-3').addEventListener('click', function() {
    openPopup('popup-heatmap-view-3');
});

document.getElementById('matriz-card--order-1').addEventListener('click', function() {
    openPopup('popup-matriz-view-1');
});

document.getElementById('matriz-card--order-2').addEventListener('click', function() {
    openPopup('popup-matriz-view-2');
});

document.getElementById('matriz-card--order-3').addEventListener('click', function() {
    openPopup('popup-matriz-view-3');
});

// Adicionando evento de clique ao overlay para fechar o popup
document.getElementById('overlay').addEventListener('click', function() {
    closePopup('popup-heatmap-view-1');
    closePopup('popup-heatmap-view-2');
    closePopup('popup-heatmap-view-3');
    closePopup('popup-matriz-view-1');
    closePopup('popup-matriz-view-2');
    closePopup('popup-matriz-view-3');
});


// FAQ Projeto >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Adiciona evento de clique a todas as divs com a classe faq-default
const faqDefault = document.querySelectorAll('.faq-default');

faqDefault.forEach((faq) => {
  faq.addEventListener('click', () => {
    // Alterna as classes faq-default e faq-open
    faq.classList.toggle('faq-default');
    faq.classList.toggle('faq-open');
  });
});

// Adiciona evento de clique a todas as divs com a classe faq-open
const faqOpen = document.querySelectorAll('.faq-open');

faqOpen.forEach((faq) => {
  faq.addEventListener('click', () => {
    // Alterna as classes faq-default e faq-open
    faq.classList.toggle('faq-default');
    faq.classList.toggle('faq-open');
  });
});
