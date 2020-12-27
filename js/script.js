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
const heads = document.querySelectorAll('.head');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let changeInterval;

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

const nextHead = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next head
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current the first
    heads[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevHead = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next head
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current the first
    heads[heads.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

next.addEventListener('click', (e) => {
  nextHead();
  if (auto) {
    clearInterval(changeInterval);
    chengeInterval = setInterval(nextHead, intervalTime);
  }
});

prev.addEventListener('click', (e) => {
  prevHead();
  if (auto) {
    clearInterval(changeInterval);
    chengeInterval = setInterval(prevHead, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  changeInterval = setInterval(nextHead, intervalTime);
}
