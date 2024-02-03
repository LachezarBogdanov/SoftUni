function depositCalculator (input){

    let depositSum =Number (input[0]);
    let depositTerm = Number(input[1]);
    let yearInterestPercent =Number (input[2]);
    
    let yearInterestNumber = yearInterestPercent / 100;
    
    let sum = depositSum + depositTerm * ((depositSum * yearInterestNumber)/12 );
    
    console.log(sum);
}
depositCalculator(["200 ",
"3 ",
"5.7 "])