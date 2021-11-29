class EnemyView extends EntityView {
    constructor(entity) {
        super(entity, "rect");

        this.element.setAttribute("fill", "red");
    }

    draw(entity) {
        this.element.setAttribute("x", entity.getX());
        this.element.setAttribute("y", entity.getY());
        this.element.setAttribute("width", entity.getWidth());
        this.element.setAttribute("height", entity.getHeight());
    }
}