function render() {
    floorTable.innerHTML = 'Floor ' + (currentFloorNumber+1);

    const pavilions = document.querySelectorAll('.pavilion');
    pavilions.forEach(pavilion => {
        document.body.removeChild(pavilion);
    });

    shops.forEach(shop => {
        if (shop.floorNumber === currentFloorNumber) {
            var pavilion = shop.formDOMElement();
        
            pavilion.addEventListener("mouseover", (event) => {
                event.target.style.color = shop.fontColor;
                event.target.style.backgroundColor = shop.hoverBackGroundColor;
            });
            pavilion.addEventListener("mouseout", (event) => {
                event.target.style.color = 'transparent';
                event.target.style.backgroundColor = backGroundFloorColors[currentFloorNumber];
            })
            document.body.appendChild(pavilion);
        }
    });
}
