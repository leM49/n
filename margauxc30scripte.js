const qualities = [
    "Ton sourire magnifique",
    "Ta gentillesse sans limite",
    "Ton intelligence brillante",
    "Ton sens de l'humour",
    "Ta douceur incomparable",
    "Ta générosité",
    "Ton écoute attentive",
    "Ton charme irrésistible",
    "Ton enthousiasme contagieux",
    "Ta créativité incroyable",
    "Ta patience",
    "Ton esprit aventureux",
    "Ta fidélité",
    "Ta confiance en toi",
    "Ton courage",
    "Ton élégance naturelle",
    "Ton énergie positive",
    "Ton honnêteté",
    "Ta capacité à aimer",
    "Ton sourire réconfortant",
    "Ta capacité à voir le meilleur en chacun",
    "Ton amour pour les petites choses",
    "Ta force intérieure",
    "Ton côté rêveur",
    "Ton sens des responsabilités",
    "Ta bienveillance",
    "Ta détermination",
    "Ton amour pour la vie",
    "Ta passion",
    "Ton authenticité"
];

const calendar = document.querySelector('.calendar');
const popup = document.getElementById('popup');

qualities.forEach((quality, index) => {
    const caseElement = document.createElement('div');
    caseElement.classList.add('case');
    
    const cover = document.createElement('div');
    cover.classList.add('cover');
    cover.textContent = index + 1;

    const qualityText = document.createElement('div');
    qualityText.classList.add('quality-text');
    qualityText.textContent = quality;

    caseElement.appendChild(cover);
    caseElement.appendChild(qualityText);

    caseElement.addEventListener('click', () => {
        caseElement.classList.add('show-text');
    });

    calendar.appendChild(caseElement);
});
