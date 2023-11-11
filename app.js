let cardArray = [
    {name: '1', img: '😀'},
    {name: '1', img: '😀'},
    {name: '2', img: '😁'},
    {name: '2', img: '😁'},
    {name: '3', img: '😂'},
    {name: '3', img: '😂'},
    {name: '4', img: '😎'},
    {name: '4', img: '😎'},
    //... and so on
];

let cardGrid = document.getElementById('card-grid');
let cardsInPlay = [];

function createBoard() {
    cardArray.sort(() => 0.5 - Math.random());
}
function createCard(card) {
    let cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.name = card.name;
    cardElement.innerHTML = card.img;

    cardElement.addEventListener('click', function() {
        if (cardsInPlay.length < 2) {
            this.classList.add('flipped');
            cardsInPlay.push(card);
        }

        if (cardsInPlay.length === 2) {
            if (cardsInPlay[0].name === cardsInPlay[1].name) {
                cardsInPlay = [];
            } else {
                setTimeout(() => {
                    cardsInPlay.forEach(card => {
                        let cardElement = cardGrid.querySelector(`[data-name='${card.name}']`);
                        cardElement.classList.remove('flipped');
                    });
                    cardsInPlay = [];
                }, 1000);
            }
        }
    });

    return cardElement;
}

function createBoard() {
    cardArray.sort(() => 0.5 - Math.random());

    cardArray.forEach(card => {
        let cardElement = createCard(card);
        cardGrid.appendChild(cardElement);
    });
}

createBoard();

// function createCard(card) {
//     let cardElement = document.createElement('div');
//     cardElement.classList.add('card');
//     cardElement.dataset.name = card.name;
//     cardElement.innerHTML = card.name;

//     cardElement.addEventListener('click', function() {
//         if (cardsInPlay.length < 2) {
//             this.classList.add('flipped');
//             cardsInPlay.push(card);
//         }

//         if (cardsInPlay.length === 2) {
//             if (cardsInPlay[0].name === cardsInPlay[1].name) {
//                 cardsInPlay = [];
//             } else {
//                 setTimeout(() => {
//                     cardsInPlay.forEach(card => {
//                         let cardElement = cardGrid.querySelector(`[data-name='${card.name}']`);
//                         cardElement.classList.remove('flipped');
//                     });
//                     cardsInPlay = [];
//                 }, 1000);
//             }
//         }
//     });

//     return cardElement;