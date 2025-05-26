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
  },
  {
    text: "You find a wounded ally slowing down the group. Do you…",
    answers: [
      { text: "Leave them behind", effect: { mental: -1, logic: 2 } },
      { text: "Help them walk", effect: { social: 2, physique: -1 } },
      { text: "Carry them yourself", effect: { physique: 2, mental: -2 } }
    ]
  },
  {
    text: "A storm is coming. You haven’t found shelter yet. Do you…",
    answers: [
      { text: "Climb a tree and wait it out", effect: { logic: -1, mental: 2 } },
      { text: "Dig into the ground", effect: { physique: 1, logic: 2 } },
      { text: "Keep walking through it", effect: { mental: -1, physique: 2 } }
    ]
  },
  {
  text: "You’re out of water and find a sealed bottle in an abandoned camp. Do you…",
  answers: [
    { text: "Drink it immediately", effect: { physique: 1, logic: -2 } },
    { text: "Boil it first", effect: { logic: 2, mental: 1 } },
    { text: "Give it to someone weaker", effect: { social: 2, mental: -1 } }
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

// === Navigation
document.getElementById("start-button").addEventListener("click", () => {
  sfx.start.play();
  sfx.result.play();
  sfx.result.pause();
  sfx.result.currentTime = 0;
  screens.welcome.classList.add("hidden");
  screens.question.classList.remove("hidden");
  startQuiz();
});

document.getElementById("retry-button").addEventListener("click", () => {
  location.reload();
});

// === Lang change
langSelect.addEventListener("change", () => {
  currentLang = langSelect.value;
  applyTranslations();
  refreshCurrentQuestion();
});

applyTranslations();

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
    btn.style.color = "#76ff03";
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
  }, 4000);
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

  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  const entries = Object.entries(scores);
  const max = Math.max(...entries.map(([_, val]) => val));
  const top = entries.filter(([_, val]) => val === max);

  let dominant;
  const isBalanced = top.length >= 2 && top.every(([_, val]) => max - val <= 2);
  const isAllHigh = entries.every(([_, val]) => val >= 6);

  if (isBalanced && isAllHigh) {
    dominant = "multiple";
  } else {
    dominant = top[0][0];
  }

  const dominantScore = scores[dominant];
  const durationList = t.survivalDurations[dominant] || t.survivalDurations["multiple"];
  let duration = "";

  if (dominantScore <= 3) duration = durationList[0];
  else if (dominantScore <= 5) duration = durationList[1];
  else if (dominantScore <= 7) duration = durationList[2];
  else duration = durationList[3];

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

  const profile = profiles[dominant] || profiles.multiple;
  const image = profileImages[dominant] || profileImages.multiple;

  document.getElementById("result-illustration").src = image;

  const card = document.getElementById("result-card");
  card.classList.remove("card-glow");
  void card.offsetWidth;
  card.classList.add("card-glow");

  document.getElementById("card-result").innerText = `${t.result} ${duration}`;
  document.getElementById("card-profile").innerText = `${t.profile}: ${profile}`;
}

// === Screenshot Share
document.getElementById("share-button").addEventListener("click", () => {
  const card = document.getElementById("result-card");
  const img = document.getElementById("result-illustration");

  if (!img.complete || img.naturalHeight === 0) {
    img.onload = () => captureCard(card);
  } else {
    captureCard(card);
  }
});

function captureCard(card) {
  const prevClass = card.className;
  card.classList.remove("card-glow");
  void card.offsetWidth;

  setTimeout(() => {
    html2canvas(card).then(canvas => {
      const link = document.createElement("a");
      link.download = "survivor-score.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
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
