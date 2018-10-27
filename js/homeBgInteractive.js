function bgChange(bg) {
  $('#section0').css("background-color", bg);
}

$("#conner").hover(
  function() {
    bgChange('#6666ff');
  },
  function() {
    // bgChange('#000');
  }
);

$("#dev").hover(
  function() {
    bgChange('#F4845F');
  },
  function() {
    // bgChange('#000');
  }
);

$("#more").hover(
  function() {
    bgChange('#00A896');
  },
  function() {
    // bgChange('#000');
  }
);

$("#resume").hover(
  function() {
    bgChange('#EA4C89');
  },
  function() {
    // bgChange('#000');
  }
);

$("#menu").hover(
  function() {
    bgChange('#000');
  },
  function() {
    // bgChange('#000');
  }
);
