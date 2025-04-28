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
                text: "👻Вони тебе налякають і з'їдять твій макаронц. Наваляй їм по саме потойбіччя.",
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
                text: "...можеш передбачити, хто замовить лате. Але на тебе полює 👮Часова поліція👮, а ще день не задався з початком 🧟зомбі апокаліпсісу🧟.",
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
                text: "Програєш — і станеш його стильним килимком біля порогу",
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
    'Безодня Ктулху': {
        quests: [
            {
                id: 1,
                title: "👻☕︎ Чайник Бабайник",
                illustration: "images/r2_1.png",
                text: "Заварись або здохни!",
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
                title: "Некрофіломант",
                illustration: "images/r2_2.png",
                text: "Він збирається ☠️ воскресити твоїх конкурентів, а потім ♨️ зварити Тебе за недолиту каву!",
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
                title: "Демониця бажає зробити тебе своїм фамільяром",
                illustration: "images/r2_3.png",
                text: "Якщо встигнеш розкусити її трюк — фінал буде не смертельним, якщо ні — прокинешся в казані на вечірці демонів!",
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
                title: "Кава Гет Овер Хір!",
                illustration: "images/r2_4.png",
                text: "Він нальє гарячого молочка тобі в очі... з малюнком сердечка.",
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
                title: "Стародавній египетський демонюка",
                illustration: "images/r2_5.png",
                text: "Ти не знаєш як тебе сюди занесло, але потрібно розібратись з цим гівнюком, бо тебе можуть віджарити.",
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
                title: "Оце Блять Гриб🍄!",
                illustration: "images/r2_6.png",
                text: "Втримати свої штани сухими, або будеш маринованим у його спорах",
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
                text: "Переможи Ктулху у кавовій битві — і отримай 666 грн чайових; програєш — і приєднаєшся до його культу назавжди.",
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
    'Повстання машин': {
        quests: [
            {
                id: 1,
                title: "(ಠ_⊙)",
                illustration: "images/r3_1.png",
                text: "Дічь якась",
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
                title: "🦾БробоКоп",
                illustration: "images/r3_2.png",
                text: "Обережно, в нього включено режим 'всіх заїбашити'",
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
                title: "🗑️ЕлектроШокоМусорник",
                illustration: "images/r3_3.png",
                text: "Він брудний, злий і переповнений. Якщо підкупиш його огризком — вийдеш живим, зажлобишся — станеш його сміттям",
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
                title: "🕶Банда ВіброДронів-Термінаторів",
                illustration: "images/r3_4.png",
                text: "Звісно Ти не Джон Коноренко, але спробуй розібрати ці Хромовані Кавоварки, інакше тебе проапгрейдять посмертно",
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
                title: "Меха-Чарівниця 2.0",
                illustration: "images/r3_5.png",
                text: "Попереду дужи інтимна битва - зламаєш її протоколи і вона стане твоїм особистим 'репетитором', програєш і вона перетворить тебе на персональний манекен.",
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
                title: "Неонові анархісти",
                illustration: "images/r3_6.png",
                text: "Якщо не переможеш, твої фото стануть їх особистим контентом для OnlyFans!",
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
                title: "🤖Фінальний бос — 'Капучінатор' 3000🤖",
                illustration: "images/r3_boss1.png",
                text: "Від тебе залишиться лише пил і трішки бруду на його іржавій поверхні",
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
                            { type: "health", value: -1, text: "-4❤️" },
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