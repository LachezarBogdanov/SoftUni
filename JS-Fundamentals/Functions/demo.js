function demo (one, two) {

    return one * two;

}
demo(5, 6);

function demo2(sum, other) {

    console.log(sum + other);

}
demo2(demo(5, 6), 20);