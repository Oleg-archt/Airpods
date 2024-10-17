const chooseColor = document.querySelectorAll(".choose__color-btn");
const contentItem = document.querySelectorAll(".content-item");

chooseColor.forEach(function (elem) {
  elem.addEventListener("click", open);
});

function open(event) {
  const target = event.currentTarget;
  const button = target.dataset.button;
  const contentActive = document.querySelectorAll(`.${button}`);

  chooseColor.forEach((item) => {
    item.classList.remove("choose-color__btn--active");
  });

  target.classList.add("choose-color__btn--active");

  contentItem.forEach((item) => {
    item.classList.remove("content-item__acitve");
  });

  contentActive.forEach((item) => {
    item.classList.add("content-item__acitve");
  });
}
