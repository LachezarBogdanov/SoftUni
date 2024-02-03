function tradeCommissions(input) {

    let city = input[0];
    let qtySales = Number(input[1]);
    let commission = 0;

    switch (city) {
        case 'Sofia':
            if (qtySales >= 0 && qtySales <= 500) {
                commission = 5 / 100 * qtySales;
            } else if (qtySales > 500 && qtySales <= 1000) {
                commission = 7 / 100 * qtySales;
            } else if (qtySales > 1000 && qtySales <= 10000) {
                commission = 8 / 100 * qtySales;
            } else if (qtySales > 10000) {
                commission = 12 / 100 * qtySales;
            } 
            break;
        case 'Varna':
            if (qtySales >= 0 && qtySales <= 500) {
                commission = 4.5 / 100 * qtySales;
            } else if (qtySales > 500 && qtySales <= 1000) {
                commission = 7.5 / 100 * qtySales;
            } else if (qtySales > 1000 && qtySales <= 10000) {
                commission = 10 / 100 * qtySales;
            } else if (qtySales > 10000) {
                commission = 13 / 100 * qtySales;
            } 
            break;
        case 'Plovdiv':
            if (qtySales >= 0 && qtySales <= 500) {
                commission = 5.5 / 100 * qtySales;
            } else if (qtySales > 500 && qtySales <= 1000) {
                commission = 8 / 100 * qtySales;
            } else if (qtySales > 1000 && qtySales <= 10000) {
                commission = 12 / 100 * qtySales;
            } else if (qtySales > 10000) {
                commission = 14.5 / 100 * qtySales;
            } 
            break;
       
    }
    if(qtySales < 0 ){
        console.log('error');
    }else{
    console.log(commission.toFixed(2));
    }
}
tradeCommissions(["Sofia",
"1500"]);