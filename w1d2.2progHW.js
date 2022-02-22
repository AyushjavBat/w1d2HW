 /**Input:
                *  An amount to invest:
                *  amount
                   The annual rate of growth: annualRate
                   The number of months to invest: numMonth
                * Proccessing:  Use a loop to compute the balance of an account after
                                 a has paid interest for numMonths number of months.
                *  Output:      The balance after numMonths have passed.
                                       */
 "use strict";

 function compoundInterest(amount, rate, years) {
     const monthlyRate = rate / 12 / 100;
     const numPayments = years * 12;
     let balance = amount;

     for (let i = 1; i <= numPayments; i++) {
         balance = balance + balance * monthlyRate;
     }
     return parseFloat(balance);
 }

 console.log("expect 110.47", compoundInterest(100, 10, 1));
 console.log("expect 16470.09", compoundInterest(10000, 5, 10));