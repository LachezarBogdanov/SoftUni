import { expect } from "chai";
import { isSymmetric } from '../checkForSymmetry.js';

describe ('check symmetry', () => {
    it('should return tru if input is an array', () => {
        const input = [1, 2, 1];

        let result = isSymmetric(input);

        expect(result).to.be.true;
    });

    it('should return false if input is not symmetry', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    })

    it('should return error if input is not valid',() => {
        expect(isSymmetric({})).to.be.false;
        expect(isSymmetric(undefined)).to.be.false;
        expect(isSymmetric(null)).to.be.false;
        expect(isSymmetric('')).to.be.false;
        expect(isSymmetric(['1', '2', '3'])).to.be.false;
        expect(isSymmetric([1, 2, '3'])).to.be.false;
        expect(isSymmetric(1, 2, 1)).to.be.false;
        expect(isSymmetric('1', '2', '1')).to.be.false;
        expect(isSymmetric(-1)).to.be.false;
        expect(isSymmetric('abba')).to.be.false;
        expect(isSymmetric(3.14)).to.be.false;
        expect(isSymmetric(NaN)).to.be.false;
    })

    it('should return true', () => {
      expect(isSymmetric([])).to.be.true;  
    }) 

    it('should return true if array with one parameter is given', () => {
        expect(isSymmetric([1])).to.be.true;
    })

    it('should return true if array with strings is symmetry', () => {
        expect(isSymmetric(['pesho', 'gosho', 'pesho'])).to.be.true;
        expect(isSymmetric([3.14, -1, 3.14])).to.be.true;
        expect(isSymmetric([true, false, true])).to.be.true;
    })
})