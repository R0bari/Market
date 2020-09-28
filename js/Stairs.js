class Stairs {
    currentFloor;
    width = 160;
    height = 235;

    coordinates = [
        { x: 455, y: 0 },
        { x: 455, y: 665 }
    ]
    spawnCoordinates = [
        { x: 510, y: 240 },
        { x: 510, y: 620 }
    ]
    backgrounds = [
        "url('assets/img/floor-first.png')",
        "url('assets/img/floor-second.png')"
    ]
    
    constructor() {
        this.currentFloor = 0;
    }

    checkCollision(currentX, currentY, characterWidth = 30, characterHeight = 40) {
        return (currentX + characterWidth <= this.coordinates[this.currentFloor].x + this.width &&
            currentX >= this.coordinates[this.currentFloor].x &&
            currentY + characterHeight <= this.coordinates[this.currentFloor].y + this.height &&
            currentY >= this.coordinates[this.currentFloor].y);
    }

    changeFloor() {
        this.currentFloor = this.currentFloor == 0 ? 1 : 0;
        return {x: this.spawnCoordinates[this.currentFloor].x, y: this.spawnCoordinates[this.currentFloor].y,
             backgroundImage: this.backgrounds[this.currentFloor] };
    }
}