const imageCard = document.querySelector('.cardFront');
const infoCard = document.querySelector('.cardBack');
<<<<<<< HEAD
const btnBack = document.querySelector('.back');
const btnNext = document.querySelector('.next');

person = 0;
=======
const btnPrev = document.querySelector('.prevBtn');
const btnNext = document.querySelector('.nextBtn');
let person = 0;
let active = 9;

>>>>>>> 7999ad2887b8c9f57ddd99b05ffae0ced3ccce57

function createImage(arr) {
    const {src} = arr;
    return `<img src="../assets/images/${src}">`
};


<<<<<<< HEAD

function createContent(arr) {
        const {firstName, lastName, title, nationality, skills, whySofterDeveloper, longTermVision, motivatesMe, favoriteQuote} = arr;
        return `<h2>${firstName} ${lastName}</h2>
        <p>${title}</p>
        <p>${nationality}</p>
        <p>${skills.join(', ')}</p>
        <p>${whySofterDeveloper}</p>
        <p>${longTermVision}</p>
        <p>${motivatesMe}</p>
        <p>${favoriteQuote}</p>`;
    }


function showPerson(){
imageCard.innerHTML = createImage(peopleObject[person]);    
infoCard.innerHTML = createContent(peopleObject[person]);
}



btnNext.addEventListener ('click', function() 

{
person++
showPerson(person);  
    
 }, 
 false
);


btnBack.addEventListener ('click', function() 

{
person--
showPerson(person);  
    
 }, 
 false
);




=======
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
    newCard.id = i;
    let image = createImage(peopleObject[i]);
    let content = createContent(peopleObject[i]);
    newCard.innerHTML = `<div class="scene">
                        <section class="personCard">
                        <div class="card cardFront">${image}
                        <div class="name-box">${peopleObject[i].firstName}</div>
                        </div>
                        <div class="card cardBack">${content}</div>
                        </section>
                        </div>`;
    document.querySelector('.carousel').appendChild(newCard); 
    }
}


createCards();
addEventListener();
showActiveCards(active);



function showActiveCards(activeCard) {

    if (activeCard > -1 && activeCard < peopleObject.length) {

    let allCards = document.querySelectorAll('.carousel-cell');
    allCards.forEach(card => {
        card.className = '';
        card.classList.add('carousel-cell');
        card.classList.add('hidden');
    })

    if (activeCard >= 3) {
    let prevHiddenCard = document.getElementById(activeCard - 3);
    prevHiddenCard.classList.add('prevHidden');
    prevHiddenCard.classList.remove('hidden');
    }

    if (activeCard >= 2) {
    let prevSecondCard = document.getElementById(activeCard - 2);
    prevSecondCard.classList.add('prevSecond');
    prevSecondCard.classList.remove('hidden');
    }

    if (activeCard >= 1) {
    let prevCard = document.getElementById(activeCard - 1);
    prevCard.classList.add('prev');
    prevCard.classList.remove('hidden');
    }

    if (activeCard > -1) {
    let selectedCard = document.getElementById(activeCard);
    selectedCard.classList.add('selected');
    selectedCard.classList.remove('hidden');
    }

    let nextCard = document.getElementById(activeCard + 1);
    nextCard.classList.add('next');
    nextCard.classList.remove('hidden');

    let nextSecondCard = document.getElementById(activeCard + 2);
    nextSecondCard.classList.add('nextSecond');
    nextSecondCard.classList.remove('hidden');

    let nextHiddenCard = document.getElementById(activeCard + 3);
    nextHiddenCard.classList.add('nextHidden');
    nextHiddenCard.classList.remove('hidden');
} else if (activeCard < 0) {
    active = 0;
} else if (activeCard > peopleObject.length - 1) {
    active = peopleObject.length - 1;
}

}

btnNext.addEventListener('click', function() {
    active ++;
    showActiveCards(active);
})


btnPrev.addEventListener('click', function() {
    active --;
    showActiveCards(active);
})



function leftArrowPressed() {
    active --;
    showActiveCards(active);
}

function rightArrowPressed() {
    active ++;
    showActiveCards(active);
}

function enterKeyPressed() {
    
    let selectedCards = document.querySelectorAll('.personCard');
    selectedCards.forEach(card => {
        if (card.parentNode.parentNode.classList.contains('selected')) {
            card.classList.toggle('is-flipped');
        };
    });
}

document.onkeydown = function (evt) {
    evt = evt || window.event;
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 13:
            enterKeyPressed();
    }
};
>>>>>>> 7999ad2887b8c9f57ddd99b05ffae0ced3ccce57
