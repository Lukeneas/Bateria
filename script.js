//reconhecer tecla em todo site através de um Observer
document.body.addEventListener("keydown", (e) => {
  playSound(e.code.toLowerCase());
});
//reconhecer tecla dentro do input ao click de Button
document.querySelector(".composer button").addEventListener("click", () => {
  let song = document.querySelector("#input").value.split(""); //trans str-arr
  if (song !== "") {
    playComposition(song);
  }
  
});

const playSound = (sound) => {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`[data-key=${sound}]`);
  console.log(keyElement);
  if (audioElement) {
    audioElement.currentTime = 0; //antes de tocar, volta o ponteiro do audio ao inicio
    audioElement.play();
  }
  if (keyElement) {
    keyElement.classList.add("active");
    setTimeout(() => {
      keyElement.classList.remove("active");
    }, 300); //espera 300ms para remover class active
  }
};

const playComposition = (songArray) => {
  let wait = 0;
  for (let s of songArray) {
    setTimeout(() => {
      playSound(`key${s}`);
    }, wait);

    wait += 250;//toda vez que acionar, esperará +250ms após iniciar
    console.log(wait);
  }
};
