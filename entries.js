export const PATH = {
    PriceList: '#',
    ImgModels: './assets/img/models/',
    Root: '/',
}

export const CONTACTS = {
    tel: "8 (804) 333-74-14",
    email: "info@itank-russia.ru",
    address: ['г. Санкт-Петербург, Лиговский пр. 235 (магазин)','г. Сочи, ул. Гагарина 43 (магазин)']
}
// default_link - первая по счету в списке MODELS (iTank)
export const MODELS = {
    iTank: {
        name: 'iTank',
        active: true,
        modify: {
            '3900W': {
                colors: {
                    red: { poster: '1.png', gallery: ['1.jpg','2.jpg','3.jpg','4.jpg'] },
                    black: { poster: '1.png', gallery: ['1.jpg','2.jpg','3.jpg','4.jpg'] },
                    white: { poster: '1.png', gallery: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'] }
                },
                def_color: 'red',
                power: '3900W',
                speed: '45 км/ч (70 км/ч опционально)',
                range: 'до 120 км (<45 км/ч)',
                other: 'Защита от воды IP65',
            }
        }
    },
    iTango: {
        name: 'iTango',
        active: true,
        modify: {
            '1200W': {
                colors: {
                    red: { poster: '1.png', gallery: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'] },
                    black: { poster: '1.png', gallery: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'] },
                    white: { poster: '1.png', gallery: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'] },
                    blue: { poster: '1.png', gallery: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'] },
                    green: { poster: '1.png', gallery: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'] },
                },
                def_color: 'white',
                power: '1200W',
                speed: '45 км/ч',
                range: 'до 80 км',
                other: 'Защита от воды IP65',
            }
        }
    },
    iLark: {
        name: 'iLark',
        active: true,
        modify: {
            '180W': {
                colors: {
                    orange: { poster: '1.png', gallery: ['1.jpg','2.jpg'] },
                    black: { poster: '1.png', gallery: ['1.jpg','2.jpg'] },
                    green: { poster: '1.png', gallery: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'] },
                    pink: { poster: '1.png', gallery: ['1.jpg','2.jpg'] },
                },
                def_color: 'green',
                power: '180W',
                speed: '25 км/ч',
                range: 'до 35 км',
                other: 'Защита от воды IP65',
            },
            '350W': {
                colors: {
                    orange: { poster: '1.png', gallery: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg'] },
                },
                def_color: 'orange',
                power: '350W',
                speed: '25 км/ч',
                range: 'до 35 км',
                other: 'Защита от воды IP65',
            },
        }
    },
    iDuo: {
        name: 'iDuo',
        active: true,
        modify: {
            '300W': {
                colors: {
                    red: { poster: '1.png', gallery: ['1.jpg','2.jpg'] },
                    black: { poster: '1.png', gallery: ['1.jpg','2.jpg'] },
                    white: { poster: '1.png', gallery: ['1.jpg','2.jpg'] },
                    skyblue: { poster: '1.png', gallery: ['1.jpg','2.png','3.jpg'] },
                    yellow: { poster: '1.png', gallery: ['1.jpg','2.jpg'] },
                },
                def_color: 'white',
                power: '300W',
                speed: '25 км/ч',
                range: 'до 35 км',
                other: 'Защита от воды IP65',
            }
        }
    },
};

export const COLORS = {
    red: 'Красный',
    orange: 'Оранжевый',
    green: 'Зеленый',
    blue: 'Синий',
    skyblue: 'Голубой',
    white: 'Белый',
    black: 'Черный',
    yellow: 'Желтый',
    pink: 'Розовый'
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
    pink: '#fd9ec8'
}
