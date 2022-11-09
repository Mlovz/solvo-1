const openBtn = document.querySelector(".open_btn");
const modalOverlay = document.querySelector(".modal");
const modalBox = document.querySelector(".modal-box");

const closeBtn = document.querySelector(".btn-close");

function openModal() {
  modalOverlay.classList.add("active");
  modalBox.classList.add("active");
}

openBtn.addEventListener("click", openModal);

function closeModal(e) {
  e.preventDefault();
  modalOverlay.classList.remove("active");
  modalBox.classList.remove("active");
}

closeBtn.addEventListener("click", closeModal);
