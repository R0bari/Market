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
        this.text = this.determineInnerText();
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

    formDOMElement(canvas) {
        var ctx = canvas.getContext('2d');
        ctx.strokeStyle = "black";
        ctx.strokeRect(
            this.positionX,
            this.positionY,
            this.width,
            this.height
        );
        
        if (contains(this.entryDirection, 'left')) {
            ctx.fillStyle = PavilionModel.backGroundFloorColors[PavilionModel.currentFloorNumber];
            ctx.fillRect(
                this.positionX - 2,
                this.positionY + this.height / 2 - 25,
                4,
                50
            )
        }
        if (contains(this.entryDirection, 'top')) {
            ctx.fillStyle = PavilionModel.backGroundFloorColors[PavilionModel.currentFloorNumber];
            ctx.fillRect(
                this.positionX + this.width / 2 - 25,
                this.positionY - 2,
                50,
                4
            )
        }
        if (contains(this.entryDirection, 'right')) {
            ctx.fillStyle = PavilionModel.backGroundFloorColors[PavilionModel.currentFloorNumber];
            ctx.fillRect(
                this.positionX + this.width - 2,
                this.positionY + this.height / 2 - 25,
                4,
                50
            )
        }
        if (contains(this.entryDirection, 'bottom')) {
            ctx.fillStyle = PavilionModel.backGroundFloorColors[PavilionModel.currentFloorNumber];
            ctx.fillRect(
                this.positionX + this.width / 2 - 25,
                this.positionY + this.height - 2,
                50,
                4
            )
        }
    }
}

function contains(string, subString) {
    return (string.indexOf(subString) > -1);
}

shops = [
    new Pavilion('cafe', 0, 0, 0, 150, 150, 'bottom'),
    new Pavilion('sport', 0, 0, 200, 150, 370, 'right'),
    new Pavilion('clothes', 0, 200, 420, 150, 150, 'top'),
    new Pavilion('macdonalds', 0, 200, 000, 300, 300, 'bottom right'),
    new Pavilion('kfc', 0, 549, 000, 300, 300, 'bottom left'),
    new Pavilion('clothes', 0, 649, 370, 200, 200, 'top'),
    new Pavilion('cafe', 0, 400, 370, 220, 200, 'top'),

    new Pavilion('sport', 1, 0, 0, 150, 370, 'right'),
    new Pavilion('cafe', 1, 0, 420, 150, 150, 'top'),
    new Pavilion('clothes', 1, 699, 0, 150, 200, 'left'),
    new Pavilion('macdonalds', 1, 200, 270, 300, 300, 'top right'),
    new Pavilion('kfc', 1, 549, 270, 300, 300, 'top'),
    new Pavilion('cafe', 1, 200, 0, 350, 100, 'bottom')
];