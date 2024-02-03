function sumOfNumbers (input){


    let sum = 0;
    let numberAsString = input[0];
    
        for(let i = 0; i < numberAsString.length; i++){
          let currentNumber = Number(numberAsString[i]);
          sum += currentNumber;
        }
    console.log(`The sum of the digits is:${sum} `);
    }
    sumOfNumbers(["1234"]);