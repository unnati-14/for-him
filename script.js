let score = 0;

function correct(q) {
  score++;

  if (q === 1) {
    document.getElementById("q1").classList.add("hidden");
    document.getElementById("q2").classList.remove("hidden");
  }

  if (q === 2 && score === 2) {
    document.getElementById("q2").classList.add("hidden");
    document.getElementById("final").classList.remove("hidden");
  }
}

function wrong() {
  alert("❌ Galat jawab! Dobara socho... Dil se 😜");
}

function restart() {
  score = 0;

  document.getElementById("final").classList.add("hidden");
  document.getElementById("q2").classList.add("hidden");
  document.getElementById("q1").classList.remove("hidden");
}
