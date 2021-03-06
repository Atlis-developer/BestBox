
const defaultState = {
    catalog: [
        {
            name: 'BestBox — C3.0 №1',
            size: '3000 х 900 х 2500 мм (Ш х Г х В)',
            skin: ['роллетный профиль;', 'листовой прокат;', 'профлист.'],
            rollers: ['облегченные, пенозаполненные;', 'усиленные, экструдированные с пружинным механизмом, и замком нижней планки.'],
            mech_location: ['роллетный короб снаружи шкафа;', 'роллетный короб внутри шкафа.'],
            roof: ['листовой прокат;', 'профлист.'],
            shelves: ['1005 х 900 х 600 мм (4 шт.);', '1705 х 900 х 1200 мм (1 шт.);', '1705 х 900 х 630 мм (2 шт.).'],
            image: 'http://bestbox.kiev.ua/wp-content/uploads/2019/09/box_1-2-768x835.jpg'
        },
        {
            name: 'BestBox — C3.0 №2',
            size: '3000 х 900 х 2500 мм (Ш х Г х В)',
            skin: ['роллетный профиль;', 'листовой прокат;', 'профлист.'],
            rollers: ['облегченные, пенозаполненные;', 'усиленные, экструдированные с пружинным механизмом, и замком нижней планки.'],
            mech_location: ['роллетный короб снаружи шкафа;', 'роллетный короб внутри шкафа.'],
            roof: ['листовой прокат;', 'профлист.'],
            shelves: ['1355 х 900 х 800 мм (2 шт.);', '1355 х 900 х 550 мм (6 шт.).'],
            image: 'http://bestbox.kiev.ua/wp-content/uploads/2019/09/box_2-4-768x767.jpg'
        },
        {
            name: 'BestBox — C1.8',
            size: '1800 х 900 х 2500 мм (В х Г х Ш)',
            skin: ['роллетный профиль;', 'листовой прокат;', 'профлист.'],
            rollers: ['облегченные, пенозаполненные;', 'усиленные, экструдированные с пружинным механизмом, и замком нижней планки.'],
            mech_location: ['роллетный короб снаружи шкафа;', 'роллетный короб внутри шкафа.'],
            roof: ['листовой прокат;', 'профлист.'],
            shelves: ['1635 х 900 х 800 мм (1 шт.);', '1635 х 900 х 550 мм (3 шт.).'],
            image: 'http://bestbox.kiev.ua/wp-content/uploads/2019/09/box_3-3-768x767.jpg'
        },
        {
            name: 'BestBox — C1.2',
            size: '1365 х 900 х 2500 мм (В х Г х Ш)',
            skin: ['роллетный профиль;', 'листовой прокат;', 'профлист.'],
            rollers: ['облегченные, пенозаполненные;', 'усиленные, экструдированные с пружинным механизмом, и замком нижней планки.'],
            mech_location: ['роллетный короб снаружи шкафа;', 'роллетный короб внутри шкафа.'],
            roof: ['листовой прокат;', 'профлист.'],
            shelves: ['1200 х 900 х 800 мм (1 шт.);', '1200 х 900 х 550 мм (3 шт.).'],
            image: 'http://bestbox.kiev.ua/wp-content/uploads/2019/09/box_4-2-768x767.jpg'
        },
        {
            name: 'BestBox — C2.0',
            size: '2000 х 700 х 2000 мм (В х Г х Ш)',
            skin: ['роллетный профиль;', 'листовой прокат;', 'профлист.'],
            rollers: ['облегченные, пенозаполненные;', 'усиленные, экструдированные с пружинным механизмом, и замком нижней планки.'],
            mech_location: ['роллетный короб снаружи шкафа;', 'роллетный короб внутри шкафа.'],
            roof: ['листовой прокат;', 'профлист.'],
            shelves: ['2000 х 700 х 800 мм (1 шт.);', '2000 х 700 х 580 мм (2 шт.).'],
            image: 'http://bestbox.kiev.ua/wp-content/uploads/2019/09/box_5-1-768x767.jpg'
        }
    ],
    materials: [
        {
            material: [
                'Алюминиевый профиль с пенным наполнением. Наиболее оптимальное решение для использования в охраняемых помещениях (паркингах).'
            ],
            avatars: 'http://bestbox.kiev.ua/wp-content/uploads/2019/10/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2019-10-09_11-37-34-300x300.jpg'
        },
        {
            material: 
                'Алюминиевый профиль с дополнительным ребром жёсткости, что обеспечивает повышенную защиту от взломов.',
            avatars: 'http://bestbox.kiev.ua/wp-content/uploads/2019/10/2.png'
        },
        {
            material: 
                'Металлический профнастил – сочетание универсальности, надёжности и эстетичной привлекательности с низкой стоимостью.',
            avatars:  'http://bestbox.kiev.ua/wp-content/uploads/2019/10/3.png'
        },
        {
            material: 
            'Листовой прокат, обеспечивает высокую степень защиты изделия от внешнего воздействия и попыток взлома.',
            avatars:  'http://bestbox.kiev.ua/wp-content/uploads/2019/10/4.png'
        },
    ]
}

export const catalogReducer = (state = defaultState, action) => {

    switch (action.type) {
        default:
            return state;
    };
}


/*const defaultState = {
    names: [
        {name: 'BestBox — C3.0 №1'},
        {name: 'BestBox — C3.0 №2'},
        {name: 'BestBox — C1.8'},
        {name: 'BestBox — C1.2'},
        {name: 'BestBox — C2.0'},
    ],
    sizes:[
        {size: '3000 х 900 х 2500 мм (Ш х Г х В)'},
        {size: '3000 х 900 х 2500 мм (Ш х Г х В)'},
        {size: '1800 х 900 х 2500 мм (Ш х Г х В)'},
        {size: '1365 х 900 х 2500 мм (Ш х Г х В)'},
        {size: '2165 х 700 х 2000 мм (Ш х Г х В)'},
    ]
}*/