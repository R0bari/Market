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

class Pavilion {
    element;
    fontColor;    
    type;
    backGroundColor;
    hoverBackGroundColor;

    constructor(elem) {
        this.element = elem;
        this.type = this.determineType();
        this.hoverBackGroundColor = this.determineHoverBgColor();
        this.backGroundColor = backGroundFloorColors[0];
        this.fontColor = this.determineFontColor();
    }

    addEventListeners() {
        this.element.addEventListener("mouseover", (event) => {
            event.target.style.color = this.fontColor;
            event.target.style.backgroundColor = this.hoverBackGroundColor;
        });
        this.element.addEventListener("mouseout", (event) => {
            event.target.style.color = 'transparent';
            event.target.style.backgroundColor = backGroundFloorColors[currentFloorNumber];
        });
    }

    determineFontColor() {
        let currentColor;
        fontColors.forEach(pair => {
            if (this.type === pair.type) {
                currentColor = pair.color;
            }

        });
        return currentColor;
    }
    determineType() {
        let currentType;
        types.forEach(type => {
            if (hasClass(this.element, type)) {
                currentType = type;
            }
        });
        return currentType;
    }
    determineHoverBgColor() {
        let currentBgColor;
        backGroundHoverColors.forEach(pair => {
            if (this.type === pair.type) {
                currentBgColor = pair.color;
            }
        });
        return currentBgColor;
    }
    determineBgColor() {
        let currentBgFloorColor;
        backGroundFloorColors.forEach(color => {
            if (this.type === pair.type) {
                currentBgFloorColor = pair.color;
            }
        });
        return currentBgFloorColor;
    }
}

function hasClass(element, className) {
    var rx = new RegExp('(?:^| )' + className + '(?: |$)');
    return rx.test(element.className);
}