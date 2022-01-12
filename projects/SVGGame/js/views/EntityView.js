class EntityView {
    constructor(entity, modelType) {
        this.element = document.createElementNS("http://www.w3.org/2000/svg", modelType);
        
        if (entity.getId().length > 0) {
            this.element.setAttribute("id", entity.getId());
        }

        this.draw(entity);
        attach(this.element);
    }

    undraw(entity) {
        deattach(this.element);
    }

    draw(entity) { }
}

var svgElement;

function attach(element) {
    if (svgElement == null) {
        svgElement = document.getElementById("game-screen");
    }

    svgElement.appendChild(element);
}

function deattach(element) {
    if (svgElement == null) {
        svgElement = document.getElementById("game-screen");
    }

    svgElement.removeChild(element);
}

export { EntityView };