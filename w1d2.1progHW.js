/**
 * /**Defining table
 * Input: salaried or not salaried(boolean),
 *        into sale amount
 *        into commission;
 * 
 * Processing: calculate commission = amount * commision and 
 *                       commission = limit * commision + ((amount - limit) * commission);
 *            return commision;
 * Output commission;
 * 
 * 
 */


function computeSalesCommission(salaried, salesAmount) {
    let commission;
    if (salaried === true) {
        if (salesAmount < 300) {
            commission = 0;
        } else if (salesAmount < 500) {
            commission = salesAmount * 0.01;
        } else {
            commission = (500 * 0.01) + ((salesAmount - 500) * 0.02);
        }
    } else {
        if (salesAmount < 300) {
            commission = 0;
        } else if (salesAmount < 500) {
            commission = salesAmount * 0.02;
        } else {
            commission = (500 * 0.02) + ((salesAmount - 500) * 0.03);

        }
    }
    return commission;
}
console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));