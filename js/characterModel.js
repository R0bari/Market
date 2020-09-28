const INITIAL_CHARACTER_X = 510;
const INITIAL_CHARACTER_Y = 620;
const LAND = 0;
const LEFT_BORDER = 0;
const RIGHT_BORDER = 1268;
const TOP_BORDER = 0;
const BOTTOM_BORDER = 855;

const KEY_CODE_TOP = 87;
const KEY_CODE_RIGHT = 68;
const KEY_CODE_LEFT = 65;
const KEY_CODE_BOTTOM = 83;

const CHARACTER_STEP = 5;

var Model = function () {
    this.objs = {
        'character': {
            x: INITIAL_CHARACTER_X,
            y: INITIAL_CHARACTER_Y
        }
    };
};

Model.prototype.init = function (renderFunction) {
    this.needRendering = renderFunction;
};
Model.prototype.setCoords = function (obj, x, y) {
    x = x == (undefined || null) ? obj.x : x;
    y = y == (undefined || null) ? obj.y : y;
    checkScreenBorders.call(this, obj, x, y);
    this.needRendering();
};
Model.prototype.getCoords = function (obj) {
    return {
        x: obj.x,
        y: obj.y
    }
};
Model.prototype.characterMove = function (e) {
    var keyCode = e.keyCode;
    var x = characterModel.getCoords(characterModel.objs.character).x;
    var y = characterModel.getCoords(characterModel.objs.character).y;
    switch (keyCode) {
        case KEY_CODE_RIGHT: {
            characterModel.setCoords(characterModel.objs.character, x + CHARACTER_STEP);
            break;
        }
        case KEY_CODE_LEFT: {
            characterModel.setCoords(characterModel.objs.character, x - CHARACTER_STEP);
            break;
        }
        case KEY_CODE_TOP: {
            characterModel.setCoords(characterModel.objs.character, x, y - CHARACTER_STEP);
            break;
        }
        case KEY_CODE_BOTTOM: {
            characterModel.setCoords(characterModel.objs.character, x, y + CHARACTER_STEP);
            break;
        }
    }
};
function checkScreenBorders(obj, x, y) {
    if (x >= LEFT_BORDER && x <= RIGHT_BORDER) {
        obj.x = x;
    }
    else {
        if (obj.hasOwnProperty('direction')) {
            obj.direction = obj.direction === 'right' ? 'left' : 'right';
        }
    }

    if (y >= TOP_BORDER && y <= BOTTOM_BORDER) {
        obj.y = y;
    }
    else {
        if (obj.hasOwnProperty('direction')) {
            obj.direction = obj.direction === 'top' ? 'bottom' : 'top';
        }
    }
}

var characterModel = new Model();
