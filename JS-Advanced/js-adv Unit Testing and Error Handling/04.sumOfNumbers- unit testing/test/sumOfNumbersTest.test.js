import { expect } from "chai";
import { sum } from '../sumOfNumbers.js';

describe('sum numbers', () => {
    it('return sum of the values of the arrays inputs', () => {
        const array = [1, 2];
        const output = 3;

        const actualRes = sum(array);

        expect(actualRes).to.be.equal(output);
    })
})