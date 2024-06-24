function solution(number) {

    let addNum = number;

    return function add(num) {
        let numToPrint = num + addNum;
        return numToPrint;
    }
}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));