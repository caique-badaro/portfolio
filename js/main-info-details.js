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

// Adicionando evento de clique ao overlay para fechar o popup
document.getElementById('overlay').addEventListener('click', function() {
    closePopup('popup-heatmap-view-1');
    closePopup('popup-heatmap-view-2');
    closePopup('popup-heatmap-view-3');
});