const sounds = ["Nan", "Sa", "JJ", "L"];
const containerEl = document.querySelector(".container");

sounds.forEach((sound) => {
  const btnEl = document.createElement("button");
  btnEl.classList.add("btn");
  btnEl.innerText = sound;
  btnEl.style.backgroundImage = "url(images/" + sound + ".jpg)";
  containerEl.appendChild(btnEl);
  const audioEl = document.createElement("audio");
  audioEl.src = "sounds/" + sound + ".mp3";
  containerEl.appendChild(audioEl);
  btnEl.addEventListener("click", () => {
    audioEl.play();
  });
});
