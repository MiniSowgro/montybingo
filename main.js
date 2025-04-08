document.querySelectorAll('.button-whatnot button').forEach(button => {
  button.addEventListener('click', function() {
    this.classList.toggle('clicked');
  });
});
