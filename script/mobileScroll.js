
document.querySelectorAll('.accordion__btn').forEach(btn => {

  btn.addEventListener('click', function(e) {
      e.preventDefault();
      let path = this.getAttribute('data-path');

      const scrollTarget = document.querySelector(`[data-target="${path}"]`);

      const topOffset = 0;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});
