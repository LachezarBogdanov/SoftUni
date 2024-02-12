function palindromeIntegers (arr) {
    
    for (let num of arr) {
        let isPalindrome = numPalindrome(num);
        console.log(isPalindrome);
    }
    
    function numPalindrome (num) {
        let strNum = num.toString();
        let reversedNum = strNum.split('').reverse().join('');

        if(strNum === reversedNum) {
            return true;
        } else {
            return false;
        }
    }
}
palindromeIntegers([32,2,232,1010]);