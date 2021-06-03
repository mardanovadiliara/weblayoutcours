// document.addEventListener('DOMContentLoaded', function () {
//     const btnMenu = document.querySelectorAll('.header__bottom-btn');
//     const menu = document.querySelectorAll('.dropdown');

//         btnMenu.forEach(function(drop) {
//             drop.addEventListener('click', function(event) {

//             const path = event.currentTarget.dataset.path

//             menu.forEach(function(dropContent) {
//                 dropContent.classList.remove('.dropdown-active')
//             })

//             document.querySelector(`[data-target="${path}"]`).classList.toggle('dropdown-active')
//         })

//         document.addEventListener('click', function(e) {
//             console.log(e.target)
//             if (!e.target.classList.contains('dropdown') && !e.target.classList.contains('header__bottom-btn')) {
//               menu.forEach(el => {el.classList.remove(('dropdown-active'))})
//             }
//         })
//     })
// })

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
  if (!e.target.classList.contains('dropdown') && !e.target.classList.contains('.header__bottom-btn')) {
    drop.forEach(el => {el.classList.remove(('dropdown-active'))})
  }
});
