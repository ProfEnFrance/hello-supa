document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const factorialForm = document.getElementById('factorial-form');
    const numberInput = document.getElementById('number');
    const resultP = document.getElementById('result');

    const restartBtn = document.getElementById('restart-btn');
    const quitBtn = document.getElementById('quit-btn');
    const mainContent = document.getElementById('main-content');
    const quitMessage = document.getElementById('quit-message');

    // 1. Gestion du thème
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Mettre à jour le texte du bouton
        if (body.classList.contains('dark-mode')) {
            themeToggle.textContent = 'Mode Clair';
        } else {
            themeToggle.textContent = 'Mode Sombre';
        }
    });

    // 2. Calcul de la factorielle
    factorialForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const number = numberInput.value;
        resultP.textContent = 'Calcul en cours...';

        fetch('/calculer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ number: number }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.erreur) {
                resultP.textContent = `Erreur : ${data.erreur}`;
            } else {
                resultP.textContent = data.resultat;
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
            resultP.textContent = 'Une erreur est survenue lors de la communication avec le serveur.';
        });
    });

    // 3. Bouton Recommencer
    restartBtn.addEventListener('click', () => {
        numberInput.value = '';
        resultP.textContent = '';
        // S'assurer que le contenu principal est visible
        mainContent.style.display = 'block';
        quitMessage.style.display = 'none';
    });

    // 4. Bouton Quitter
    quitBtn.addEventListener('click', () => {
        mainContent.style.display = 'none';
        quitMessage.style.display = 'block';
    });
});
