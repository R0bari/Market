const marketView = new MarketView();

PavilionModel.switchButton.addEventListener("click", function() {
    PavilionModel.currentFloorNumber = (PavilionModel.currentFloorNumber + 1) % PavilionModel.floors.length;
    PavilionModel.floors.forEach((floor, i) => {
        if (i !== PavilionModel.currentFloorNumber) {
            floor.style.display = 'none';
        } else {
            floor.style.display = 'block';
        }
    });
    marketView.render();
});

marketView.render();
