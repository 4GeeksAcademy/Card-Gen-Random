/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";
import "./assets/img/4aces.jpg";

window.addEventListener("load", function() {
  // Random value
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Random Suit
  function getRandomSuit() {
    let suits = ["♠", "♥", "♦", "♣"];
    let randomIndex = getRandomInt(0, suits.length - 1);
    return suits[randomIndex];
  }

  // Refresh Card
  function refreshCard() {
    let leftCorner = document.getElementById("leftCorner");
    let rightCorner = document.getElementById("rightCorner");
    let bottomSuit = document.getElementById("bottomSuit");

    // Random value card
    let valueCard = getRandomInt(1, 13); // Value ACE to KING
    let palo = getRandomSuit();

    // Value A, J, Q, K

    if (valueCard === 1) {
      valueCard = "A";
    } else if (valueCard === 11) {
      valueCard = "J";
    } else if (valueCard === 12) {
      valueCard = "Q";
    } else if (valueCard === 13) {
      valueCard = "K";
    } else {
      valueCard = valueCard.toString();
    }

    // Declared Card element
    let carta = document.getElementById("carta");
    if (!carta) {
      carta = document.createElement("div");
      carta.id = "carta";
      document.body.appendChild(carta); // Añadir 'carta' al cuerpo del documento
    }

    // Width and heigth user input
    let widthInput = document.getElementById("widthInput").value;
    let heightInput = document.getElementById("heightInput").value;

    // Number input validate
    if (isNaN(widthInput) || isNaN(heightInput)) {
      alert("Por favor, ingrese valores numéricos para width y height.");
      return;
    }

    // + PX to card
    carta.style.width = widthInput + "px";
    carta.style.height = heightInput + "px";

    // Refresh content
    leftCorner.textContent = valueCard;
    rightCorner.textContent = valueCard;
    bottomSuit.textContent = palo;

    //Red color heart and Diamond
    if (palo === "♥" || palo === "♦") {
      leftCorner.style.color = "red";
      rightCorner.style.color = "red";
      bottomSuit.style.color = "red";
    } else {
      leftCorner.style.color = "";
      rightCorner.style.color = "";
      bottomSuit.style.color = "";
    }
  }

  let restSeconds = 10;

  // Seconds countdown
  function refreshCount() {
    const counterElement = document.getElementById("counter");
    counterElement.textContent = restSeconds;

    if (restSeconds === 0) {
      // Refresh page in 10 seconds
      location.reload();
    } else {
      restSeconds--;
    }
  }

  // Get witdh and height
  const widthInput = document.getElementById("widthInput");
  const heightInput = document.getElementById("heightInput");

  // Enter key for width
  widthInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      refreshCard();
    }
  });

  // Enter key for height
  heightInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      refreshCard();
    }
  });

  // Start count when refresh page
  setInterval(refreshCount, 1000);

  // New card button
  const myButton = document.getElementById("myButton");

  if (myButton) {
    myButton.addEventListener("click", function() {
      refreshCard();
    });
  }

  refreshCard();
});
