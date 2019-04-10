const imageCard = document.querySelector('.cardFront');
const infoCard = document.querySelector('.cardBack');
const btnBack = document.querySelector('.back');
const btnNext = document.querySelector('.next');
let person = 0;


function createImage(arr) {
    const {src} = arr;
    return `<img src="../assets/images/${src}">`
};


function createContent(arr) {
    const {firstName, lastName, title, nationality, skills, whySofterDeveloper, longTermVision, motivatesMe, favoriteQuote} = arr;
    return `<h1>${firstName} ${lastName}</h1>
    <p>${title}</p>
    <p><span>Nationality:</span></br>${nationality}</p>
    <p><span>Skills:</span></br> ${skills.join(', ')}</p>
    <p><span>Why do you want to be a software developer?</span><br/>${whySofterDeveloper}</p>
    <p><span>What is your Vision?</span><br/>${longTermVision}</p>
    <p><span>What motivates you?</span><br/>${motivatesMe}</p>
    <p><span>What is your favorite quote?</span><br/>${favoriteQuote}</p>`;
}


function addEventListener() {

    const cards = document.querySelectorAll('.personCard');
    cards.forEach(function(card){
    card.addEventListener('click', e => {
        card.classList.toggle('is-flipped');
    });
});
}


function createCards() {
    for (let i = 0; i < peopleObject.length; i++) {
    let newCard = document.createElement('div');
    newCard.className = 'carousel-cell';
    let image = createImage(peopleObject[i]);
    let content = createContent(peopleObject[i]);
    newCard.innerHTML = `<div class="scene">
                        <section class="personCard">
                        <div class="card cardFront">${image}</div>
                        <div class="card cardBack">${content}</div>
                        </section>
                        </div>`;
    document.querySelector('.carousel').appendChild(newCard); 
    }
}



function createCarouselCells() {

}

createCards();
addEventListener();
