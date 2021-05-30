document.addEventListener('DOMContentLoaded', function () {
    const btnMenu = document.querySelectorAll('.header__bottom-link');
    const menu = document.querySelectorAll('.dropdown');

        btnMenu.forEach(function(drop) {
            drop.addEventListener('click', function(event) {

            const path = event.currentTarget.dataset.path

            menu.forEach(function(dropContent) {
                dropContent.classList.remove('.dropdown-active')
            })

            document.querySelector(`[data-target="${path}"]`).classList.toggle('dropdown-active')
        })

        document.addEventListener('click', function(e) {
            console.log(e.target)
            if (!e.target.classList.contains('dropdown') && !e.target.classList.contains('header__bottom-link')) {
              menu.forEach(el => {el.classList.remove(('dropdown-active'))})
            }
        })
    })
})
