/**Defining table
 * Input: cost of House
 * Processing: calculate payment = cost * rate and 
 *                       payment = extra + (cost - limit) * rate;
 *            return payment;
 * Output payment;
 * 
 * 
 */
function calcDownpayment(cost) {
    let payment;
    if (cost < 50000) {
        payment = cost * 0.05;
    } else if (cost < 100000) {
        payment = 2500 + (cost - 50000) * 0.1;
    } else if (cost < 200000) {
        payment = 7500 + (cost - 100000) * 0.15;
    } else {
        payment = 20000 + (cost - 200000) * 0.1;
    }
    return payment;
}
console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 25000: ", calcDownpayment(250000));