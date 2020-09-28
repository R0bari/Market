var Controller = function (View, Model) {
    this.marketView = View;
    this.characterModel = Model;
};
Controller.prototype.init = function () {
    this.marketView.onKeyDownEvent = this.moving.bind(this);
    this.marketView.init();
    this.characterModel.init(this.needRendering.bind(this));
    this.needRendering();
};
Controller.prototype.moving = function (e) {
    this.characterModel.characterMove(e);
};
Controller.prototype.needRendering = function () {
    this.marketView.render(characterModel.objs);
};
var marketController = new Controller(marketView, characterModel);
marketController.init();
