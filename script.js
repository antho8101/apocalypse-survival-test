const loadingScreen = document.getElementById("loading-screen");

const sfx = {
  start: new Audio("assets/sounds/start.mp3"),
  loading: new Audio("assets/sounds/loading.mp3"),
  result: new Audio("assets/sounds/result.mp3")
};

const screens = {
  welcome: document.getElementById("welcome-screen"),
  question: document.getElementById("question-screen"),
  result: document.getElementById("result-screen")
};

const langSelect = document.getElementById("language-select");
let currentLang = langSelect.value;
let t = translations[currentLang];

// === State ===
let currentQuestion = 0;
let scores = {
  mental: 0,
  physique: 0,
  logic: 0,
  social: 0
};

// === Questions Data ===
const questions = [
  {
    text: "Do you know how to start a fire without a lighter?",
    answers: [
      { text: "Yes", effect: { logic: 2, physique: 1 } },
      { text: "I’d try my best", effect: { logic: 1 } },
      { text: "Not a chance", effect: { logic: -1, physique: -1 } }
    ]
  },
  {
    text: "A stranger offers you food. Do you…",
    answers: [
      { text: "Accept immediately", effect: { social: 2, logic: -1 } },
      { text: "Ask questions first", effect: { logic: 2, social: 1 } },
      { text: "Refuse and move on", effect: { mental: 1, social: -2 } }
    ]
  },
  {
    text: "You hear a scream at night. Do you…",
    answers: [
      { text: "Run toward it", effect: { physique: 2, social: 1 } },
      { text: "Stay hidden", effect: { mental: 2, logic: 1 } },
      { text: "Panic and freeze", effect: { mental: -1, logic: -2 } }
    ]
  },
  {
    text: "What’s your weapon of choice?",
    answers: [
      { text: "Baseball bat", effect: { physique: 2 } },
      { text: "Crossbow", effect: { logic: 2, physique: 1 } },
      { text: "Words. I negotiate.", effect: { social: 2, logic: -1 } }
    ]
  },
  {
    text: "What’s your survival strategy?",
    answers: [
      { text: "Build a shelter and stay put", effect: { logic: 2, mental: 1 } },
      { text: "Keep moving", effect: { physique: 2, mental: 1 } },
      { text: "Find people and create a group", effect: { social: 2, logic: 1 } }
    ]
  }
];

// === Init
function applyTranslations() {
  t = translations[currentLang] || translations["en"];
  document.getElementById("title").innerText = t.title;
  document.getElementById("subtitle").innerText = t.subtitle;
  document.getElementById("start-button").innerText = t.start;
  document.getElementById("retry-button").innerText = t.retry;
  document.getElementById("loading-text").innerText = t.loading || "Analyzing your survival chances...";
}
applyTranslations();

// === Navigation
document.getElementById("start-button").addEventListener("click", () => {
  sfx.start.play();
  screens.welcome.classList.add("hidden");
  screens.question.classList.remove("hidden");
  startQuiz();
});

// === Lang change
langSelect.addEventListener("change", () => {
  currentLang = langSelect.value;
  applyTranslations();
  refreshCurrentQuestion();
});

// === Quiz Logic
function startQuiz() {
  currentQuestion = 0;
  scores = { mental: 0, physique: 0, logic: 0, social: 0 };
  showQuestion(currentQuestion);
}

function showQuestion(index) {
  const q = questions[index];
  const translatedQ = t.questions[index];

  document.getElementById("question-text").innerText = translatedQ.text;
  document.getElementById("question-count").innerText = index + 1;

  const container = document.querySelector(".answers");
  container.innerHTML = "";

  q.answers.forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.classList.add("answer-button");
    btn.innerText = translatedQ.answers[i];
    btn.addEventListener("click", () => {
      applyEffects(answer.effect);
      blurAllButtons();
      nextQuestion();
    });
    container.appendChild(btn);
  });
}

function blurAllButtons() {
  document.querySelectorAll(".answer-button").forEach(btn => btn.blur());
}

function applyEffects(effect) {
  for (let key in effect) {
    scores[key] += effect[key];
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    showLoadingThenResult();
  } else {
    showQuestion(currentQuestion);
  }
}

function showLoadingThenResult() {
  screens.question.classList.add("hidden");
  loadingScreen.classList.remove("hidden");

  sfx.loading.play();

  const bar = document.querySelector(".loading-fill");
  bar.style.width = "0%";
  bar.style.animation = "none";
  void bar.offsetWidth;
  bar.style.animation = "loadingAnim 3s forwards";

  setTimeout(() => {
    loadingScreen.classList.add("hidden");
    showResult();
  }, 3000);
}

function getDominantProfile(scores) {
  const entries = Object.entries(scores);
  const max = Math.max(...entries.map(([_, val]) => val));
  const top = entries.filter(([_, val]) => val === max);
  return top.length === 1 ? top[0][0] : "multiple";
}

function showResult() {
  sfx.result.volume = 0.5;
  sfx.result.play();

  screens.result.classList.remove("hidden");

  const totalScore =
    scores.mental + scores.physique + scores.logic + scores.social;

  let duration = "";
  if (totalScore <= 5) duration = "2 hours.";
  else if (totalScore <= 10) duration = "1 day and a bit.";
  else if (totalScore <= 15) duration = "3 or 4 days.";
  else if (totalScore <= 20) duration = "a week.";
  else duration = "long enough to rebuild society.";

  const dominant = getDominantProfile(scores);

  const profileImages = {
    physique: "assets/images/fighter.jpg",
    logic: "assets/images/strategist.jpg",
    social: "assets/images/charmer.jpg",
    mental: "assets/images/survivor.jpg",
    multiple: "assets/images/lonewolf.jpg"
  };

  const profiles = {
    physique: "The Fighter 🥊",
    logic: "The Strategist 🧠",
    social: "The Charmer 😎",
    mental: "The Survivor 🧘‍♂️",
    multiple: "The Lone Wolf 🐺"
  };

  const profile = profiles[dominant] || "The Lone Wolf 🐺";
  const image = profileImages[dominant] || profileImages.multiple;

  document.getElementById("result-illustration").src = image;

  const card = document.getElementById("result-card");
card.classList.remove("card-glow"); // reset
void card.offsetWidth;              // force reflow
card.classList.add("card-glow");

  document.getElementById("result-time").innerText = t.result + " " + duration;
  document.getElementById("result-profile").innerText = `${t.profile}: ${profile}`;
  document.getElementById("card-result").innerText = `${t.result} ${duration}`;
  document.getElementById("card-profile").innerText = `${t.profile}: ${profile}`;
}

document.getElementById("share-button").addEventListener("click", () => {
  const card = document.getElementById("result-card");
  const img = document.getElementById("result-illustration");

  if (!img.complete || img.naturalHeight === 0) {
    // L’image n’est pas encore chargée
    img.onload = () => captureCard(card);
  } else {
    // L’image est prête
    captureCard(card);
  }
});

function captureCard(card) {
  // Sauvegarde les styles d’origine
  const prevClass = card.className;
  card.classList.remove("card-glow");

  // Force un reflow pour garantir que les styles sont bien appliqués
  void card.offsetWidth;

  // Petite pause pour que l’effet soit visuellement retiré avant capture
  setTimeout(() => {
    html2canvas(card).then(canvas => {
      const link = document.createElement("a");
      link.download = "survivor-score.png";
      link.href = canvas.toDataURL("image/png");
      link.click();

      // Restaure les classes d’origine (glow, etc.)
      card.className = prevClass;
    });
  }, 50);
}

function refreshCurrentQuestion() {
  if (!screens.question.classList.contains("hidden")) {
    showQuestion(currentQuestion);
  } else if (!screens.welcome.classList.contains("hidden")) {
    applyTranslations();
  } else if (!screens.result.classList.contains("hidden")) {
    showResult();
  }
}