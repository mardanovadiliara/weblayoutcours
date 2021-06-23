document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.catalog__lang-btn').forEach(function(tabsBtn) {
      tabsBtn.addEventListener('click', function(event) {
          const path = event.currentTarget.dataset.path

          document.querySelectorAll('.catalog__tab').forEach(function(tabContent) {
              tabContent.classList.remove('active-tab')
          })

          document.querySelector(`[data-target="${path}"]`).classList.add('active-tab')
      })
  })

  document.querySelectorAll('.accordion__btn').forEach(function(accordionLink) {
    accordionLink.addEventListener('click', function(event) {
      event.preventDefault();
        const path = event.currentTarget.dataset.path


        document.querySelectorAll('.active-tab .master').forEach(function(accordionContent) {
          accordionContent.classList.remove('active-master')
        })

        document.querySelector(`.active-tab [data-target="${path}"]`).classList.add('active-master')
    })
})

})

const items = document.querySelectorAll(".catalog__lang-btn");

for (let i = 0; i < items.length; i++) {
  const item = items[i];
  item.addEventListener("click", changeActiveClass);
}

function changeActiveClass(e)
{
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    item.classList.remove('catalog__lang-btn-active');
  }
  e.target.classList.add('catalog__lang-btn-active');
}



document.querySelectorAll('.active-tab').forEach(function () {
  const activeButton = document.querySelectorAll(".accordion__btn");

    for (let i = 0; i < activeButton.length; i++) {
      const button = activeButton[i];
      button.addEventListener("click", changeActiveClass);
    }

    function changeActiveClass(e)
    {
      for (let i = 0; i < activeButton.length; i++) {
        const button = activeButton[i];
        button.classList.remove('accordion__btn-active');
      }
      e.target.classList.add('accordion__btn-active');
    }
})

