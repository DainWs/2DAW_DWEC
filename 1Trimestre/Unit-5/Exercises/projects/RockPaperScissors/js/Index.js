let i = 1;
let players = [
    new Player(i++, "Jose"),
    new IA(i++)
];

const controller = new GameController(players);

function run() {
    controller.run();

    console.log(controller);
}