function oddAndEvenSum (num) {
    let numToStr = num.toString();
    let finalEvenSums = evenSum(numToStr);
    let finalOddSums = oddSum(numToStr);
    
    console.log(` Odd sum = ${finalOddSums}, Even sum = ${finalEvenSums}`);

    function evenSum (numToStr2) {
        let evenSums = 0;
        for (let i = 0; i < numToStr2.length; i++) {
            let curDigit = Number(numToStr2[i]);
            if(curDigit % 2 === 0) {
                evenSums += curDigit;
            }
        }
        return evenSums;
    }

    function oddSum (numToStr3) {
        let oddSums = 0;
        for(let j = 0; j < numToStr3.length; j++) {
            let curDigit = Number(numToStr3[j]);
            if(curDigit % 2 !== 0) {
                oddSums += curDigit;
            }
        }
        return oddSums;
    }
}
oddAndEvenSum(3495892137259234);