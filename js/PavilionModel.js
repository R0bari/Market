types = [ 'cafe', 'clothes', 'sport', 'macdonalds', 'kfc', 'burger-king' ];

fontColors = [
    { type: 'cafe', color: 'black' },
    { type: 'clothes', color: 'black' },
    { type: 'sport', color: 'black' },
    { type: 'macdonalds', color: 'rgb(255, 224, 88)' },
    { type: 'kfc', color: 'white' },
    { type: 'burger-king', color: 'rgb(218, 153, 33)'}
];

backGroundFloorColors = [
    'rgb(200, 200, 200)',
    'rgba(255, 200, 200)'
];

backGroundHoverColors = [
    { type: 'cafe', color: 'rgb(189, 163, 132)' },
    { type: 'clothes', color: 'rgb(230, 168, 216)' },
    { type: 'sport', color: ' rgb(157, 240, 255)' },
    { type: 'macdonalds', color: 'rgb(218, 54, 33)' },
    { type: 'kfc', color: 'rgb(218, 54, 33)' },
    { type: 'burger-king', color: 'rgb(65, 67, 230)' }
]

texts = [
    { type: 'cafe', text: 'Clothes.</br>Here you can buy any stylish staff you need.' },
    { type: 'clothes', text: 'Clothes.</br>Here you can buy any stylish staff you need.' },
    { type: 'sport', text: 'Sport.</br>Basketball, Volleyball, Football - nevermind. We hate everything! Let\'s just get drunk together!' },
    { type: 'macdonalds', text: 'Macdonalds</br>We hate chickens. That\'s why we cook them for you. Bless you before the big lunch!' },
    { type: 'kfc', text: 'KFC.</br>Sanders already here! Get prepared for our uber-mega-spicy fresh chicken-meet!' },
    { type: 'burger-king', text: 'Burger King.</br>English, friend.</br>Do you speak it?</br>I dare, I double dare you!' }
]

floors = [
    document.querySelector('.first-floor'),
    document.querySelector('.second-floor')
]

shops = [
    new Pavilion('cafe', 0, 0, 0, '150px', '150px', 'bottom'),
    new Pavilion('sport', 0, 0, 200, '150px', '370px', 'right'),
    new Pavilion('clothes', 0, 200, 420, '150px', '150px', 'top'),
    new Pavilion('macdonalds', 0, 200, 000, '300px', '300px', 'bottom right'),
    new Pavilion('kfc', 0, 549, 000, '300px', '300px', 'bottom left'),
    new Pavilion('clothes', 0, 649, 370, '200px', '200px', 'top'),
    new Pavilion('cafe', 0, 400, 370, '220px', '200px', 'top'),

    new Pavilion('sport', 1, 0, 0, '150px', '370px', 'right'),
    new Pavilion('cafe', 1, 0, 420, '150px', '150px', 'top'),
    new Pavilion('clothes', 1, 699, 0, '150px', '200px', 'left'),
    new Pavilion('macdonalds', 1, 200, 270, '300px', '300px', 'top right'),
    new Pavilion('kfc', 1, 549, 270, '300px', '300px', 'top'),
    new Pavilion('cafe', 1, 200, 0, '350px', '100px', 'bottom')
];
