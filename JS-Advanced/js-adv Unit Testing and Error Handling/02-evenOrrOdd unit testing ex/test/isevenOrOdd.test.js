import { expect } from "chai";
import { isOddOrEven } from "../isEvenOrOdd.js";

describe('check inputs', () => {
        it('should return undefined', () => {
            expect(isOddOrEven([5])).to.be.equal(undefined);
            expect(isOddOrEven(5)).to.be.equal(undefined);
        })

        it('should return even', () => {
            expect(isOddOrEven('asdf')).to.be.equal('even')
        })

        it('should return odd', () => {
            expect(isOddOrEven('asdfg')).to.be.equal('odd');
        })

})