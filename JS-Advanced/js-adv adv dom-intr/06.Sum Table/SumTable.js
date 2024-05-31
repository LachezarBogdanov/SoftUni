function sumTable() {
    let sumArea = document.getElementById('sum');
    let prices = document.querySelectorAll('table tr td:nth-of-type(2):not(#sum)');

    let sumPrices = 0;

    for (let sum of prices) {
        let curSum = Number(sum.textContent);

        sumPrices += curSum;
    }

    sumArea.textContent = sumPrices;
}