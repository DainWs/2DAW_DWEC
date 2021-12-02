class CollisionBox {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
    }

    setX(x) {
        this.x = x;
    }

    getX() {
        return this.x;
    }

    setY(y) {
        this.y = y;
    }

    getY() {
        return this.y;
    }

    setWidth(width) {
        this.width = width;
    }

    getWidth() {
        return this.width;
    }

    setHeight(height) {
        this.height = height;
    }

    getHeight() {
        return this.height;
    }

    getTop() {
        return this.y;
    }

    getLeft() {
        return this.x;
    }

    getRight() {
        return this.x + this.width;
    }

    getBottom() {
        return this.y + this.height;
    }
}
