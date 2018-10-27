$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionsColor: ['#000', '#ffffff', '#ffffff'],
    anchors: ['home', 'about', 'work', 'contact'],
    menu: '#menu',
    scrollOverflow: true,
    resetSliders: true,
  });
});
