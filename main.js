const handOptions = {
  rock: "/images/Rock.png",
  paper: "/images/Paper.png",
  scissors: "/images/Scissors.png",
};

let score = 0;

const pickUserHand = (hand) => {
  let main = document.querySelector(".main");
  main.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  document.getElementById("userPickImage").src = handOptions[hand];
  pickHouseHand(hand);
};

const pickHouseHand = (hand) => {
  let hands = ["rock", "paper", "scissors"];
  let cpHand = hands[Math.floor(Math.random() * hands.length)];
  document.getElementById("computerPickImage").src = handOptions[cpHand];

  referee(hand, cpHand);
};

const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("YOU LOSE!");
    setScore(score - 1);
  }
  if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN!");
    setScore(score + 1);
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("It's a tie!");
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("YOU WIN!");
    setScore(score + 1);
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOSE!");
    setScore(score - 1);
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "rock") {
    setDecision("YOU LOSE!");
    setScore(score - 1);
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("YOU WIN!");
    setScore(score + 1);
  }
};

const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
  }

const setScore = (newScore) => {
  score = newScore;
  document.querySelector(".score h1").innerText = newScore;
};

const restart = () => {
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
  
    let main = document.querySelector(".main");
    main.style.display = "flex";
  }
