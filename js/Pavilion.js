class Pavilion {
    element;
    fontColor;
    backGroundColor;
    hoverBackGroundColor;

    constructor(elem, fColor, hoverBgColor, bgColor) {
        this.element = elem;
        this.fontColor = fColor;
        this.backGroundColor = bgColor;
        this.hoverBackGroundColor = hoverBgColor

        if (this.fontColor !== '' && this.hoverBackGroundColor !== '') {
            this.element.addEventListener("mouseover", (event) => {
                event.target.style.color = (event.target.style.color !== this.fontColor) ? this.fontColor : 'transparent';
                event.target.style.backgroundColor = (event.target.style.color !== this.hoverBackGroundColor) ? this.hoverBackGroundColor : 'transparent';
            });
            this.element.addEventListener("mouseout", (event) => {
                event.target.style.color = 'transparent';
                event.target.style.backgroundColor = this.backGroundColor;
            });
        } else {
            this.element.addEventListener("mouseover", (event) => {
                event.target.style.color = (event.target.style.color !== 'black') ? 'black' : 'transparent';
            });
            this.element.addEventListener("mouseout", (event) => {
                event.target.style.color = 'transparent';
            });
        }
        
    }
}