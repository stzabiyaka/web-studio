(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', onCloseModal);

  function onCloseModal(event) {
    if (
      event.target === event.currentTarget ||
      event.target === refs.closeModalBtn ||
      event.target.parentElement === refs.closeModalBtn ||
      event.target.parentElement.parentElement === refs.closeModalBtn
    ) {
      toggleModal();
    }
  }

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
