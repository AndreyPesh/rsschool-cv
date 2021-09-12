window.onload = function() {
  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const navigationListHeader = document.querySelector('.navigation__header')
  const widthDevice = window.innerWidth
  body.addEventListener('click', e => {
    const isBurger = e.target == burger || e.target.parentElement == burger
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
}
