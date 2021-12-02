class EnemyFactory {
    getEnemy() {

        let entity = null;
        /**
         * 1 = from Left to Right
         * 2 = from Top to Bottom
         * 3 = from Right to Left
         */
        let position = Math.trunc((Math.random() * 3) + 1);

        let maxX = window.innerWidth;
        let maxY = window.innerHeight;
        let x = 0;
        let y = 0;
        
        switch(position) {
            case 1:
                x = -100;
                y = (maxY-30) - Math.trunc(Math.random() * 300);
                entity = new Enemy(x, y);
                entity.setDirection(1);
                break;
            case 2:
                x = Math.trunc(Math.random() * maxX);
                y = -100;
                entity = new Enemy(x, y);
                entity.setDirection(0);
                entity.applyForce(0, -100);
                break;
            case 3:
                x = maxX + 100;
                y = (maxY-30) - Math.trunc(Math.random() * 300);
                entity = new Enemy(x, y);
                entity.setDirection(-1);
                break;
        }

        return entity;
    }
}