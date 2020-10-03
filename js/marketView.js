const firstFloor = document.querySelector('.first-floor');
const secondFloor = document.querySelector('.second-floor');
const writings = document.querySelectorAll('.writing');
const switchButton = document.querySelector('.switch-button');
var pavilions = [];

switchButton.addEventListener("click", function() {
    if (firstFloor.style.display !== 'none') {
        firstFloor.style.display = 'none';
        secondFloor.style.display = 'block';
    } else {
        secondFloor.style.display = 'none';
        firstFloor.style.display = 'block';
    }
});

writings.forEach(writing => {
    var currentPavilion;
    if (hasClass(writing, 'kfc')) {
        currentPavilion = new Pavilion(writing, 'white', 'rgb(218, 54, 33)', 'rgba(200, 200, 200, 0.44)');
    } 
    else if (hasClass(writing, 'macdonalds')) {
        currentPavilion = new Pavilion(writing, 'rgb(255, 224, 88)', 'rgb(218, 54, 33)', 'rgba(200, 200, 200, 0.44)');
    } 
    else if (hasClass(writing, 'burger-king')) {
        currentPavilion = new Pavilion(writing, ' rgb(65, 67, 230)', 'rgb(218, 153, 33)', 'rgba(200, 200, 200, 0.44)');
    }
    else {
        currentPavilion = new Pavilion(writing, '', '', 'rgba(200, 200, 200, 0.44)');
    }

    // writing.style.display = 'none';
    // writing.addEventListener("mouseover", (event) => {
    //     event.target.style.color = (event.target.style.color !== 'black') ? 'black' : 'transparent';
    // });
    // writing.addEventListener("mouseout", (event) => {
    //     event.target.style.color = 'transparent';
    // });

    pavilions.push(currentPavilion);
});

var View = function () {
    this.character = document.querySelector('.character');
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

var marketView = new View();

function hasClass(element, className) {
    var rx = new RegExp('(?:^| )' + className + '(?: |$)');
    return rx.test(element.className);
}
