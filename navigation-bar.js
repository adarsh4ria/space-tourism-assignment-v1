const button = document.querySelector('#hamburger-menu-button')
const nav = document
  .getElementsByClassName('primary-navigation')[0]
  .getElementsByTagName('nav')[0]

button.addEventListener('click', () => {
  if (nav.style.display === 'none') {
    nav.style.display = 'block'
  } else {
    nav.style.display = 'none'
  }
})
