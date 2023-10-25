export const getMonthlyEmi = ((amount, roi, tenure) => {
    if(!roi | !amount | !tenure){
        return
    }
    amount = parseInt(amount, 10)
    roi = parseInt(roi, 10)/12/100;
    tenure = parseInt(tenure, 10)
    const emi = (amount * roi * (1+roi)**(tenure*12))/((1+roi)**(tenure * 12) - 1)
    if(isNaN(emi)){
        return
    }
    const intPay = Math.round((amount * roi*100*12 * tenure)/100)
    const total = intPay + amount;

    // console.log(amount, roi, tenure)
    return [ Math.round(emi), intPay , total ];
})