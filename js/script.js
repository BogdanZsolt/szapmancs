// window.addEventListener('scroll', function () {
//   var navbar = document.querySelector('.navbar')
//   navbar.classList.toggle('sticky', window.scrollY > 0)
// })

const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.navbar__items');
const expandBtn = document.querySelectorAll('.expand-btn');
const navBar = document.querySelector('.navbar');
const sideBar = document.querySelector('.faq__navbar');
// const sideBarTop = sideBar.offsetTop;
// const sideBarHight = sideBar.offsetHeight;
// const sideBarPos = sideBarTop + sideBarHight;
const faqFooter = document.querySelector('.faq__footer');
// const maxScroll = faqFooter.offsetTop - 30;
const faqAccordion = document.querySelectorAll('.faq__accordion');
var faqNavLinks = document.querySelectorAll('.faq__nav--link');

// Sticky NavBar
window.addEventListener('scroll', () => {
  navBar.classList.toggle('sticky', window.scrollY > 0);
});

// Sticky Sidebar
// window.addEventListener('scroll', () => {
//   sideBar.classList.toggle(
//     'stickySide',
//     window.scrollY > 0 && sideBarPos + window.scrollY < maxScroll
//   );
// });

// hamburger toggle
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  menuItems.classList.toggle('open');
});

// mobile menu expand
expandBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
  });
});

faqAccordion.forEach((panel) => {
  panel.addEventListener('click', () => {
    panel.classList.toggle('active');
    panel.nextElementSibling.classList.toggle('active');
  });
});

faqNavLinks.forEach((links) => {
  links.addEventListener('click', () => {
    var activeLink = document.querySelectorAll('.active--link');
    activeLink.forEach((alink) => {
      alink.classList.remove('active--link');
    });
    links.classList.toggle('active--link');
  });
});
