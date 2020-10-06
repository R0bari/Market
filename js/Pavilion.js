class Pavilion {
    fontColor;    
    type;
    hoverBackGroundColor;
    positionX; positionY; width; height;
    floorNumber;
    entryDirection; //  'top', 'left', 'right', 'bottom'

    constructor(type, flofloorNumberor, positionX, positionY, width, height, entryDirection) {
        this.type = type;
        this.floorNumber = flofloorNumberor;
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = width;
        this.height = height;
        this.hoverBackGroundColor = this.determineHoverBgColor();
        this.fontColor = this.determineFontColor();
        this.entryDirection = entryDirection;
    }

    determineFontColor() {
        let currentColor;
        PavilionModel.fontColors.forEach(pair => {
            if (this.type === pair.type) {
                currentColor = pair.color;
            }
        });
        return currentColor;
    }

    determineHoverBgColor() {
        let currentBgColor;
        PavilionModel.backGroundHoverColors.forEach(pair => {
            if (this.type === pair.type) {
                currentBgColor = pair.color;
            }
        });
        return currentBgColor;
    }
    determineBgColor() {
        let currentBgFloorColor;
        PavilionModel.backGroundFloorColors.forEach(pair => {
            if (this.type === pair.type) {
                currentBgFloorColor = pair.color;
            }
        });
        return currentBgFloorColor;
    }
    determineInnerText() {
        let currentInnerText;
        PavilionModel.texts.forEach(pair => {
            if (this.type === pair.type) {
                currentInnerText = pair.text;
            }
        });
        return currentInnerText;
    }

    formDOMElement() {
        var pavilion = document.createElement('div');
        pavilion.className = 'pavilion';
        pavilion.style.left = (PavilionModel.floors[this.floorNumber].offsetLeft + this.positionX) + 'px';
        pavilion.style.top = (PavilionModel.floors[this.floorNumber].offsetTop + this.positionY) + 'px';
        pavilion.style.width = this.width;
        pavilion.style.height = this.height;
        pavilion.style.position = 'absolute';
        pavilion.style.verticalAlign = 'auto';
        pavilion.style.padding = '20px';
        pavilion.style.boxSizing = 'border-box';
        pavilion.style.color = 'transparent';
        pavilion.innerHTML = this.determineInnerText();
        pavilion.style.textAlign = 'center';
        pavilion.style.fontSize = '18px';
        pavilion.style.fontWeight = 700;
        pavilion.style.fontFamily = '-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif';
        pavilion.backGroundColor = this.determineBgColor();
        pavilion.style.border = '2px solid black';

        if (contains(this.entryDirection, 'left')) {
            pavilion.style.borderLeft = 'none';
        }
        if (contains(this.entryDirection, 'top')) {
            pavilion.style.borderTop = 'none';
        }
        if (contains(this.entryDirection, 'right')) {
            pavilion.style.borderRight = 'none';
        }
        if (contains(this.entryDirection, 'bottom')) {
            pavilion.style.borderBottom = 'none';
        }
        return pavilion;
    }
}

function contains(string, subString) {
    return (string.indexOf(subString) > -1);
}

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