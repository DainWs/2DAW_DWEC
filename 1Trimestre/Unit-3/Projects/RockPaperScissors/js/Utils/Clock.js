function countdownClock(controller, view, num) {
    view.writeCountdown(num);
    if(num > 0) {
        setTimeout(countdownClock, 1000, controller, view, num - 1);
    }
    else {
        controller.run();
    }
}