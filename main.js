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
    document.querySelector(".househand .handImage").classList.add("winner");
    setScore(score - 1);
    setTimeout(() => {
      document.querySelector(".househand .handImage").classList.remove("winner");
    }, 2000);
  }
  if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN!");
    document.querySelector(".userhand .handImage").classList.add("winner");
    setScore(score + 1);
    setTimeout(() => {
      document.querySelector(".userhand .handImage").classList.remove("winner");
    }, 2000);
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("It's a tie!");
    document.querySelector(".handImage").classList.remove("winner");
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("YOU WIN!");
    document.querySelector(".userhand .handImage").classList.add("winner");
    setScore(score + 1);
    setTimeout(() => {
      document.querySelector(".userhand .handImage").classList.remove("winner");
    }, 2000);
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOSE!");
    document.querySelector(".househand .handImage").classList.add("winner");
    setScore(score - 1);
    setTimeout(() => {
      document.querySelector(".househand .handImage").classList.remove("winner");
    }, 2000);
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("It's a tie!");
    document.querySelector(".handImage").classList.remove("winner");
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("It's a tie!");
    document.querySelector(".handImage").classList.remove("winner");
  }
  if (userHand == "scissors" && cpHand == "rock") {
    setDecision("YOU LOSE!");
    document.querySelector(".househand .handImage").classList.add("winner");
    setScore(score - 1);
    setTimeout(() => {
      document.querySelector(".househand .handImage").classList.remove("winner");
    }, 2000);
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("YOU WIN!");
    document.querySelector(".handImage").classList.add("winner");
    setScore(score + 1);
    setTimeout(() => {
      document.querySelector(".userhand .handImage").classList.remove("winner");
    }, 2000);
  
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



