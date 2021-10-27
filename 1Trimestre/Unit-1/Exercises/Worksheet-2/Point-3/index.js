{ /* In this scope, we store the radius, and calculate circurference and area of the circle */
    let radius = 5;
    console.log("The radius is " + radius);

    /* calculate circurference */
    let diameter = radius * 2;
    let circumference = diameter * 3.14;
    console.log("The circurference is " + circumference);

    /* calculate area */
    let area = 3.14 * radius * radius;
    console.log("The area is " + area);
}