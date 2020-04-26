var timmer = 60;

  function setGhost(ghostID){
    $('#'+ghostID).css('border', '2px solid blue');
  }

  function setTime(time) {
    if (time.value < 60) {
      time.value = 60;
      alert("Time for that mission can't be less than 60 seconds");
    } else {
        this.timmer = time;
    }

}