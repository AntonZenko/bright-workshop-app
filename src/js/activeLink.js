const links = document.querySelector('.nav__list')

const activeLinkToggle = e => {
  const activeLink = document.querySelector('.active')
  if (activeLink === e.target || e.target === e.currentTarget) {
    return
  }
  activeLink.classList.remove('active')
  e.target.classList.add('active')
}

links.addEventListener('click', activeLinkToggle)
