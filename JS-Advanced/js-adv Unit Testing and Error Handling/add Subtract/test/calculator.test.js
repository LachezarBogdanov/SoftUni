import { expect } from "chai";
import { createCalculator } from "../createCalculator.js";

describe ('check for returned value', () => {
    let result = createCalculator();
    let realResult = typeof result;

    it('check returned value and having methods', () => {
        expect(typeof result).to.be.equal(realResult);
        expect(result).to.haveOwnProperty('add');
        expect(result).to.haveOwnProperty('get');
        expect(result).to.haveOwnProperty('subtract');
    })

    it('check for internal value keeping', () => {
        expect(result.value).equal(undefined);
        result.add(4);
        expect(result).equal(4);
    })
})