const allCards = document.querySelectorAll('.card-status');
const tableTitle = document.querySelector('.table-title');
const tableWrapper = document.querySelector('.table-section .table');

const cardTypesColors = {
  process: 'var(--blue-500)',
  ok: 'var(--green-500)',
  warning: 'var(--yellow-500)',
  total: 'var(--gray-700)',
};

let lastLoadedType = '';
function loadTableInfo(cardInfo) {
  const cardType = cardInfo.type;

  if (lastLoadedType === cardType) {
    return;
  }

  tableTitle.innerText = cardInfo.title;
  tableTitle.style.background = cardTypesColors[cardType];
  tableWrapper.style.border = `1.5px solid ${cardTypesColors[cardType]}`;

  lastLoadedType = cardType;
}

allCards.forEach((card) => {
  card.onclick = function () {
    loadTableInfo({
      type: card.dataset.type,
      title: card.dataset.title,
    });
  };
});

window.onload = function () {
  allCards[0].click();
};
