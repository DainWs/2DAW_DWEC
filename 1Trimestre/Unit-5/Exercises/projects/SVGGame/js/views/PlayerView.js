class PlayerView extends EntityView {
    constructor(entity) {
        super(entity, "ellipse");
        this.resetColor();
    }

    resetColor(element = this.element) {
        element.setAttribute("fill", "yellow");
    }

    changeColorForMilis(color, milis) {
        this.element.setAttribute("fill", color);
        setTimeout(this.resetColor, milis, this.element);
    }

    draw(entity) {
        this.element.setAttribute("cx", entity.getX() + (entity.getWidth()/2));
        this.element.setAttribute("cy", entity.getY() + (entity.getHeight()/2));
        this.element.setAttribute("rx", entity.getWidth()/2);
        this.element.setAttribute("ry", entity.getHeight()/2);
    }
}