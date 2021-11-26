
class GameController {
    playerEntity;
    constructor() {
        this.playerEntity = new Player();
        this.view = new PlayerView();
        this.initialize();
    }

    initialize() {
        this.playerEntity.initialize();
    }

    update(e) {
        let keyDown = e.key;
        switch (keyDown) {
            case "a":
                console.log(instance.playerEntity);
                instance.playerEntity.update(-1);
                break;
            case "d":
                instance.playerEntity.update(1);
                break;
            case "w":
                instance.playerEntity.jump();
                instance.playerEntity.update(0);
                break;
        }

        instance.view.drawPlayer(instance.playerEntity);
    }
}