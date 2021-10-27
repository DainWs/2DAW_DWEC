{ 
    let exam1 = prompt("Exam #1:");
    let exam2 = prompt("Exam #2:");
    let project1 = prompt("project #1:");
    let project2 = prompt("project #2:");

    let mediaExam1 = exam1 * 0.75;
    let mediaExam2 = exam2 * 0.75;
    let examMedia = (mediaExam1 + mediaExam2) / 2;

    let mediaProject1 = project1 * 0.25;
    let mediaProject2 = project2 * 0.25;
    let projectMedia = (mediaProject1 + mediaProject2) / 2;

    let media = examMedia + projectMedia;

    if (media >= 5) {
        console.log("Aprovado");
    }
    else {
        console.log("Suspenso");
    }
}