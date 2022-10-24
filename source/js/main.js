// ОТОБРАЖЕНИЕ БЛОКА С ПОИСКОМ

document.addEventListener('DOMContentLoaded', () => {

  const buttonSearch = document.querySelector('.main-nav__item--button-search');
  const blockSearch = document.querySelector('.introduction__search-wrapper');
  const inputSearch = blockSearch.querySelector('.introduction__search-input');


  buttonSearch.addEventListener('click', () => {
    blockSearch.classList.toggle('visually-hidden');
    if (!blockSearch.classList.contains('visually-hidden')) {
        inputSearch.value = '';
    }
  });

  document.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.introduction__search-wrapper') && !target.closest('.main-nav__item--button-search')) {
      blockSearch.classList.add('visually-hidden');
      inputSearch.value = '';
    }
  });

  document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (!blockSearch.classList.contains('visually-hidden')) {
        if (evt.key === "Escape" || evt.key === "Esc") {
          blockSearch.classList.add('visually-hidden');
          inputSearch.value = '';
        }
      }
  };

});

