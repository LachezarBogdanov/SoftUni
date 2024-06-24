import { expect } from "chai";
import { mathEnforcer } from "../mathEnforcer.js";

describe ('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return undefined', () => {
            expect(mathEnforcer.addFive('a')).to.be.equal(undefined);
            expect(mathEnforcer.addFive([1, 2, 3])).to.be.equal(undefined);
            expect(mathEnforcer.addFive({first: 1, secind: 2})).to.be.equal(undefined);
        })

        it('should add num', () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
            expect(mathEnforcer.addFive(2.5)).to.be.equal(7.5);
        })
    })

    describe('subtractTen', () => {
        it('should return undefined', () => {
            expect(mathEnforcer.subtractTen('b')).to.be.equal(undefined);
            expect(mathEnforcer.subtractTen([1, 2, 3])).to.be.equal(undefined);
            expect(mathEnforcer.subtractTen({first: 1})).to.be.equal(undefined);
        })

        it('should substract 10', () => {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
            expect(mathEnforcer.subtractTen(5.5)).to.be.equal(-4.5);
        })
    });

    describe('sum', () => {
        it('should return und', () => {
            expect(mathEnforcer.sum('a', 'b')).to.be.equal(undefined);
            expect(mathEnforcer.sum('a', 5)).to.be.equal(undefined);
            expect(mathEnforcer.sum(4, 'b')).to.be.equal(undefined);
        })

        it('should return sum', () => {
            expect(mathEnforcer.sum(5, 3)).to.be.equal(8)
            expect(mathEnforcer.sum(5, -3)).to.be.equal(2)
            expect(mathEnforcer.sum(-5, 3)).to.be.equal(-2)
            expect(mathEnforcer.sum(-5, -3)).to.be.equal(-8)
            expect(mathEnforcer.sum(5, 2.5)).to.be.equal(7.5)
            expect(mathEnforcer.sum(3.5, 2.5)).to.be.equal(6)
        })
    })
})