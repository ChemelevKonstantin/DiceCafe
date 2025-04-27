const REALM_CARDS = {
    realm1: {
        quests: [
            {
                id: 1,
                title: "1 Зомбі-кавамани",
                illustration: "images/r1_1.png",
                text: "Зомбі-каваман вимагає флет-вайт з молоком єдинорога. Зроби крок назад, щоб уникнути його смертельного запаху.",
                conditions: {
                    success: { 
                        threshold: 13, 
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
                        text: "Pair +1🪙"
                    }
                }
            },
            {
                id: 2,
                title: "2 Опівнічна Кава-Паніка",
                illustration: "images/r1_2.png",
                text: "Натовп нічних сов вривається в кав'ярню, вимагаючи каву з кристалами енергії. Чи зможеш ти врятувати ситуацію?",
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
                            { type: "luck", value: 1, text: "+1☘️" },
                            { type: "health", value: 1, text: "+1❤️" },
                            { type: "gold", value: 1, text: "+1🪙" }
                        ],
                        text: "All even numbers +1☘️, +1❤️, and +1🪙"
                    }
                }
            },
            {
                id: 3,
                title: "3 Магічна Кавова Фасолина",
                illustration: "images/r1_3.png",
                text: "Ти знайшов кавову фасолину, яка світиться всіма кольорами веселки. Вона шепоче тобі секретні рецепти...",
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
                        threshold: 7, 
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
                title: "4 Привид Кавомана",
                illustration: "images/r1_4.png",
                text: "Привид кавомана з'являється з туману, вимагаючи свій 'звичайний' напій. Але його 'звичайний' - це щось неймовірне...",
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
                        threshold: 6, 
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
                title: "5 Подорожник у Часі",
                illustration: "images/r1_5.png",
                text: "Загадковий клієнт стверджує, що він замовив свій напій... у майбутньому! Чи зможеш ти розгадати цей часовий парадокс?",
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
                            { type: "health", value: 2, text: "+2❤️" },
                            { type: "gold", value: 2, text: "+2🪙" },
                            { type: "luck", value: 1, text: "+1☘️" }
                        ],
                        text: "Even number +2❤️, +2🪙, and +1☘️"
                    }
                }
            },
            {
                id: 6,
                title: "6 Кавовий Кіт Шрьодінгера",
                illustration: "images/r1_6.png",
                text: "Кіт, який одночасно і живий, і мертвий, вимагає каву з квантовою піною. Чи зможеш ти задовольнити його квантові смаки?",
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
                        threshold: 10, 
                        effects: [
                            { type: "gold", value: -1, text: "-1🪙" },
                            { type: "luck", value: -1, text: "-1☘️" }
                        ],
                        text: "-1🪙 -1☘️"
                    },
                    special: {
                        condition: "isSumEven",
                        effects: [
                            { type: "health", value: 2, text: "+2❤️" },
                            { type: "gold", value: 2, text: "+2🪙" },
                            { type: "luck", value: 1, text: "+1☘️" }
                        ],
                        text: "Even number +2❤️, +2🪙, and +1☘️"
                    }
                }
            }
        ],
        bosses: [
            {
                id: "boss1",
                title: "Битва з Демонічним Горилою-Баристою",
                illustration: "images/r1_boss1.png",
                text: "Чи зможеш ти перемогти демона в дуелі за чашку кави, чи залишишся без піт-стопу і зламаними нервами?",
                conditions: {
                    success: { 
                        threshold: 20, 
                        effects: [
                            { type: "health", value: 2, text: "+2❤️" },
                            { type: "gold", value: 2, text: "+2🪙" }
                        ],
                        text: "+2❤️ +2🪙"
                    },
                    failure: { 
                        threshold: 8, 
                        effects: [
                            { type: "health", value: -2, text: "-2❤️" },
                            { type: "luck", value: -2, text: "-2☘️" }
                        ],
                        text: "-2❤️ -2☘️"
                    },
                    special: {
                        condition: "triple",
                        effects: [
                            { type: "health", value: 3, text: "+3❤️" },
                            { type: "gold", value: 3, text: "+3🪙" },
                            { type: "luck", value: 3, text: "+3☘️" }
                        ],
                        text: "triple +3❤️, +3🪙, and +3☘️"
                    }
                }
            },
            {
                id: "boss2",
                title: "Text",
                illustration: "images/r1_boss2.png",
                text: "Text",
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
                        threshold: 7, 
                        effects: [
                            { type: "health", value: -3, text: "-3❤️" },
                            { type: "gold", value: -2, text: "-2🪙" }
                        ],
                        text: "-3❤️ -2🪙"
                    },
                    special: {
                        condition: "sequence",
                        effects: [
                            { type: "health", value: 2, text: "+2❤️" },
                            { type: "gold", value: 2, text: "+2🪙" },
                            { type: "luck", value: 2, text: "+2☘️" }
                        ],
                        text: "Get a sequence +2❤️, +2🪙, and +2☘️"
                    }
                }
            }
        ]
    },
    realm2: {
        quests: [
            {
                id: 1,
                title: "Чайний Дух",
                illustration: "images/r2_1.png",
                text: "Дух чаю кидає виклик: зроби ідеальний чай, або ж станеш його особистим чайником до кінця віків!",
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
                        threshold: 14, 
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
                title: "Повернення темного лорда",
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
                        threshold: 13, 
                        effects: [
                            { type: "health", value: -1, text: "-1❤️" },
                            { type: "gold", value: -1, text: "-1🪙" }
                        ],
                        text: "-1❤️ -1🪙"
                    },
                    special: {
                        condition: "allEven",
                        effects: [
                            { type: "luck", value: 1, text: "+1☘️" },
                            { type: "health", value: 1, text: "+1❤️" },
                            { type: "gold", value: 1, text: "+1🪙" }
                        ],
                        text: "All even numbers +1☘️, +1❤️, and +1🪙"
                    }
                }
            },
            {
                id: 3,
                title: "Карткова Бійка",
                illustration: "images/r2_3.png",
                text: "Бій за токени починається!",
                conditions: {
                    success: { 
                        threshold: 15, 
                        effects: [
                            { type: "luck", value: 2, text: "+2☘️" },
                            { type: "health", value: 1, text: "+1❤️" }
                        ],
                        text: "+2☘️ +1❤️"
                    },
                    failure: { 
                        threshold: 14, 
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
                title: "4 The Coffee Ghost",
                illustration: "images/r2_4.png",
                text: "A translucent figure appears, requesting their 'usual'. What was their usual again?",
                conditions: {
                    success: { 
                        threshold: 16, 
                        effects: [
                            { type: "gold", value: 1, text: "+1🪙" },
                            { type: "luck", value: 1, text: "+1☘️" }
                        ],
                        text: "+1🪙 +1☘️"
                    },
                    failure: { 
                        threshold: 16, 
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
                title: "5 The Time Traveler",
                illustration: "images/r2_5.png",
                text: "A customer claims they ordered their drink tomorrow. Can you make sense of this paradox?",
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
                        threshold: 15, 
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
                            { type: "health", value: 2, text: "+2❤️" },
                            { type: "gold", value: 2, text: "+2🪙" },
                            { type: "luck", value: 1, text: "+1☘️" }
                        ],
                        text: "Even number +2❤️ +2🪙 +1☘️"
                    }
                }
            },
            {
                id: 6,
                title: "6 The Time Traveler",
                illustration: "images/r2_6.png",
                text: "A customer claims they ordered their drink tomorrow. Can you make sense of this paradox?",
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
                        threshold: 14, 
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
                            { type: "health", value: 2, text: "+2❤️" },
                            { type: "gold", value: 2, text: "+2🪙" },
                            { type: "luck", value: 1, text: "+1☘️" }
                        ],
                        text: "Even number +2❤️, +2🪙, and +1☘️"
                    }
                }
            }
        ],
        bosses: [
            {
                id: "boss2",
                title: "The Tea Dragon",
                illustration: "images/r2_boss1.png",
                text: "A majestic dragon made of tea leaves demands the perfect brew. Can you satisfy its refined taste?",
                conditions: {
                    success: { 
                        threshold: 22, 
                        effects: [
                            { type: "gold", value: 3, text: "+3🪙" },
                            { type: "health", value: 2, text: "+2❤️" }
                        ],
                        text: "+3🪙 +2❤️"
                    },
                    failure: { 
                        threshold: 6, 
                        effects: [
                            { type: "health", value: -3, text: "-3❤️" },
                            { type: "gold", value: -2, text: "-2🪙" }
                        ],
                        text: "-3❤️ -2🪙"
                    },
                    special: {
                        condition: "sequence",
                        effects: [
                            { type: "health", value: 3, text: "+3❤️" },
                            { type: "gold", value: 3, text: "+3🪙" },
                            { type: "luck", value: 3, text: "+3☘️" }
                        ],
                        text: "Get a sequence +3❤️, +3🪙, and +3☘️"
                    }
                }
            }
        ]
    },
    realm3: {
        quests: [
            {
                id: 1,
                title: "1 The Chocolate Alchemist",
                illustration: "images/chocolate-alchemist.png",
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
                        threshold: 5, 
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
                        text: "Even number +2❤️"
                    }
                }
            },
            {
                id: 2,
                title: "2 The Midnight Rush",
                illustration: "images/midnight-rush.png",
                text: "A group of night owls storms in just before closing. Can you handle the pressure?",
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
                        threshold: 8, 
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
                            { type: "health", value: 1, text: "+1❤️" },
                            { type: "gold", value: 1, text: "+1🪙" }
                        ],
                        text: "All even numbers +1☘️, +1❤️, and +1🪙"
                    }
                }
            },
            {
                id: 3,
                title: "3 The Magic Bean",
                illustration: "images/magic-bean.png",
                text: "You found a mysterious glowing coffee bean. Do you dare to brew it?",
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
                        threshold: 7, 
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
                title: "4 The Coffee Ghost",
                illustration: "images/coffee-ghost.png",
                text: "A translucent figure appears, requesting their 'usual'. What was their usual again?",
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
                        threshold: 6, 
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
                title: "5 The Time Traveler",
                illustration: "images/time-traveler.png",
                text: "A customer claims they ordered their drink tomorrow. Can you make sense of this paradox?",
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
                        threshold: 10, 
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
                            { type: "health", value: 2, text: "+2❤️" },
                            { type: "gold", value: 2, text: "+2🪙" },
                            { type: "luck", value: 1, text: "+1☘️" }
                        ],
                        text: "Even number +2❤️, +2🪙, and +1☘️"
                    }
                }
            },
            {
                id: 6,
                title: "6 The Time Traveler",
                illustration: "images/time-traveler.png",
                text: "A customer claims they ordered their drink tomorrow. Can you make sense of this paradox?",
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
                        threshold: 10, 
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
                            { type: "health", value: 2, text: "+2❤️" },
                            { type: "gold", value: 2, text: "+2🪙" },
                            { type: "luck", value: 1, text: "+1☘️" }
                        ],
                        text: "Even number +2❤️, +2🪙, and +1☘️"
                    }
                }
            }
        ],
        bosses: [
            {
                id: "boss3",
                title: "The Chocolate Titan",
                illustration: "images/chocolate-titan.png",
                text: "A colossal being made of molten chocolate challenges you to create the ultimate dessert drink!",
                conditions: {
                    success: { 
                        threshold: 24, 
                        effects: [
                            { type: "luck", value: 4, text: "+4☘️" },
                            { type: "gold", value: 3, text: "+3🪙" }
                        ],
                        text: "+4☘️ +3🪙"
                    },
                    failure: { 
                        threshold: 5, 
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