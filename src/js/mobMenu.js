const refs = {
  menu: document.querySelector('.mob__menu'),
  openMenuBtn: document.querySelector('.open'),
  closeMenuBtn: document.querySelector('.close'),
  body: document.querySelector('body')
}

refs.openMenuBtn.addEventListener('click', toggleMenu)
refs.closeMenuBtn.addEventListener('click', toggleMenu)

function toggleMenu () {
  refs.menu.classList.toggle('is-hidden')
  refs.menu.classList.toggle('is-open')
  if (!refs.menu.classList.contains('is-hidden')) {
    refs.openMenuBtn.disabled = true
    document.body.style.overflow = 'hidden'
    return
  }
  if (refs.menu.classList.contains('is-hidden')) {
    refs.openMenuBtn.disabled = false
    document.body.style.overflow = 'scroll'
  }
}
