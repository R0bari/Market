const firstFloor = document.querySelector('.first-floor');
const secondFloor = document.querySelector('.second-floor');
const floorTable = document.querySelector('.floor-table');
const floors = document.querySelectorAll('.floor');
const writings = document.querySelectorAll('.writing');
const switchButton = document.querySelector('.switch-button');
let currentFloorNumber = 0;
const pavilions = [];

switchButton.addEventListener("click", function() {
    currentFloorNumber = (currentFloorNumber + 1) % floors.length;
    floors.forEach((floor, i) => {
        if (i != currentFloorNumber) {
            floor.style.display = 'none';
        } else {
            floor.style.display = 'block';
        }
    }); 
    floorTable.innerHTML = 'Floor ' + (currentFloorNumber+1);
});

writings.forEach(writing => {
    let currentPavilion;
    currentPavilion = new Pavilion(writing);
    currentPavilion.addEventListeners();
    pavilions.push(currentPavilion);
});

var View = function () {
    this.onKeyDownEvent = null;
};
View.prototype.render = function (objs) {
    // if (stairs.checkCollision(objs.character.x, objs.character.y)) {
    //     const changedFloor = stairs.changeFloor();
    //     objs.character.x = changedFloor.x;
    //     objs.character.y = changedFloor.y;
    //     field.style.backgroundImage = changedFloor.backgroundImage;
    //     this.character.style.left = 'calc(0% + ' + objs.character.x + 'px)';
    //     this.character.style.top = 'calc(0% + ' + objs.character.y + 'px)';
    // } else {
    //     this.character.style.left = 'calc(0% + ' + objs.character.x + 'px)';
    //     this.character.style.top = 'calc(0% + ' + objs.character.y + 'px)';
    // }
};
View.prototype.init = function () {
    document.addEventListener('keydown', this.onKeyDownEvent);
};


var pavilionView = new View();
