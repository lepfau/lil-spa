const body = document.querySelector("#main");
const btnPlay = document.querySelector("#btn-play");
const btnOver = document.querySelector("#btn-gamover");
let currentScreen = "game";

console.log(axios);
console.log(body);

async function changeScreen(screen) {
  const res = await axios.get("/views/" + screen + ".html");
  body.innerHTML = res.data;
  console.log(res.data);
}

btnPlay.onclick = () => changeScreen(currentScreen);
btnOver.onclick = () => changeScreen("gameover");
