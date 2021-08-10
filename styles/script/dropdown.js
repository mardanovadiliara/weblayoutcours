
const button = document.querySelectorAll('.header__bottom-btn');
const drop = document.querySelectorAll('.dropdown')

button.forEach(el => {
  el.addEventListener('click', (e) => {
    drop.forEach(el => {el.classList.remove(('dropdown-active'))})
    e.currentTarget.closest('li').querySelector('.dropdown').classList.toggle('dropdown-active');
  });
});

document.addEventListener('click', (e) => {
  console.log(e.target)
  if (!e.target.classList.contains('dropdown') && !e.target.classList.contains('header__bottom-btn')) {
    drop.forEach(el => {el.classList.remove(('dropdown-active'))})
  }
});
