const imageCard = document.querySelector('.cardFront');
const infoCard = document.querySelector('.cardBack');
const btnBack = document.querySelector('.back');
const btnNext = document.querySelector('.next');

person = 0;

function createImage(arr) {
    const {src} = arr;
    return `<img src="../assets/images/${src}">`
};



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




