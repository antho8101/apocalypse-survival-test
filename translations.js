const translations = {
  en: {
    title: "How long would you survive?",
    subtitle: "Find out in 8 quick questions.",
    start: "Start the test",
    questionPrefix: "Question",
    result: "You'd survive",
    profile: "Profile",
    retry: "Try Again",
    questions: [
      { text: "Do you know how to start a fire without a lighter?", answers: ["Yes", "I’d try my best", "Not a chance"] },
      { text: "A stranger offers you food. Do you…", answers: ["Accept immediately", "Ask questions first", "Refuse and move on"] },
      { text: "You hear a scream at night. Do you…", answers: ["Run toward it", "Stay hidden", "Panic and freeze"] },
      { text: "What’s your weapon of choice?", answers: ["Baseball bat", "Crossbow", "Words. I negotiate."] },
      { text: "What’s your survival strategy?", answers: ["Build a shelter and stay put", "Keep moving", "Find people and create a group"] },
      { text: "You find a wounded ally slowing down the group. Do you…", answers: ["Leave them behind", "Help them walk", "Carry them yourself"] },
      { text: "A storm is coming. You haven’t found shelter yet. Do you…", answers: ["Climb a tree and wait it out", "Dig into the ground", "Keep walking through it"] },
      { text: "You’re out of water and find a sealed bottle. Do you…", answers: ["Drink it immediately", "Boil it first", "Give it to someone weaker"] }
    ],
    survivalDurations: {
      physique: ["1 day.", "4 days.", "1 week.", "months of brutal survival."],
      logic: ["2 days.", "1 week.", "several weeks.", "years of calculated survival."],
      mental: ["1 day.", "1 week.", "months.", "long enough to find peace in chaos."],
      social: ["2 hours. Charisma didn’t help.", "a day or two.", "5 days with your group.", "weeks surrounded by followers."],
      multiple: ["1 day.", "1 week.", "months.", "9,752 days. You outlived them all."]
    }
  },

  fr: {
    title: "Combien de temps tu survivrais ?",
    subtitle: "Découvre-le en 8 questions rapides.",
    start: "Commencer le test",
    questionPrefix: "Question",
    result: "Tu survivrais",
    profile: "Profil",
    retry: "Recommencer",
    questions: [
      { text: "Sais-tu allumer un feu sans briquet ?", answers: ["Oui", "Je ferais de mon mieux", "Pas du tout"] },
      { text: "Un inconnu t’offre de la nourriture. Tu…", answers: ["Acceptes direct", "Poses quelques questions", "Refuses poliment"] },
      { text: "Tu entends un cri la nuit. Tu…", answers: ["Cours voir", "Restes caché", "Paniques et figes"] },
      { text: "Ton arme préférée ?", answers: ["Batte de baseball", "Arbalète", "La parole. Je négocie."] },
      { text: "Ta stratégie de survie ?", answers: ["Construire un abri", "Bouger sans cesse", "Créer un groupe"] },
      { text: "Un allié blessé ralentit le groupe. Tu…", answers: ["L’abandonnes", "L’aides à marcher", "Le portes toi-même"] },
      { text: "Une tempête approche et tu n’as pas d’abri. Tu…", answers: ["Grimpes dans un arbre", "Creuses un trou", "Continues à marcher"] },
      { text: "Tu n’as plus d’eau et trouves une bouteille scellée. Tu…", answers: ["La bois immédiatement", "La fais bouillir d’abord", "La donnes à plus faible"] }
    ],
    survivalDurations: {
      physique: ["1 jour.", "4 jours.", "1 semaine.", "des mois de survie brutale."],
      logic: ["2 jours.", "1 semaine.", "plusieurs semaines.", "des années de survie méthodique."],
      mental: ["1 jour.", "1 semaine.", "des mois.", "assez longtemps pour trouver la paix dans le chaos."],
      social: ["2 heures. Le charisme n’a pas suffi.", "un jour ou deux.", "5 jours avec ton groupe.", "des semaines entouré de tes alliés."],
      multiple: ["1 jour.", "1 semaine.", "des mois.", "9 752 jours. Tu les as tous surpassés."]
    }
  },

  es: {
    title: "¿Cuánto tiempo sobrevivirías?",
    subtitle: "Descúbrelo en 8 preguntas rápidas.",
    start: "Comenzar el test",
    questionPrefix: "Pregunta",
    result: "Sobrevivirías",
    profile: "Perfil",
    retry: "Intentar de nuevo",
    questions: [
      { text: "¿Sabes encender fuego sin encendedor?", answers: ["Sí", "Lo intentaría", "Ni de broma"] },
      { text: "Un desconocido te ofrece comida. Tú…", answers: ["Aceptas sin pensar", "Haces preguntas primero", "Rechazas y sigues tu camino"] },
      { text: "Escuchas un grito en la noche. Tú…", answers: ["Corres hacia él", "Te escondes", "Te paralizas"] },
      { text: "¿Cuál es tu arma preferida?", answers: ["Bate de béisbol", "Ballesta", "Palabras. Yo negocio."] },
      { text: "¿Tu estrategia de supervivencia?", answers: ["Construir un refugio", "Seguir moviéndote", "Formar un grupo"] },
      { text: "Un aliado herido ralentiza al grupo. Tú…", answers: ["Lo dejas atrás", "Lo ayudas a caminar", "Lo cargas tú mismo"] },
      { text: "Se acerca una tormenta y no tienes refugio. Tú…", answers: ["Subes a un árbol", "Cavas en el suelo", "Sigues caminando"] },
      { text: "No tienes agua y encuentras una botella sellada. Tú…", answers: ["La bebes enseguida", "La hierves primero", "Se la das a alguien más débil"] }
    ],
    survivalDurations: {
      physique: ["1 día.", "4 días.", "1 semana.", "meses de supervivencia brutal."],
      logic: ["2 días.", "1 semana.", "varias semanas.", "años de supervivencia calculada."],
      mental: ["1 día.", "1 semana.", "meses.", "lo suficiente para encontrar paz en el caos."],
      social: ["2 horas. El carisma no bastó.", "uno o dos días.", "5 días con tu grupo.", "semanas rodeado de seguidores."],
      multiple: ["1 día.", "1 semana.", "meses.", "9.752 días. Sobreviviste a todos."]
    }
  },

  ru: {
    title: "Сколько ты продержишься?",
    subtitle: "Узнай за 8 быстрых вопросов.",
    start: "Начать тест",
    questionPrefix: "Вопрос",
    result: "Ты бы выжил",
    profile: "Профиль",
    retry: "Попробовать снова",
    questions: [
      { text: "Ты умеешь разжигать огонь без зажигалки?", answers: ["Да", "Постарался бы", "Нет, совсем"] },
      { text: "Незнакомец предлагает тебе еду. Ты…", answers: ["Сразу принимаешь", "Спрашиваешь подробности", "Отказываешься и уходишь"] },
      { text: "Ночью ты слышишь крик. Ты…", answers: ["Бежишь туда", "Прячешься", "Замираешь от страха"] },
      { text: "Твоё оружие выбора?", answers: ["Бейсбольная бита", "Арбалет", "Слова. Я договариваюсь."] },
      { text: "Твоя стратегия выживания?", answers: ["Построить укрытие", "Постоянно двигаться", "Найти людей и создать группу"] },
      { text: "Раненый союзник тормозит группу. Ты…", answers: ["Оставляешь его", "Помогаешь идти", "Несёшь на себе"] },
      { text: "Грядёт буря, а укрытия нет. Ты…", answers: ["Лезешь на дерево", "Роешь яму", "Продолжаешь путь"] },
      { text: "У тебя нет воды, и ты находишь запечатанную бутылку. Ты…", answers: ["Пьёшь сразу", "Кипятишь сначала", "Отдаёшь более слабому"] }
    ],
    survivalDurations: {
      physique: ["1 день.", "4 дня.", "1 неделя.", "месяцы жестокой борьбы за выживание."],
      logic: ["2 дня.", "1 неделя.", "несколько недель.", "годы выживания по плану."],
      mental: ["1 день.", "1 неделя.", "месяцы.", "достаточно долго, чтобы найти покой в хаосе."],
      social: ["2 часа. Харизмы не хватило.", "день или два.", "5 дней с группой.", "недели в окружении последователей."],
      multiple: ["1 день.", "1 неделя.", "месяцы.", "9 752 дня. Ты пережил всех."]
    }
  },

  zh: {
    title: "你能活多久？",
    subtitle: "8 个问题快速揭晓答案。",
    start: "开始测试",
    questionPrefix: "问题",
    result: "你能活",
    profile: "角色",
    retry: "再试一次",
    questions: [
      { text: "你会不用打火机生火吗？", answers: ["会", "我会尽力尝试", "不会"] },
      { text: "一个陌生人给你食物。你…", answers: ["立刻接受", "先问清楚", "拒绝并离开"] },
      { text: "你在夜晚听到尖叫声。你…", answers: ["跑过去看看", "藏起来", "吓得不动"] },
      { text: "你首选的武器是？", answers: ["棒球棍", "弩", "语言。我善于谈判。"] },
      { text: "你的生存策略？", answers: ["建立避难所", "不停移动", "组建团队"] },
      { text: "一个受伤的同伴拖慢了队伍。你…", answers: ["丢下他", "扶着他走", "自己背着他"] },
      { text: "暴风雨来临，你还没找到庇护所。你…", answers: ["爬到树上", "挖个坑藏身", "继续往前走"] },
      { text: "你没水喝，在废弃营地找到一瓶密封的水。你…", answers: ["立刻喝掉", "先烧开", "让给更虚弱的人"] }
    ],
    survivalDurations: {
      physique: ["1天。", "4天。", "1周。", "残酷生存的数月。"],
      logic: ["2天。", "1周。", "数周。", "多年有条理的生存。"],
      mental: ["1天。", "1周。", "数月。", "足够在混乱中找到平静。"],
      social: ["2小时。魅力没救你。", "一两天。", "5天和队友在一起。", "数周在粉丝簇拥中。"],
      multiple: ["1天。", "1周。", "数月。", "9752天。你活过所有人。"]
    }
  }
};