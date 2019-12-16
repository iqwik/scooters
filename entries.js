export const PATH = {
    PriceList: '#',
    ImgModels: './assets/img/models/',
    Root: '/',
}

export const CONTACTS = {
    tel: { href: "+78043337414", num: "8 (804) 333-74-14"},
    email: "info@itank-russia.ru",
    address: ['г. Москва, Осенняя ул., д.23'],
    yaMap: { src: 'https://yandex.ru/map-widget/v1/?um=constructor%3Aa9c290ef41c7d9834f65793d1edc7df3bf11fe3bd0eff4c9ad560737cccbc747&amp;source=constructor' },
    about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
}

export const MODELS = {
    "iTank": {
        name: 'iTank',
        active: true,
        modify: {
            '3900W': {
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
                    4: 'Аккумулятор 60V 26Ah Lithium',
                    5: 'Время зарядки 6-8 часов',
                    6: 'Количество циклов зарядки 600',
                    7: 'Собственный вес 99 кг',
                    8: 'Габариты 1780 мм * 730 мм * 1030 мм',
                    9: 'Защита от воды IP65',
                },
                stock: 'in',
                price: 'XXX XXX руб',
            }
        }
    },
    "iTango": {
        name: 'iTango',
        active: true,
        modify: {
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
                    power: '1200W',
                    speed: '45 км/ч',
                    range: 'до 80 км',
                    other: 'Защита от воды IP65',
                },
                stock: 'out',
            }
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
                    power: '180W',
                    speed: '25 км/ч',
                    range: 'до 35 км',
                    other: 'Защита от воды IP65',
                },
                stock: 'out',
            },
            '350W': {
                colors: {
                    orange: { poster: '1.png', gallery: ['1.png','2.png','3.png','4.png','5.png','6.png','7.png'] },
                },
                def_color: 'orange',
                description: {
                    power: '350W',
                    speed: '25 км/ч',
                    range: 'до 35 км',
                    other: 'Защита от воды IP65',
                },
                stock: 'out',
            },
        }
    },
    "iDuo": {
        name: 'iDuo',
        active: true,
        modify: {
            '300W': {
                colors: {
                    red: { poster: '1.png', gallery: ['1.png','6.png'] },
                    black: { poster: '1.png', gallery: ['1.png','2.png','3.png','6.png'] },
                    white: { poster: '1.png', gallery: ['1.png','2.png','3.png','4.png','5.png','6.png'] },
                    skyblue: { poster: '1.png', gallery: ['1.png','2.png','3.png','4.png','5.png','6.png'] },
                    yellow: { poster: '1.png', gallery: ['1.png','6.png'] },
                },
                def_color: 'white',
                description: {
                    power: '300W',
                    speed: '25 км/ч',
                    range: 'до 35 км',
                    other: 'Защита от воды IP65',
                },
                stock: 'out',
            }
        }
    },
    "E-Swan": {
        name: 'E-Swan',
        active: true,
        modify: {
            '1': {
                colors: {
                    gray: { poster: '1.png', gallery: ['1.png'] },
                },
                def_color: 'gray',
                description: {
                    speed: '25 км/ч',
                    range: 'до 35 км',
                    other: 'Защита от воды IP65',
                },
                stock: 'out',
            }
        }
    },
    "Uranus": {
        name: 'Uranus',
        active: true,
        modify: {
            '1': {
                colors: {
                    white: { poster: '1.png', gallery: ['1.png'] },
                },
                def_color: 'white',
                description: {
                    speed: '25 км/ч',
                    range: 'до 35 км',
                    other: 'Защита от воды IP65',
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
                    speed: '25 км/ч',
                    range: 'до 35 км',
                    other: 'Защита от воды IP65',
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
                    speed: '25 км/ч',
                    range: 'до 35 км',
                    other: 'Защита от воды IP65',
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
