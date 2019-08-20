var navMain = document.querySelector('.list__wrapper');
var navToggle = document.querySelector('.main-nav__toggle');
var close = document.querySelector('.close')

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('site-list-closed')) {
    navMain.classList.remove('site-list-closed');
    navMain.classList.add('site-list-opened');
  };

  if (navToggle.classList.contains('toggle-on')) {
    navToggle.classList.remove('toggle-on');
    navToggle.classList.add('toggle-off');
    
    close.classList.remove('close-off');
    close.classList.add('close-on')
  } else {
    navToggle.classList.remove('toggle-off');
    navToggle.classList.add('toggle-on');
  }
});

close.addEventListener('click', function() {
  if (close.classList.contains('close-on')) {
    close.classList.remove('close-on');
    close.classList.add('close-off');

    navToggle.classList.remove('toggle-off');
    navToggle.classList.add('toggle-on');

    navMain.classList.add('site-list-closed');
    navMain.classList.remove('site-list-opened');
  }
})