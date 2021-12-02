class PlayerView extends EntityView {
    constructor(entity) {
        super(entity, "ellipse");
        this.resetColor();
    }

    resetColor(element = this.element) {
        this.changeColor(element);
    }

    changeColor(element = this.element, color = "yellow") {
        element.setAttribute("fill", color);
    }

    changeColorForMilis(color, milis) {
        this.changeColor(this.element, color);
        let milisPart = milis/5;
        setTimeout(this.changeColor, milisPart, this.element);
        setTimeout(this.changeColor, milisPart*2, this.element, color);
        setTimeout(this.changeColor, milisPart*3, this.element);
        setTimeout(this.changeColor, milisPart*4, this.element, color);
        setTimeout(this.changeColor, milisPart*5, this.element);
    }

    draw(entity) {
        this.element.setAttribute("cx", entity.getX() + (entity.getWidth()/2));
        this.element.setAttribute("cy", entity.getY() + (entity.getHeight()/2));
        this.element.setAttribute("rx", entity.getWidth()/2);
        this.element.setAttribute("ry", entity.getHeight()/2);
    }
}