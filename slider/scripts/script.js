document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth
  if (width < 767){
    const slider = new Swiper()
  }
})

// initializing swiper
new Swiper('.swiper-container', {

  pagination: {
    el: '.swiper-pagination',
  },

});

// раскрытие/закрытие slider при разных разрешениях
var button = document.querySelector(".slider__dropdown");
var cards = document.getElementsByClassName("slider__card");
// c массивом arr работает как функция resize, так и с анонимная функция внутри eventlistener,
// поэтому она не const 
let arr = [];

var changeButton = function () {
  if (button.innerHTML === "Показать все") {
    button.innerHTML = "Скрыть";
  } else {
    button.innerHTML = "Показать все";
  }

  button.classList.toggle('slider__dropdown--active');
};

let resize = function () {
  let param = 6;
  let selector = 'slider__card--hidden768'; 

  if (window.matchMedia('(min-width: 1120px)').matches) {
    selector = 'slider__card--hidden1120';
    param = 8;
  }

  arr.push(param, selector)
  return arr;
};

button.addEventListener('click', function () {
  resize();
  for (var i = arr[0]; i < cards.length; i++) {
    cards[i].classList.toggle(arr[1]);
  }
  arr.length = 0;
  changeButton(button.innerHTML);
});