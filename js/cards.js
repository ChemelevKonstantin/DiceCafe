const REALM_CARDS = {
    'Кав\'ярня ранкових метрвяків': {
        quests: [
            {
                id: 1,
                title: "Ранок мертвих кавоманів",
                illustration: "images/r1_1.png",
                text: "☣️Ранкові зомбі кричать що вони лактозо-непереносимі і кидаються на тебе. Окропи їх міцнячим Фільтром.",
                conditions: {
                    success: { 
                        threshold: 11, 
                        effects: [
                            { type: "health", value: 1, text: "+1❤️" },
                            { type: "luck", value: 1, text: "+1☘️" }
                        ],
                        text: "+1❤️ +1☘️"
                    },
                    failure: { 
                        threshold: 9, 
                        effects: [
                            { type: "luck", value: -1, text: "-1☘️" },
                            { type: "health", value: -1, text: "-1❤️" }
                        ],
                        text: "-1☘️ -1❤️"
                    },
                    special: { 
                        condition: "pair",
                        effects: [
                            { type: "gold", value: 1, text: "+1🪙" }
                        ],
                        text: "Пара +1🪙"
                    }
                }
            },
            {
                id: 2,
                title: "Маленький Бро",
                illustration: "images/r1_2.png",
                text: "Поки почувай себе сильним, але якщо зустрінеш його старшого Бро, то тебе будуть відшкребати як підстільну жуйку.",
                conditions: {
                    success: { 
                        threshold: 9, 
                        effects: [
                            { type: "gold", value: 2, text: "+2🪙" },
                            { type: "luck", value: 1, text: "+1☘️" }
                        ],
                        text: "+2🪙 +1☘️"
                    },
                    failure: { 
                        threshold: 8, 
                        effects: [
                            { type: "health", value: -1, text: "-1❤️" },
                            { type: "gold", value: -1, text: "-1🪙" }
                        ],
                        text: "-1❤️ -1🪙"
                    },
                    special: {
                        condition: "allEven",
                        effects: [
                            { type: "luck", value: 1, text: "+1☘️" }
                        ],
                        text: "Всі чотні +1☘️"
                    }
                }
            },
            {
                id: 3,
                title: "Магічна Кавова Фасолина🥜",
                illustration: "images/r1_3.png",
                text: "Ти тільки подивись на ці половинки (‿∣‿)🤤... хочеш дізнатись їх секретні рецепти😉?",
                conditions: {
                    success: { 
                        threshold: 10, 
                        effects: [
                            { type: "luck", value: 1, text: "+1☘️" },
                            { type: "gold", value: 1, text: "+1🪙" }
                        ],
                        text: "+1☘️ +1🪙"
                    },
                    failure: { 
                        threshold: 7, 
                        effects: [
                            { type: "health", value: -2, text: "-2❤️" },
                            { type: "luck", value: -2, text: "-2☘️" }
                        ],
                        text: "-2❤️ -2☘️"
                    },
                    special: {
                        condition: "sequence",
                        effects: [
                            { type: "gold", value: 2, text: "+2🪙" },
                            { type: "health", value: 1, text: "+1❤️" }
                        ],
                        text: "Стріт +2🪙 +1❤️"
                    }
                }
            },
            {
                id: 4,
                title: "Привіди Кавоманів",
                illustration: "images/r1_4.png",
                text: "Вони тебе налякають і з'їдять твій макарон. Наваляй їм по саме потойбіччя.",
                conditions: {
                    success: { 
                        threshold: 11, 
                        effects: [
                            { type: "gold", value: 1, text: "+1🪙" },
                            { type: "luck", value: 1, text: "+1☘️" }
                        ],
                        text: "+1🪙 +1☘️"
                    },
                    failure: { 
                        threshold: 7, 
                        effects: [
                            { type: "luck", value: -1, text: "-1☘️" },
                            { type: "health", value: -1, text: "-1❤️" }
                        ],
                        text: "-1☘️ -1❤️"
                    },
                    special: {
                        condition: "triple",
                        effects: [
                            { type: "health", value: 1, text: "+2❤️" },
                            { type: "luck", value: 2, text: "+2☘️" }
                        ],
                        text: "Трійка +2❤️ +2☘️"
                    }
                }
            },
            {
                id: 5,
                title: "Ти можеш бачити майбутне!",
                illustration: "images/r1_5.png",
                text: "...можеш передбачити, хто замовить лате. Але на тебе полює Часова поліція, а ще день не задався з початком ☣️ зомбі апокаліпсісу.",
                conditions: {
                    success: { 
                        threshold: 12, 
                        effects: [
                            { type: "luck", value: 1, text: "+1☘️" },
                            { type: "gold", value: 1, text: "+1🪙" }
                        ],
                        text: "+1☘️ +1🪙"
                    },
                    failure: { 
                        threshold: 10, 
                        effects: [
                            { type: "gold", value: -1, text: "-1🪙" },
                            { type: "health", value: -1, text: "-1❤️" }
                        ],
                        text: "-1🪙 -1❤️"
                    },
                    special: {
                        condition: "isSumEven",
                        effects: [
                            { type: "health", value: 1, text: "+1❤️" }
                        ],
                        text: "Ціле +1❤️"
                    }
                }
            },
            {
                id: 6,
                title: "Відьма з потойбіччя чи Напівдохлий Кіт Шрьодінгера",
                illustration: "images/r1_6.png",
                text: "Відьма принесла в кафе дохлого кота і намагається його оживити. Зробиш коту штучне дихання, то відьма подарує тобі💋, та й кіт поділиться одним з дев\'яти ❤️... Аби тільки не викликати більше Зло👿",
                conditions: {
                    success: { 
                        threshold: 13, 
                        effects: [
                            { type: "health", value: 2, text: "+2❤️" }
                        ],
                        text: "+2❤️"
                    },
                    failure: { 
                        threshold: 9, 
                        effects: [
                            { type: "health", value: -1, text: "-1❤️" },
                            { type: "luck", value: -1, text: "-1☘️" }
                        ],
                        text: "-1❤️ -1☘️"
                    },
                    special: {
                        condition: "isSumEven",
                        effects: [
                            { type: "health", value: 1, text: "+1❤️" }
                        ],
                        text: "Ціле +1❤️"
                    }
                }
            }
        ],
        bosses: [
            {
                id: "boss1",
                title: "💀Біцепс Бро💀",
                illustration: "images/r1_boss1.png",
                text: "Скрутить тебе в блендер за секунду",
                conditions: {
                    success: { 
                        threshold: 16, 
                        effects: [
                            { type: "health", value: 2, text: "+2❤️" },
                            { type: "gold", value: 2, text: "+2🪙" },
                            { type: "luck", value: 2, text: "+2☘️" }
                        ],
                        text: "+2❤️ +2🪙 +2☘️"
                    },
                    failure: { 
                        threshold: 14, 
                        effects: [
                            { type: "health", value: -3, text: "-3❤️" },
                            { type: "luck", value: -2, text: "-2☘️" }
                        ],
                        text: "-3❤️ -2☘️"
                    },
                    special: {
                        condition: "triple",
                        effects: [
                            { type: "health", value: 2, text: "+2❤️" },
                            { type: "gold", value: 1, text: "+1🪙" },
                            { type: "luck", value: 2, text: "+2☘️" }
                        ],
                        text: "Трійка +2❤️ +1🪙 +2☘️"
                    }
                }
            },
            {
                id: "boss2",
                title: "💀Великий Бро💀",
                illustration: "images/r1_boss2.png",
                text: "Програєш — і станеш стильним килимком біля порогу",
                conditions: {
                    success: { 
                        threshold: 17, 
                        effects: [
                            { type: "gold", value: 3, text: "+3🪙" },
                            { type: "health", value: 2, text: "+2❤️" }
                        ],
                        text: "+3🪙 +2❤️"
                    },
                    failure: { 
                        threshold: 14, 
                        effects: [
                            { type: "health", value: -3, text: "-3❤️" },
                            { type: "gold", value: -2, text: "-2🪙" }
                        ],
                        text: "-3❤️ -2🪙"
                    },
                    special: {
                        condition: "sequence",
                        effects: [
                            { type: "health", value: 2, text: "+2❤️" }
                        ],
                        text: "Стріт +2❤️"
                    }
                }
            }
        ]
    },
    'Зов чорної безодні': {
        quests: [
            {
                id: 1,
                title: "r2_1",
                illustration: "images/r2_1.png",
                text: "Дух чаю кидає виклик: зроби чай замість кави, або тебе будуть називати в усьому Чайником!",
                conditions: {
                    success: { 
                        threshold: 13, 
                        effects: [
                            { type: "luck", value: 1, text: "+1☘️" },
                            { type: "gold", value: 1, text: "+1🪙" }
                        ],
                        text: "+1☘️ +1🪙"
                    },
                    failure: { 
                        threshold: 10, 
                        effects: [
                            { type: "health", value: -1, text: "-1❤️" },
                            { type: "luck", value: -1, text: "-1☘️" }
                        ],
                        text: "-1❤️ -1☘️"
                    },
                    special: { 
                        condition: "allEven",
                        effects: [
                            { type: "gold", value: 2, text: "+2🪙" }
                        ],
                        text: "All even numbers +2🪙"
                    }
                }
            },
            {
                id: 2,
                title: "r2_2",
                illustration: "images/r2_2.png",
                text: "Він збирається воскресити твоїх конкурентів, а потім зварити Тебе за недолиту каву!",
                conditions: {
                    success: { 
                        threshold: 14, 
                        effects: [
                            { type: "gold", value: 2, text: "+2🪙" },
                            { type: "luck", value: 1, text: "+1☘️" }
                        ],
                        text: "+2🪙 +1☘️"
                    },
                    failure: { 
                        threshold: 11, 
                        effects: [
                            { type: "health", value: -1, text: "-1❤️" },
                            { type: "gold", value: -1, text: "-1🪙" }
                        ],
                        text: "-1❤️ -1🪙"
                    },
                    special: {
                        condition: "allEven",
                        effects: [
                            { type: "luck", value: 1, text: "+1☘️" }
                        ],
                        text: "All even numbers +1☘️"
                    }
                }
            },
            {
                id: 3,
                title: "r2_3 Карткова Бійка",
                illustration: "images/r2_3.png",
                text: "текст",
                conditions: {
                    success: { 
                        threshold: 13, 
                        effects: [
                            { type: "luck", value: 2, text: "+2☘️" },
                            { type: "health", value: 1, text: "+1❤️" }
                        ],
                        text: "+2☘️ +1❤️"
                    },
                    failure: { 
                        threshold: 12, 
                        effects: [
                            { type: "health", value: -2, text: "-2❤️" },
                            { type: "luck", value: -1, text: "-1☘️" }
                        ],
                        text: "-2❤️ -1☘️"
                    },
                    special: {
                        condition: "sequence",
                        effects: [
                            { type: "gold", value: 2, text: "+2🪙" },
                            { type: "health", value: 1, text: "+1❤️" }
                        ],
                        text: "Get a sequence +2🪙 and +1❤️"
                    }
                }
            },
            {
                id: 4,
                title: "r2_4",
                illustration: "images/r2_4.png",
                text: "текст",
                conditions: {
                    success: { 
                        threshold: 12, 
                        effects: [
                            { type: "gold", value: 1, text: "+1🪙" },
                            { type: "luck", value: 1, text: "+1☘️" }
                        ],
                        text: "+1🪙 +1☘️"
                    },
                    failure: { 
                        threshold: 11, 
                        effects: [
                            { type: "luck", value: -1, text: "-1☘️" },
                            { type: "health", value: -1, text: "-1❤️" }
                        ],
                        text: "-1☘️ -1❤️"
                    },
                    special: {
                        condition: "triple",
                        effects: [
                            { type: "health", value: 1, text: "+1❤️" },
                            { type: "luck", value: 2, text: "+2☘️" }
                        ],
                        text: "triple +1❤️ and +2☘️"
                    }
                }
            },
            {
                id: 5,
                title: "r2_5",
                illustration: "images/r2_5.png",
                text: "текст",
                conditions: {
                    success: { 
                        threshold: 15, 
                        effects: [
                            { type: "luck", value: 1, text: "+1☘️" },
                            { type: "gold", value: 1, text: "+1🪙" }
                        ],
                        text: "+1☘️ +1🪙"
                    },
                    failure: { 
                        threshold: 12, 
                        effects: [
                            { type: "gold", value: -1, text: "-1🪙" },
                            { type: "health", value: -1, text: "-1❤️" }
                        ],
                        text: "-1🪙 -1❤️"
                    },
                    special: {
                        condition: "isSumEven",
                        value: 7,
                        effects: [
                            { type: "health", value: 1, text: "+1❤️" }
                        ],
                        text: "Ціле +1❤️"
                    }
                }
            },
            {
                id: 6,
                title: "r2_6",
                illustration: "images/r2_6.png",
                text: "текст",
                conditions: {
                    success: { 
                        threshold: 16, 
                        effects: [
                            { type: "luck", value: 1, text: "+1☘️" },
                            { type: "health", value: 1, text: "+1❤️" }
                        ],
                        text: "+1☘️ +1❤️"
                    },
                    failure: { 
                        threshold: 13, 
                        effects: [
                            { type: "gold", value: -1, text: "-1🪙" },
                            { type: "luck", value: -1, text: "-1☘️" }
                        ],
                        text: "-1🪙 -1☘️"
                    },
                    special: {
                        condition: "isSumEven",
                        value: 7,
                        effects: [
                            { type: "health", value: 1, text: "+1❤️" },
                            { type: "gold", value: 1, text: "+1🪙" }
                        ],
                        text: "Ціле +1❤️, +1🪙"
                    }
                }
            }
        ],
        bosses: [
            {
                id: "r2_boss",
                title: "💀Сонний Ктулху💀",
                illustration: "images/r2_boss1.png",
                text: "Переможи Ктулху у кавовій битві — і збережеш розум; програєш — і приєднаєшся до його культу назавжди.",
                conditions: {
                    success: { 
                        threshold: 18, 
                        effects: [
                            { type: "gold", value: 3, text: "+3🪙" },
                            { type: "health", value: 2, text: "+2❤️" }
                        ],
                        text: "+3🪙 +2❤️"
                    },
                    failure: { 
                        threshold: 16, 
                        effects: [
                            { type: "health", value: -3, text: "-3❤️" },
                            { type: "gold", value: -2, text: "-2🪙" }
                        ],
                        text: "-3❤️ -2🪙"
                    },
                    special: {
                        condition: "sequence",
                        effects: [
                            { type: "health", value: 1, text: "+1❤️" },
                            { type: "gold", value: 1, text: "+1🪙" }
                        ],
                        text: "Get a sequence +1❤️, +1🪙"
                    }
                }
            }
        ]
    },
    'Космічна Кав\'ярня': {
        quests: [
            {
                id: 1,
                title: "r3_1 The Chocolate Alchemist",
                illustration: "images/r3_1.png",
                text: "An alchemist seeks the perfect hot chocolate. Can you create magic in a cup?",
                conditions: {
                    success: { 
                        threshold: 17, 
                        effects: [
                            { type: "gold", value: 2, text: "+2🪙" },
                            { type: "luck", value: 1, text: "+1☘️" }
                        ],
                        text: "+2🪙 +1☘️"
                    },
                    failure: { 
                        threshold: 13, 
                        effects: [
                            { type: "luck", value: -2, text: "-2☘️" },
                            { type: "health", value: -1, text: "-1❤️" }
                        ],
                        text: "-2☘️ -1❤️"
                    },
                    special: { 
                        condition: "isSumEven",
                        value: 5,
                        effects: [
                            { type: "health", value: 2, text: "+2❤️" }
                        ],
                        text: "Ціле +2❤️"
                    }
                }
            },
            {
                id: 2,
                title: "r3_2",
                illustration: "images/r3_2.png",
                text: "текст",
                conditions: {
                    success: { 
                        threshold: 14, 
                        effects: [
                            { type: "gold", value: 2, text: "+2🪙" },
                            { type: "health", value: 1, text: "+1❤️" }
                        ],
                        text: "+2🪙 +1❤️"
                    },
                    failure: { 
                        threshold: 12, 
                        effects: [
                            { type: "health", value: -1, text: "-1❤️" },
                            { type: "luck", value: -1, text: "-1☘️" }
                        ],
                        text: "-1❤️ -1☘️"
                    },
                    special: {
                        condition: "allEven",
                        effects: [
                            { type: "luck", value: 1, text: "+1☘️" },
                            { type: "health", value: 1, text: "+1❤️" }
                        ],
                        text: "All even numbers +1☘️, +1❤️"
                    }
                }
            },
            {
                id: 3,
                title: "r3_3",
                illustration: "images/r_null.png",
                text: "текст",
                conditions: {
                    success: { 
                        threshold: 15, 
                        effects: [
                            { type: "luck", value: 2, text: "+2☘️" },
                            { type: "gold", value: 1, text: "+1🪙" }
                        ],
                        text: "+2☘️ +1🪙"
                    },
                    failure: { 
                        threshold: 12, 
                        effects: [
                            { type: "health", value: -2, text: "-2❤️" },
                            { type: "luck", value: -1, text: "-1☘️" }
                        ],
                        text: "-2❤️ -1☘️"
                    },
                    special: {
                        condition: "sequence",
                        effects: [
                            { type: "gold", value: 2, text: "+2🪙" },
                            { type: "health", value: 1, text: "+1❤️" }
                        ],
                        text: "Get a sequence +2🪙 and +1❤️"
                    }
                }
            },
            {
                id: 4,
                title: "r3_4",
                illustration: "images/r_null.png",
                text: "A translucent figure appears, requesting their 'usual'. What was their usual again?",
                conditions: {
                    success: { 
                        threshold: 13, 
                        effects: [
                            { type: "gold", value: 1, text: "+1🪙" },
                            { type: "luck", value: 1, text: "+1☘️" }
                        ],
                        text: "+1🪙 +1☘️"
                    },
                    failure: { 
                        threshold: 11, 
                        effects: [
                            { type: "luck", value: -1, text: "-1☘️" },
                            { type: "health", value: -1, text: "-1❤️" }
                        ],
                        text: "-1☘️ -1❤️"
                    },
                    special: {
                        condition: "triple",
                        effects: [
                            { type: "health", value: 1, text: "+1❤️" },
                            { type: "luck", value: 2, text: "+2☘️" }
                        ],
                        text: "triple +1❤️ and +2☘️"
                    }
                }
            },
            {
                id: 5,
                title: "r3_5",
                illustration: "images/r_null.png",
                text: "текст",
                conditions: {
                    success: { 
                        threshold: 16, 
                        effects: [
                            { type: "luck", value: 1, text: "+1☘️" },
                            { type: "gold", value: 1, text: "+1🪙" }
                        ],
                        text: "+1☘️ +1🪙"
                    },
                    failure: { 
                        threshold: 14, 
                        effects: [
                            { type: "gold", value: -1, text: "-1🪙" },
                            { type: "health", value: -1, text: "-1❤️" }
                        ],
                        text: "-1🪙 -1❤️"
                    },
                    special: {
                        condition: "isSumEven",
                        value: 7,
                        effects: [
                            { type: "health", value: 1, text: "+1❤️" }
                        ],
                        text: "Ціле +1❤️"
                    }
                }
            },
            {
                id: 6,
                title: "r3_6",
                illustration: "images/r_null.png",
                text: "текст",
                conditions: {
                    success: { 
                        threshold: 16, 
                        effects: [
                            { type: "luck", value: 1, text: "+1☘️" },
                            { type: "health", value: 1, text: "+1❤️" }
                        ],
                        text: "+1☘️ +1❤️"
                    },
                    failure: { 
                        threshold: 13, 
                        effects: [
                            { type: "gold", value: -1, text: "-1🪙" },
                            { type: "luck", value: -1, text: "-1☘️" }
                        ],
                        text: "-1🪙 -1☘️"
                    },
                    special: {
                        condition: "isSumEven",
                        value: 7,
                        effects: [
                            { type: "health", value: 1, text: "+1❤️" }
                        ],
                        text: "Ціле +1❤️"
                    }
                }
            }
        ],
        bosses: [
            {
                id: "r3_boss",
                title: "💀The Chocolate Titan💀",
                illustration: "images/r_null.png",
                text: "A colossal being made of molten chocolate challenges you to create the ultimate dessert drink!",
                conditions: {
                    success: { 
                        threshold: 21, 
                        effects: [
                            { type: "luck", value: 4, text: "+4☘️" },
                            { type: "gold", value: 3, text: "+3🪙" }
                        ],
                        text: "+4☘️ +3🪙"
                    },
                    failure: { 
                        threshold: 19, 
                        effects: [
                            { type: "health", value: -4, text: "-4❤️" },
                            { type: "luck", value: -2, text: "-2☘️" }
                        ],
                        text: "-4❤️ -2☘️"
                    },
                    special: {
                        condition: "triple",
                        effects: [
                            { type: "health", value: 4, text: "+4❤️" },
                            { type: "gold", value: 4, text: "+4🪙" },
                            { type: "luck", value: 4, text: "+4☘️" }
                        ],
                        text: "Triple +4❤️ +4🪙 +4☘️"
                    }
                }
            }
        ]
    }
};

// Special condition checkers
const conditionCheckers = {
    // Check if there are at least two dice with the same value
    pair: (dice) => {
        const counts = new Map();
        dice.forEach(value => counts.set(value, (counts.get(value) || 0) + 1));
        return Array.from(counts.values()).some(count => count >= 2);
    },

    // Check if there are three dice with the same value
    triple: (dice) => {
        const counts = new Map();
        dice.forEach(value => counts.set(value, (counts.get(value) || 0) + 1));
        return Array.from(counts.values()).some(count => count === 3);
    },
    
    // Check if all dice values are even    
    allEven: (dice) => dice.every(value => value % 2 === 0),
    
    sequence: (dice) => {
        const sorted = [...dice].sort((a, b) => a - b);
        for (let i = 1; i < sorted.length; i++) {
            if (sorted[i] !== sorted[i-1] + 1) return false;
        }
        return true;
    },
    
    // Check if all dice values are the same
    allSame: (dice) => dice.every(value => value === dice[0]),
    
    // Check if the sum of dice values is even
    isSumEven: (dice) => dice.reduce((sum, die) => sum + die, 0) % 2 === 0,
    
    // Check if the sum of dice values is odd
    isSumOdd: (dice) => dice.reduce((sum, die) => sum + die, 0) % 2 === 1
}; 