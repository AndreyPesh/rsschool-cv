window.onload = function() {
  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const navigationListHeader = document.querySelector('.navigation__header')
  body.addEventListener('click', e => {
    const isBurger = e.target == burger || e.target.parentElement == burger
    const widthDevice = window.innerWidth
    if (!burger.classList.contains('active') && isBurger  && widthDevice <= 768) {
      navigationListHeader.classList.add('active')
      burger.classList.add('active')
      body.classList.add('lock')
    } else if (burger.classList.contains('active')) {
        navigationListHeader.classList.remove('active')
        burger.classList.remove('active')
        body.classList.remove('lock')
    }
  })
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && body.classList.contains('lock')) {
      body.classList.remove('lock')
    }
    if (burger.classList.contains('active')) {
      burger.classList.remove('active')
    }
    if (navigationListHeader.classList.contains('active')) {
      navigationListHeader.classList.remove('active')
    }
  })
  console.log(`Самооценка:
    - вёрстка валидная +10
        Для проверки валидности вёрстки используйте сервис https://validator.w3.org/
        Надпись "Document checking completed. No errors or warnings to show." +10
    - вёрстка семантическая +20
        В коде страницы присутствуют семантические теги HTML5, например, article, aside, figure, figcaption, footer, header, main, nav, section, используются заголовки h1-h6. Заголовок h1 может быть только один.
        2 балла за каждый уникальный семантический тег HTML5 и за каждый уникальный заголовок h1-h6, но не больше 20 баллов
    - для оформления СV используются css-стили +10
        1 балл за каждый стилизованный элемент, но не больше 10 баллов
    - контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10
    - вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10
    - есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. +10
    - на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10
    - контакты для связи и перечень навыков оформлены в виде списка ul > li +10
    - CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10
    - CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода.  +10
    - CV выполнено на английском языке +10
    - выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10
    - дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) +10

    ---- Итого: 140 -----
  `)
}
