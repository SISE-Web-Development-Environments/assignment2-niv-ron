
  function setGhost(ghostID){
    $('#'+ghostID).css('border', '2px solid blue');
  }

  function validateSetTime(time) {
    if (element.value < 60) {
        element.value = 60;
    } else {
        game_time = element.value;
    }

}