class EntityView {
    constructor(entity) {
        this.element = document.createElementNS("http://www.w3.org/2000/svg", entity.getModelType());
        
        if (entity.getId().length > 0) {
            this.element.setAttribute("id", entity.getId());
        }

        this.draw(entity);
        append(this.element);
    }

    draw(entity) {
        this.element.setAttribute("cx", entity.getX());
        this.element.setAttribute("cy", entity.getY());
        this.element.setAttribute("rx", entity.getWidth());
        this.element.setAttribute("ry", entity.getHeight());
        this.element.setAttribute("fill", entity.getModelColor());
    }
}

var svgElement;

function append(element) {
    if (svgElement == null) {
        svgElement = document.getElementById("game-screen");
    }

    this.svgElement.appendChild(element);
    console.log("append")
}