/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";
import "./assets/img/4aces.jpg";

window.addEventListener("load", function() {
  // Función para generar un valor aleatorio entre min y max (ambos incluidos)
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Función para obtener un palo aleatorio
  function getRandomSuit() {
    let suits = ["♠", "♥", "♦", "♣"];
    let randomIndex = getRandomInt(0, suits.length - 1);
    return suits[randomIndex];
  }

  // Función para actualizar la carta con valores aleatorios
  function refreshCard() {
    // Obtener elementos internos de la carta
    let esquinaSuperiorIzquierda = document.getElementById(
      "esquinaSuperiorIzquierda"
    );
    let esquinaInferiorDerecha = document.getElementById(
      "esquinaInferiorDerecha"
    );
    let paloInferior = document.getElementById("paloInferior");

    // Generar valores aleatorios
    let valor = getRandomInt(1, 13); // Valores del As al Rey
    let palo = getRandomSuit();

    // Valores A, J, Q, K

    if (valor === 1) {
      valor = "A";
    } else if (valor === 11) {
      valor = "J";
    } else if (valor === 12) {
      valor = "Q";
    } else if (valor === 13) {
      valor = "K";
    } else {
      valor = valor.toString();
    }

    // Actualizar contenido
    esquinaSuperiorIzquierda.textContent = valor;
    esquinaInferiorDerecha.textContent = valor;
    paloInferior.textContent = palo;

    //Corazones y Diamantes Rojos
    if (palo === "♥" || palo === "♦") {
      esquinaSuperiorIzquierda.style.color = "red";
      esquinaInferiorDerecha.style.color = "red";
      paloInferior.style.color = "red";
    } else {
      esquinaSuperiorIzquierda.style.color = "";
      esquinaInferiorDerecha.style.color = "";
      paloInferior.style.color = "";
    }
  }

  let restSeconds = 10;

  function refreshCount() {
    const contadorElemento = document.getElementById("contador");
    contadorElemento.textContent = restSeconds;

    if (restSeconds === 0) {
      // Actualizar la página después de 10 segundos
      location.reload();
    } else {
      restSeconds--;
    }
  }

  // Iniciar el contador al cargar la página y actualizar cada segundo
  setInterval(refreshCount, 1000);

  // Ejemplo de uso
  refreshCard();
});
