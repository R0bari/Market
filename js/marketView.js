let currentFloorNumber = 0;
const pavilions = [];

render();

switchButton.addEventListener("click", function() {
    currentFloorNumber = (currentFloorNumber + 1) % floors.length;
    floors.forEach((floor, i) => {
        if (i !== currentFloorNumber) {
            floor.style.display = 'none';
        } else {
            floor.style.display = 'block';
        }
    });
    render();
});
