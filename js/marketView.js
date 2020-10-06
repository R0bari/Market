class MarketView {
    render() {
        PavilionModel.floorTable.innerHTML = 'Floor ' + (PavilionModel.currentFloorNumber+1);
    
        const pavilions = document.querySelectorAll('.pavilion');
        pavilions.forEach(pavilion => {
            document.body.removeChild(pavilion);
        });
    
        shops.forEach(shop => {
            if (shop.floorNumber === PavilionModel.currentFloorNumber) {
                var pavilion = shop.formDOMElement();
            
                pavilion.addEventListener("mouseover", (event) => {
                    event.target.style.color = shop.fontColor;
                    event.target.style.backgroundColor = shop.hoverBackGroundColor;
                });
                pavilion.addEventListener("mouseout", (event) => {
                    event.target.style.color = 'transparent';
                    event.target.style.backgroundColor = PavilionModel.backGroundFloorColors[PavilionModel.currentFloorNumber];
                })
                document.body.appendChild(pavilion);
            }
        });
    }
}


