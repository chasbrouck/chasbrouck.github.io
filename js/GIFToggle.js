  function toggleGIF(id, style) {
    $(id).css("display", style);
  }

  $("#aboutChicago").hover(
    function() {
      toggleGIF('#aboutChicagoGIF', 'block');
    },
    function() {
      toggleGIF('#aboutChicagoGIF', 'none');
    }
  );

  $("#aboutSports").hover(
    function() {
      toggleGIF('#aboutSportsGIF', 'block');
    },
    function() {
      toggleGIF('#aboutSportsGIF', 'none');
    }
  );

  $("#aboutExotic").hover(
    function() {
      toggleGIF('#aboutExoticGIF', 'block');
    },
    function() {
      toggleGIF('#aboutExoticGIF', 'none');
    }
  );

  $("#aboutFront").hover(
    function() {
      toggleGIF('#aboutFrontGIF', 'block');
    },
    function() {
      toggleGIF('#aboutFrontGIF', 'none');
    }
  );

  $("#aboutRock").hover(
    function() {
      toggleGIF('#aboutRockGIF', 'block');
    },
    function() {
      toggleGIF('#aboutRockGIF', 'none');
    }
  );

  $("#aboutSki").hover(
    function() {
      toggleGIF('#aboutSkiGIF', 'block');
    },
    function() {
      toggleGIF('#aboutSkiGIF', 'none');
    }
  );

  $("#aboutVideoGames").hover(
    function() {
      toggleGIF('#aboutVideoGamesGIF', 'block');
    },
    function() {
      toggleGIF('#aboutVideoGamesGIF', 'none');
    }
  );

  $("#aboutPodcast").hover(
    function() {
      toggleGIF('#aboutPodcastGIF', 'block');
    },
    function() {
      toggleGIF('#aboutPodcastGIF', 'none');
    }
  );
