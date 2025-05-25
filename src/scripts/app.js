//anim burger menue

const burger = document.querySelector('.burger');
const nav = document.querySelector('.Nav');
const navListe = document.querySelector('.Nav__liste');

burger.addEventListener('click', () => {
  nav.classList.toggle('open');
  navListe.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !burger.contains(e.target)) {
    nav.classList.remove('open');
    navListe.classList.remove('active');
  }
});



//Curseur personnalisé
const body = document.body;
const Cursor = document.querySelector('.cursor');
const images = document.querySelectorAll('.cursor-img');

//deplacer le cursor et centre
function moveCursor(e) {
    console.log('mousemove');
  Cursor.style.top = `${(e.clientY + window.scrollY) - 32}px`; 
  Cursor.style.left = `${e.clientX - 32}px`;
}
// cacher le cursor de base / afficher le cursor personnaliser/ activer le suivi
    images.forEach((img) => {
        img.addEventListener('mouseenter', () => {
            console.log('mouseenter');
        Cursor.style.visibility = 'visible';
        body.style.cursor = 'none';
        img.addEventListener('mousemove', moveCursor);
        });
    });
//inverse que on part de l'element avec le cursor
    images.forEach((img) => {
        img.addEventListener('mouseleave', (e) => {
            console.log('mouseleave');
        if (!img.contains(e.relatedTarget)) {
            Cursor.style.visibility = 'hidden';
            body.style.cursor = 'default';
            img.removeEventListener('mousemove', moveCursor);
        }
    });
});

//anim titre
//arreter lanim quand pas dans l'écrant

const titles = document.querySelectorAll('.anim-titre, .anim-grand-titre');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  },
  {
    threshold: 0 // dès que l’élément entre/sort de l’écran
  }
);

titles.forEach(title => observer.observe(title));