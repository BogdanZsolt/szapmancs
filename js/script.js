// window.addEventListener('scroll', function () {
//   var navbar = document.querySelector('.navbar')
//   navbar.classList.toggle('sticky', window.scrollY > 0)
// })

const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.navbar__items');
const expandBtn = document.querySelectorAll('.expand-btn');
const navBar = document.querySelector('.navbar');
const sideBar = document.querySelector('.faq__navbar');
const faqAccordionQuestion = document.querySelectorAll(
  '.faq__accordion--question'
);
// var faqNavLinks = document.querySelectorAll('.faq__nav--link');

// Sticky NavBar
window.addEventListener('scroll', () => {
  navBar.classList.toggle('sticky', window.scrollY > 0);
});

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

faqAccordionQuestion.forEach((panel) => {
  panel.addEventListener('click', () => {
    panel.classList.toggle('active');
    panel.nextElementSibling.classList.toggle('active');
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document
          .querySelector(`nav li a[href="#${id}"]`)
          .parentElement.classList.add('active');
      } else {
        document
          .querySelector(`nav li a[href="#${id}"]`)
          .parentElement.classList.remove('active');
      }
    });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });
});
