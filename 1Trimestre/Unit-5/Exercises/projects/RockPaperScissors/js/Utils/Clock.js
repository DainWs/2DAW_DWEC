function countdownClock(controller, view, num = 0) {
    view.writeCountdown(num);
    if(num > 0) {
        setTimeout(countdownClock, 1000, controller, view, num - 1);
    }
    else {
        controller.run();
    }
}

export { countdownClock };