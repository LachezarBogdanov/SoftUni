function sumRange(array, start, end) {
    // Check if the first parameter is an array
    if (!Array.isArray(array)) {
        return NaN;
    }

    // Ensure the start index is not less than zero
    start = Math.max(start, 0);

    // Ensure the end index is not greater than the last index of the array
    end = Math.min(end, array.length - 1);

    let sum = 0;

    // Iterate through the specified range and sum the elements
    for (let i = start; i <= end; i++) {
        let num = Number(array[i]);
        // If the element is not a number (NaN), treat it as 0
        sum += isNaN(num) ? 0 : num;
    }

    return sum;
}
console.log(sumRange([10, 'twenty', 30, 40], 0, 2));