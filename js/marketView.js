const field = document.querySelector('.mainScene');
const stairs = new Stairs();

var View = function () {
    this.character = document.querySelector('.character');
    this.onKeyDownEvent = null;
};
View.prototype.render = function (objs) {
    if (stairs.checkCollision(objs.character.x, objs.character.y)) {
        const changedFloor = stairs.changeFloor();
        objs.character.x = changedFloor.x;
        objs.character.y = changedFloor.y;
        field.style.backgroundImage = changedFloor.backgroundImage;
        this.character.style.left = 'calc(0% + ' + objs.character.x + 'px)';
        this.character.style.top = 'calc(0% + ' + objs.character.y + 'px)';
    } else {
        this.character.style.left = 'calc(0% + ' + objs.character.x + 'px)';
        this.character.style.top = 'calc(0% + ' + objs.character.y + 'px)';
    }
};
View.prototype.init = function () {
    document.addEventListener('keydown', this.onKeyDownEvent);
};
var marketView = new View();

