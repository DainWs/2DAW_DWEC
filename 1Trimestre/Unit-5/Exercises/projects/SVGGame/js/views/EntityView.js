class EntityView {
    constructor(entity, modelType) {
        this.element = document.createElementNS("http://www.w3.org/2000/svg", modelType);
        
        if (entity.getId().length > 0) {
            this.element.setAttribute("id", entity.getId());
        }

        this.draw(entity);
        append(this.element);
    }

    draw(entity) { }
}

var svgElement;

function append(element) {
    if (svgElement == null) {
        svgElement = document.getElementById("game-screen");
    }

    svgElement.appendChild(element);
}