const inputCon = document.querySelector(".input-con");
const input = document.getElementById("input");
const btnGuess = document.getElementById("btnGuess");
const p = document.querySelector(".p");
const attempt = document.querySelector(".attempt");
const h2 = document.querySelector(".h2");
const start = document.getElementById("start");
const restart = document.getElementById("restart");
const imgCon = document.querySelector(".img-con");
const firstNum = document.querySelector(".first");
const lastNum = document.querySelector(".last");
let randomSayi = Math.floor(Math.random() * 101);
console.log("random sayı = ", randomSayi);
input.focus();
let tahminHakki = 6;
let i = 1;
let tahminiSayi;

btnGuess.addEventListener("click", function () {
  tahminHakki--;
  attempt.textContent = tahminHakki;
  gues();
  tahminAraligi();
  i++;
  input.focus();
  input.value = "";
});

function gues() {
  tahminiSayi = Number(input.value);
  if (tahminiSayi < randomSayi) {
    h2.textContent = `try a higher number ⬆️`;
  }
  if (tahminiSayi > randomSayi) {
    h2.textContent = `Try a lower number ⬇️`;
  }
  if (tahminiSayi === randomSayi) {
    h2.textContent = `Congratulations, you got it on the ${i} th guess.`;
    inputCon.classList.toggle("none");
    restart.classList.toggle("none");
    imgCon.style.backgroundImage = "url(./img/congratulations.gif)";
    p.classList.add("none");
    console.log(p.classList);
  } else if (tahminHakki === 0) {
    h2.textContent = `sorry you lost. guess the number = ${randomSayi}`;
    inputCon.classList.toggle("none");
    restart.classList.toggle("none");
    imgCon.style.backgroundImage = "url(./img/youlose.gif)";
    p.classList.add("none");
    console.log(p.classList);
  }
}

function tahminAraligi() {
  if (tahminiSayi > 100) {
    lastNum.innerText = 100;
  } else if (tahminiSayi < randomSayi) {
    return (firstNum.innerText = tahminiSayi);
  } else {
    return (lastNum.innerText = tahminiSayi);
  }
}

input.addEventListener("keydown", (e) => {
  e.key === "Enter" && btnGuess.click();
});

start.addEventListener("click", () => {
  inputCon.classList.toggle("none");
  start.classList.toggle("none");
  input.focus();
});

restart.addEventListener("click", () => {
  inputCon.classList.toggle("none");
  restart.classList.toggle("none");
  imgCon.style.backgroundImage = "url(./img/guess.jpeg)";
  h2.textContent = `Write the number.`;
  input.focus();
  tahminHakki = 6;
  i = 1;
  attempt.textContent = tahminHakki;
  randomSayi = Math.floor(Math.random() * 101);
  console.log("random sayı = ", randomSayi);
  firstNum.innerText = 0;
  lastNum.innerText = 100;
  p.classList.remove("none");
});
