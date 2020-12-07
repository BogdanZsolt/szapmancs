// window.addEventListener('scroll', function () {
//   var navbar = document.querySelector('.navbar')
//   navbar.classList.toggle('sticky', window.scrollY > 0)
// })

const menuBtn = document.querySelector('.menu-btn')
const menuItems = document.querySelector('.navbar__items')
const expandBtn = document.querySelectorAll('.expand-btn')
const navBar = document.querySelector('.navbar')

// Sticky NavBar
window.addEventListener('scroll', () => {
  console.log(window.scrollY)
  navBar.classList.toggle('sticky', window.scrollY > 0)
})

// hamburger toggle
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open')
  menuItems.classList.toggle('open')
})

// mobile menu expand
expandBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('open')
  })
})
