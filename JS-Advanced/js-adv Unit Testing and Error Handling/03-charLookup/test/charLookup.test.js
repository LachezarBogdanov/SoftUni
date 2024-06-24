import { expect } from "chai";
import { lookupChar } from '../charLookup.js';

describe('lookupChar funstion', () => {
    it('should return undefined', () => {
        expect(lookupChar(4, 5)).to.be.equal(undefined);
        expect(lookupChar(5, 'str')).to.be.equal(undefined);
        expect(lookupChar('hello', 'bye')).to.be.equal(undefined);
        expect(lookupChar('aasd', 'asd', 'asdsfa')).to.be.equal(undefined);
        expect(lookupChar('hello', 2.5)).to.be.equal(undefined);
    });

    it('should return inc answer', () => {
        expect(lookupChar('hello', -1)).to.be.equal('Incorrect index');
        expect(lookupChar('hello', 6)).to.be.equal('Incorrect index');
       });

       it('should return char', () => {
        expect(lookupChar('hello', 2)).to.be.equal('l')
    })
})
