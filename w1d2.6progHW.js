function calcDistance(x1, y1, x2, y2) {

    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) * 1.0);
    return distance;
}
console.log("expect 7.07 : ", calcDistance(0, 0, 5, 5));