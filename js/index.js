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
}
