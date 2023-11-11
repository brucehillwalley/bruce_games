
const emojis = ['😀', '😂', '😍', '🤔', '🤯', '🥳', '🤩', '😎', '😀', '😂', '😍', '🤔', '🤯', '🥳', '🤩', '😎'];
let cards = [];
let flippedCards = [];
let matchedCards = [];
let isFlipped = false;
let firstCard, secondCard;

function startGame() {
  cards = emojis.slice();
  dizi.sort(() => Math.random() - 0.5);

  const cardsContainer = document.getElementById('cards');
  cardsContainer.innerHTML = '';

  for (let i = 0; i < cards.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-index', i);
    card.textContent = cards[i];
    card.addEventListener('click', flipCard);
    cardsContainer.appendChild(card);
  }

  setTimeout(() => {
    const allCards = document.querySelectorAll('.card');
    for (let card of allCards) {
      card.textContent = '';
    }
  }, 10000);
}

function flipCard() {
  if (flippedCards.length < 2 && !matchedCards.includes(this.getAttribute('data-index'))) {
    const cardIndex = this.getAttribute('data-index');
    this.textContent = cards[cardIndex];

    flippedCards.push(this);

    if (flippedCards.length === 2) {
      checkMatch();
    }
  }
}

function checkMatch() {
  if (flippedCards[0].textContent === flippedCards[1].textContent) {
    matchedCards.push(
      Number(flippedCards[0].getAttribute('data-index')),
      Number(flippedCards[1].getAttribute('data-index'))
    );
    flippedCards = [];

    if (matchedCards.length === cards.length) {
      alert('Congratulations! You won!');
    }
  } else {
    setTimeout(() => {
      flippedCards[0].textContent = '';
      flippedCards[1].textContent = '';
      flippedCards = [];
    }, 1000);
  }
}
