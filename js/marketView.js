class MarketView {
    render() {

        PavilionModel.floorTable.innerHTML = 'Floor ' + (PavilionModel.currentFloorNumber+1);   
        clearCanvas(canvas);
        shops.forEach(shop => {
            if (shop.floorNumber === PavilionModel.currentFloorNumber) {
                shop.formDOMElement(canvas);
            }
        });
    }
}

function clearCanvas(canvas) {
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = PavilionModel.backGroundFloorColors[PavilionModel.currentFloorNumber];
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawHoveredShop(canvas, shop) {
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = shop.hoverBackGroundColor;
    ctx.fillRect(
        shop.positionX, 
        shop.positionY, 
        shop.width, 
        shop.height
    );
    ctx.fillStyle = shop.fontColor;
    ctx.strokeStyle = "#F00";
    ctx.font = "14pt Roboto";
    wrapText(ctx, shop.text, shop.positionX + 10, shop.positionY + 20, shop.width - 10 * 2, 20);
    
    function wrapText(context, text, marginLeft, marginTop, maxWidth, lineHeight)
    {
        var words = text.split(" ");
        var countWords = words.length;
        var line = "";
        for (var n = 0; n < countWords; n++) {
            var testLine = line + words[n] + " ";
            var testWidth = context.measureText(testLine).width;
            if (testWidth > maxWidth) {
                context.fillText(line, marginLeft, marginTop);
                line = words[n] + " ";
                marginTop += lineHeight;
            }
            else {
                line = testLine;
            }
        }
        context.fillText(line, marginLeft, marginTop);
    }
}

function drawUnhoveredShop(canvas, shop) {
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = PavilionModel.backGroundFloorColors[PavilionModel.currentFloorNumber];
    ctx.fillRect(
        shop.positionX, 
        shop.positionY, 
        shop.width, 
        shop.height
    );
}

function changeFloor() {
    PavilionModel.currentFloorNumber = (PavilionModel.currentFloorNumber + 1) % PavilionModel.floors.length;
    marketView.render();
}

var canvas = document.getElementById("floor-canvas");
clearCanvas(canvas);
canvas.addEventListener('mousemove', (event) => {
    var x = event.pageX - event.target.offsetLeft,
        y = event.pageY - event.target.offsetTop;
    clearCanvas(canvas);
    shops.forEach(shop => {
        if (shop.floorNumber === PavilionModel.currentFloorNumber) {
            shop.formDOMElement(canvas);
        }
    });
    shops.forEach(shop => {
        if (shop.floorNumber === PavilionModel.currentFloorNumber &&
            x >= shop.positionX &&
            x <= shop.positionX + shop.width &&
            y >= shop.positionY &&
            y <= shop.positionY + shop.height) {
                drawHoveredShop(canvas, shop);
            }
    });
});
