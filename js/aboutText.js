var aboutState = 0;

function toggleAboutText() {
  if (this.aboutState === 0) {
    $("#aboutTextWork").css("display", 'none');
    $("#aboutTriggerWork").css("display", 'none');
    $("#aboutTextPlay").css("display", 'block');
    $("#aboutTriggerPlay").css("display", 'block');
    this.aboutState = 1
  } else {
    $("#aboutTextPlay").css("display", 'none');
    $("#aboutTriggerPlay").css("display", 'none');
    $("#aboutTextWork").css("display", 'block');
    $("#aboutTriggerWork").css("display", 'block');
    this.aboutState = 0
  }
}

$("#aboutTrigger").click(
  function() {
    toggleAboutText();
  }
);