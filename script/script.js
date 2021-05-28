document.addEventListener('DOMContentLoaded', function () {
    const btnMenu = document.querySelectorAll('.header-bottom-nav-list-link');
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
            if (!e.target.classList.contains('dropdown') && !e.target.classList.contains('header-bottom-nav-list-link')) {
              menu.forEach(el => {el.classList.remove(('dropdown-active'))})
            }
        })
    })
    
    
    const navMenu = document.querySelector ('.header-top-nav');
    const burger = document.querySelector ('.burger');
    const close = document.querySelector ('.closeBtn');

    burger.addEventListener('click', function(e) {
        e.preventDefault();
        navMenu.classList.add('burger-open');
    })

    close.addEventListener('click', function(e) {
        navMenu.classList.remove('burger-open');
    })

    const searchBtn = document.querySelector ('.search-button');
    const form = document.querySelector ('.header-bottom-form');
    const closeFormBtn = document.querySelector ('.form-close-btn');

    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        form.classList.add('open-form');
    })

    closeFormBtn.addEventListener('click', function(e) {
        e.preventDefault();
        form.classList.remove('open-form');
    })

})

    
    
    

    


    // const searchInput = document.querySelector ('.search-input');
    // const searchBtn = document.querySelector ('.search-button');

    // searchBtn.addEventListener('click', function(e) {
    //     e.preventDefault();
    //     searchInput.classList.toggle('search-active');
    // })
