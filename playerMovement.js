AFRAME.registerComponent("player-movement", {
  init: function () {
    this.walk();
  },
  walk: function () {
    window.addEventListener("keypress", (e) => {
      if (e.key === "ArrowUp" || e.key === "ArrowRight" || e.key === "ArrowLeft" || e.key === "ArrowDown"){
        let entity = document.querySelector("#sound2");
        entity.components.sound.playSound();
      }
    });
  },
});

