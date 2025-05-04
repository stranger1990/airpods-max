const chooseColor = document.querySelectorAll(".choose-color__btn"); /* Находим кнопки, на которые нужно нажимать */
const contentItem = document.querySelectorAll(".content-item"); /* Находим контент, который должен меняться */

/* Проходимся циклом forEach, чтобы отслеживать событие клика */
chooseColor.forEach(function (element) {
  element.addEventListener("click", open)
});

/* При нажатии на элемент нужно, чтобы к нему добавлялся класс "active" и исчезал */
function open(evt) {
  const target =  evt.currentTarget; /* Метод currentTarget - чтобы понимать, по чему нажимаем */
  const button = target.dataset.button; /* Выцепляем дата-атрибут (data-button) */
  const contentActive = document.querySelectorAll(`.${button}`);

  chooseColor.forEach(function (item) {
    item.classList.remove("choose-color__btn--active");
  }); /* Проходимся циклом forEach, удаляем у всех эл-тов класс "active" */

  target.classList.add("choose-color__btn--active");

  /* Удаляем у всех эл-тов класс "active", добавляем только тем, к-ые находятся в дата-атрибуте */
   contentItem.forEach(function (item) {
    item.classList.remove("content-item__active");
   });

   contentActive.forEach(function (item) {
     item.classList.add("content-item__active");
   });


}