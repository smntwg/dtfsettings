(function () {
  "use strict";

  var celsius = document.getElementById("celsius");
  var fahrenheit = document.getElementById("fahrenheit");
  var note = document.getElementById("converter-note");
  if (!celsius || !fahrenheit) return;

  var lock = false;

  function round(value) {
    return Math.round(value * 10) / 10;
  }

  function setNote(c) {
    if (!note || !isFinite(c)) return;
    var usual = round(c * 9 / 5 + 32);
    var text = c + "°C is " + usual + "°F by the usual conversion.";
    if (Math.abs(c - 150) < 0.05) {
      text += " A common DTF cold-peel band starts here and runs to 160°C.";
    }
    if (Math.abs(c - 160) < 0.05) {
      text += " 160°C is 320°F, the top of that common band, and the cotton figure on one instant-peel film.";
    }
    if (Math.abs(c - 130) < 0.05) {
      text += " 130°C is the polyester figure published for Amaya ProPeel film, not a general cold-peel setting.";
    }
    note.textContent = text;
  }

  function fromC() {
    if (lock) return;
    var c = parseFloat(celsius.value);
    if (!isFinite(c)) return;
    lock = true;
    fahrenheit.value = String(round(c * 9 / 5 + 32));
    lock = false;
    setNote(c);
    markChip(c);
  }

  function fromF() {
    if (lock) return;
    var f = parseFloat(fahrenheit.value);
    if (!isFinite(f)) return;
    lock = true;
    var c = round((f - 32) * 5 / 9);
    celsius.value = String(c);
    lock = false;
    setNote(c);
    markChip(c);
  }

  function markChip(c) {
    document.querySelectorAll("[data-c]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(Number(button.getAttribute("data-c")) === c));
    });
  }

  celsius.addEventListener("input", fromC);
  fahrenheit.addEventListener("input", fromF);
  document.querySelectorAll("[data-c]").forEach(function (button) {
    button.addEventListener("click", function () {
      celsius.value = button.getAttribute("data-c");
      fromC();
    });
  });
  fromC();
})();
