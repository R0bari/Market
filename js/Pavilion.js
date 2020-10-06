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
        fontColors.forEach(pair => {
            if (this.type === pair.type) {
                currentColor = pair.color;
            }
        });
        return currentColor;
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
        backGroundFloorColors.forEach(pair => {
            if (this.type === pair.type) {
                currentBgFloorColor = pair.color;
            }
        });
        return currentBgFloorColor;
    }
    determineInnerText() {
        let currentInnerText;
        texts.forEach(pair => {
            if (this.type === pair.type) {
                currentInnerText = pair.text;
            }
        });
        return currentInnerText;
    }

    formDOMElement() {
        var pavilion = document.createElement('div');
        pavilion.className = 'pavilion';
        pavilion.style.left = (floors[this.floorNumber].offsetLeft + this.positionX) + 'px';
        pavilion.style.top = (floors[this.floorNumber].offsetTop + this.positionY) + 'px';
        pavilion.style.width = this.width;
        pavilion.style.height = this.height;
        pavilion.style.position = 'absolute';
        pavilion.style.verticalAlign = 'auto';
        pavilion.style.padding = '20px';
        pavilion.style.boxSizing = 'border-box';
        pavilion.style.color = 'transparent';
        pavilion.innerHTML = this.determineInnerText();
        pavilion.style.textAlign = 'center';
        pavilion.style.fontSize = '20px';
        pavilion.style.fontWeight = 700;
        pavilion.backGroundColor = this.determineBgColor();
        pavilion.style.border = '2px solid black';

        if (this.entryDirection.indexOf('left') > -1) {
            pavilion.style.borderLeft = 'none';
        }
        if (this.entryDirection.indexOf('top') > -1) {
            pavilion.style.borderTop = 'none';
        }
        if (this.entryDirection.indexOf('right') > -1) {
            pavilion.style.borderRight = 'none';
        }
        if (this.entryDirection.indexOf('bottom') > -1) {
            pavilion.style.borderBottom = 'none';
        }
        return pavilion;
    }
}