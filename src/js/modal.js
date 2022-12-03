// Модальне вікно для замовлення столиків
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-table]"),
    closeModalBtn: document.querySelector("[data-modal-close-table]"),
    modal: document.querySelector("[data-modal-table]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

// Модальне вікно для бронювання номеру
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-room]"),
    closeModalBtn: document.querySelector("[data-modal-close-room]"),
    modal: document.querySelector("[data-modal-room]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

// Модальне вікно для ціни
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-price]"),
    closeModalBtn: document.querySelector("[data-modal-close-price]"),
    modal: document.querySelector("[data-modal-price]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();