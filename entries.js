export const PATH = {
    PriceList: [
        {  url: './uploads/presentation.pdf', name: 'Скачать презентацию' },
        //{  url: './uploads/catalog.pdf', name: 'Скачать каталог' },
    ],
    ImgModels: './assets/img/models/',
    Root: '/',
}

export const CONTACTS = {
    tel: [
        { href: "+79099588884", num: "+7 909 958-88-84" },
        // { href: "+78005516810", num: "8 800 551-68-10" },
        // { href: "+78005516810", num: "8 800 551-68-10" },
    ],
    // email: "eko-bike@mail.ru",
    email: '',
    address: [
        'г.Москва, ул. Осенняя д.17 корп.2',
        // 'г.Москва, ул. Средняя Первомайская д.3',
        // 'г.Санкт-Петербург  Большой Сампсониевский пр.29',
    ],
    yaMap: { src: 'https://yandex.ru/map-widget/v1/?um=constructor%3Ab37dae24b5bf34958515966874bf7b88e0ece9bced591634abebc32b03f94c78&amp;source=constructor"' },
    about: [
        'Eco-scooters (Эко-скутеры) - экология движения!',
        'Эко-скутеры это практичные, экологически чистые транспортные решения и технически совершенная продукция, постоянные инновации, безопасность и долговечность!',
        'В настоящее время мы специализируемся на бренде Doohan и являемся авторизованным импортером и дистрибьютором Doohan в России! В Москве в Крылатском открылся первый специализированный магазин и сервис электрических скутеров Doohan. Также, продукцию Doohan можно приобрести у авторизованных розничных продавцов, перечисленных в разделе Контакты.',
        'Компания Doohan была основана в 2014 году и инвестировала в эволюцию транспортных средств, создав инновационный электрический скутер. Компания Doohan стала пионером в разработке и производстве электрических скутеров нового поколения, и также продолжает оставаться передовым брендом индустрии. Ей доверяют сотни тысяч человек по всей Европе и во всем мире! Микро-мобильность это свобода передвижения!',
        'Электрические скутеры Doohan с каждым днем становятся все более популярными. У них масса преимуществ — такой личный транспорт не считается дорогим, его батарею легко перезаряжать, он мобильный, удобный, в городе вы забудете что такое пробки, а загородом электроскутер станет незаменимым транспортом для всей семьи. А самое главное, электрические скутеры – это активный транспорт, который имеет нулевой выброс углерода и потому его можно считать на сто процентов экологически безопасным!'
    ]
}

export const MODELS = {
    "iTank": {
        name: 'iTank',
        active: true,
        modify: {
            '1500W': {
                colors: {
                    red: { poster: '1.png', gallery: ['1.png','2.png','3.png','4.png'] },
                    black: { poster: '1.png', gallery: ['1.png','2.png','3.png','4.png'] },
                    blue: { poster: '1.png', gallery: ['1.png','2.png','3.png','4.png'] },
                    white: { poster: '1.png', gallery: ['1.png','2.png','3.png','4.png','5.png'] }
                },
                def_color: 'red',
                description: {
                    0: 'Мотор Bosch (Germany) 1500 W',
                    1: 'Максимальная скорость 45 км/ч',
                    2: 'Максимальная дистанция 120 км (<45 км/ч)',
                    3: 'Максимальная нагрузка 160 кг',
                    4: 'Аккумулятор 60V 26Ah*2 Lithium',
                    5: 'Время зарядки 3,5-8 часов',
                    6: 'Количество циклов зарядки 600',
                    7: 'Собственный вес 108 кг',
                    8: 'Габариты 1780x730x1030 (мм)',
                    9: 'Защита от воды IP65',
                },
                stock: 'out',
            },
            '3000W': {
                colors: {
                    red: { poster: '1.png', gallery: ['1.png','2.png','3.png','4.png'] },
                    black: { poster: '1.png', gallery: ['1.png','2.png','3.png','4.png'] },
                    blue: { poster: '1.png', gallery: ['1.png','2.png','3.png','4.png'] },
                    white: { poster: '1.png', gallery: ['1.png','2.png','3.png','4.png','5.png'] }
                },
                def_color: 'red',
                description: {
                    0: 'Мотор Bosch (Germany) 3000 W',
                    1: 'Максимальная скорость 70 км/ч',
                    2: 'Максимальная дистанция 120 км (<45 км/ч)',
                    3: 'Максимальная нагрузка 160 кг',
                    4: 'Аккумулятор 60V 26Ah*2 Lithium',
                    5: 'Время зарядки 3,5-8 часов',
                    6: 'Количество циклов зарядки 600',
                    7: 'Собственный вес 108 кг',
                    8: 'Габариты 1780x730x1030 (мм)',
                    9: 'Защита от воды IP65',
                },
                stock: 'in',
                price: '435 000 руб',
            },
        },
        def_modify: '3000W'
    },
    "iTango": {
        name: 'iTango',
        active: true,
        modify: {
            '1000W': {
                colors: {
                    red: { poster: '1.png', gallery: ['1.png','2.png','3.png','4.png','5.png'] },
                    black: { poster: '1.png', gallery: ['1.png','2.png','3.png','4.png','5.png'] },
                    white: { poster: '1.png', gallery: ['1.png','2.png','3.png','4.png','5.png'] },
                    blue: { poster: '1.png', gallery: ['1.png','2.png','3.png','4.png','5.png'] },
                    green: { poster: '1.png', gallery: ['1.png','2.png','3.png','4.png','5.png'] },
                },
                def_color: 'white',
                description: {
                    0: 'Мотор Bosch (Germany) 1000 W',
                    1: 'Максимальная скорость 45 км/ч',
                    2: 'Максимальная дистанция 50 км (<25 км/ч)',
                    3: 'Максимальная нагрузка 154 кг',
                    4: 'Аккумулятор 48V 20Ah Lithium',
                    5: 'Время зарядки 5-6 часов',
                    6: 'Количество циклов зарядки 600',
                    7: 'Собственный вес 65 кг',
                    8: 'Габариты 1648x651x1110 (мм)',
                    9: 'Защита от воды IP65',
                },
                stock: 'out',
            },
            '1200W': {
                colors: {
                    red: { poster: '1.png', gallery: ['1.png','2.png','3.png','4.png','5.png'] },
                    black: { poster: '1.png', gallery: ['1.png','2.png','3.png','4.png','5.png'] },
                    white: { poster: '1.png', gallery: ['1.png','2.png','3.png','4.png','5.png'] },
                    blue: { poster: '1.png', gallery: ['1.png','2.png','3.png','4.png','5.png'] },
                    green: { poster: '1.png', gallery: ['1.png','2.png','3.png','4.png','5.png'] },
                },
                def_color: 'white',
                description: {
                    0: 'Мотор Bosch (Germany) 1200 W',
                    1: 'Максимальная скорость 45 км/ч',
                    2: 'Максимальная дистанция 50 км (<25 км/ч) 70 км (<45 км/ч)',
                    3: 'Максимальная нагрузка 154 кг',
                    4: 'Аккумулятор 48V 26Ah Lithium',
                    5: 'Время зарядки 5-6 часов',
                    6: 'Количество циклов зарядки 600',
                    7: 'Собственный вес 65 кг',
                    8: 'Габариты 1648x651x1110 (мм)',
                    9: 'Защита от воды IP65',
                },
                stock: 'out',
            },
        }
    },
    "iLark": {
        name: 'iLark',
        active: true,
        modify: {
            '180W': {
                colors: {
                    orange: { poster: '1.png', gallery: ['1.png','6.png'] },
                    black: { poster: '1.png', gallery: ['1.png','6.png'] },
                    green: { poster: '1.png', gallery: ['1.png','2.png','3.png','4.png','5.png','6.png'] },
                    pink: { poster: '1.png', gallery: ['1.png','6.png'] },
                },
                def_color: 'green',
                description: {
                    0: 'Мотор Bosch (Germany) 180 W',
                    1: 'Максимальная скорость 25 км/ч',
                    2: 'Максимальная дистанция 25 км',
                    3: 'Максимальная нагрузка 100 кг',
                    4: 'Аккумулятор 48V 10Ah Lithium',
                    5: 'Время зарядки 5,5 часов',
                    6: 'Количество циклов зарядки 600',
                    7: 'Собственный вес 29 кг',
                    8: 'Габариты 1125x513x1100 (мм)',
                    9: 'Защита от воды IP65',
                },
                stock: 'out',
            },
            '300W': {
                colors: {
                    orange: { poster: '1.png', gallery: ['1.png','2.png','3.png','4.png','5.png','6.png','7.png'] },
                },
                def_color: 'orange',
                description: {
                    0: 'Мотор Bosch (Germany) 300 W',
                    1: 'Максимальная скорость 25 км/ч',
                    2: 'Максимальная дистанция 35 км',
                    3: 'Максимальная нагрузка 100 кг',
                    4: 'Аккумулятор 48V 15Ah Lithium',
                    5: 'Время зарядки 3 часа',
                    6: 'Количество циклов зарядки 600',
                    7: 'Собственный вес 32 кг',
                    8: 'Габариты 1125x513x1100 (мм)',
                    9: 'Защита от воды IP65',
                },
                stock: 'out',
            },
        }
    },
    "iDuo": {
        name: 'iDuo',
        active: true,
        modify: {
            '800W': {
                colors: {
                    red: { poster: '1.png', gallery: ['1.png','6.png'] },
                    black: { poster: '1.png', gallery: ['1.png','2.png','3.png','6.png'] },
                    white: { poster: '1.png', gallery: ['1.png','2.png','3.png','4.png','5.png','6.png'] },
                    skyblue: { poster: '1.png', gallery: ['1.png','2.png','3.png','4.png','5.png','6.png'] },
                    yellow: { poster: '1.png', gallery: ['1.png','6.png'] },
                },
                def_color: 'white',
                description: {
                    0: 'Мотор Bosch (Germany) 800 W',
                    1: 'Максимальная скорость 45 км/ч',
                    2: 'Максимальная дистанция 50 км (<20 км/ч)',
                    3: 'Максимальная нагрузка 150 кг',
                    4: 'Аккумулятор 48V 26Ah Lithium',
                    5: 'Время зарядки 6-8 часов',
                    6: 'Количество циклов зарядки 500',
                    7: 'Собственный вес 70 кг',
                    8: 'Габариты 1632x708x998 (мм)',
                    9: 'Защита от воды IP65',
                },
                stock: 'out',
            }
        }
    },
    "E-Swan": {
        name: 'E-Swan',
        active: true,
        modify: {
            '1200W': {
                colors: {
                    gray: { poster: '1.png', gallery: ['1.png'] },
                },
                def_color: 'gray',
                description: {
                    0: 'Мотор Bosch (Germany) 1200 W',
                    1: 'Максимальная скорость 45 км/ч',
                    2: 'Максимальная дистанция 180 км',
                    3: 'Максимальная нагрузка 160 кг',
                    4: 'Аккумулятор 60V 20Ah Lithium',
                    5: 'Время зарядки 5 часов',
                    6: 'Количество циклов зарядки 600',
                    7: 'Собственный вес 99 кг',
                    8: 'Габариты 1670x650x1055 (мм)',
                    9: 'Защита от воды IP65',
                },
                stock: 'out',
            }
        }
    },
    "Uranus": {
        name: 'Uranus',
        active: true,
        modify: {
            '3KW': {
                colors: {
                    white: { poster: '1.png', gallery: ['1.png'] },
                },
                def_color: 'white',
                description: {
                    0: 'Мотор Bosch (Germany) 3 KW',
                    1: 'Максимальная скорость 45 км/ч',
                    2: 'Максимальная дистанция 120 км (<45 км/ч)',
                    3: 'Максимальная нагрузка 160 кг',
                    4: 'Аккумулятор 72V 26Ah Lithium',
                    5: 'Время зарядки 6-8 часов',
                    6: 'Количество циклов зарядки 600',
                    7: 'Собственный вес 99 кг',
                    8: 'Габариты 1780x730x1030 (мм)',
                    9: 'Защита от воды IP65',
                },
                stock: 'out',
            }
        }
    },
    "Pizza": {
        name: 'Pizza',
        active: true,
        modify: {
            '1': {
                colors: {
                    white: { poster: '1.png', gallery: ['1.png'] },
                },
                def_color: 'white',
                description: {
                    0: 'Мотор Bosch (Germany) 1200/2000 W',
                    1: 'Максимальная скорость 45 км/ч',
                    2: 'Максимальная дистанция 50 км',
                    3: 'Максимальная нагрузка 150 кг',
                    4: 'Аккумулятор 60V 26Ah Lithium',
                    5: 'Время зарядки 6-8 часов',
                    6: 'Количество циклов зарядки 600',
                    7: 'Собственный вес 99 кг',
                    8: 'Габариты 1850x650x1150 (мм)',
                    9: 'Защита от воды IP65',
                },
                stock: 'out',
            }
        }
    },
    "Romex": {
        name: 'Romex',
        active: true,
        modify: {
            '1': {
                colors: {
                    mint: { poster: '1.png', gallery: ['1.png'] },
                },
                def_color: 'mint',
                description: {
                    0: 'Мотор Bosch (Germany) 3 KW',
                    1: 'Максимальная скорость 45/70 км/ч',
                    2: 'Максимальная дистанция 120 км (<45 км/ч)',
                    3: 'Максимальная нагрузка 160 кг',
                    4: 'Аккумулятор 72V 26Ah Lithium',
                    5: 'Время зарядки 6-8 часов',
                    6: 'Количество циклов зарядки 600',
                    7: 'Собственный вес 99 кг',
                    8: 'Габариты 1780x730x1030 (мм)',
                    9: 'Защита от воды IP65',
                },
                stock: 'out',
            }
        }
    },
};

export const STOCK = {
    "in": 'В наличии',
    "out": 'Нет в наличии'
}

export const DESC = {
    power: 'Мощность',
    speed: 'Скорость',
    range: 'Пробег',
}

export const COLORS = {
    red: 'Красный',
    orange: 'Оранжевый',
    green: 'Зеленый',
    blue: 'Синий',
    skyblue: 'Голубой',
    white: 'Белый',
    black: 'Черный',
    yellow: 'Желтый',
    pink: 'Розовый',
    mint: 'Мята',
    gray: 'Серый',
}

export const COLORS_CODES = {
    red: '#ff0000',
    orange: '#f8500f',
    green: '#07b213',
    blue: '#1358d7',
    skyblue: '#43dee4',
    white: '#ffffff',
    black: '#000000',
    yellow: '#ecde41',
    pink: '#fd9ec8',
    mint: '#56cebb',
    gray: '#bcc1c7',
}
