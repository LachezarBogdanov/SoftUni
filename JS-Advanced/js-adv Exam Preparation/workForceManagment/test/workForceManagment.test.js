import { expect } from "chai";
import { workforceManagement } from "../workforceManagement.js";

describe('workForce', () => {
    describe('recruitStaff', () => {
        it('should throw error for the role', () => {
            expect(() => workforceManagement.recruitStaff('Ivan', 'emoloyee', 10)).to.throw(`We are not currently hiring for this role.`)
            expect(() => workforceManagement.recruitStaff('Ivan', 'Develop', 10)).to.throw(`We are not currently hiring for this role.`)
            expect(() => workforceManagement.recruitStaff('Ivan', 'worker', 10)).to.throw(`We are not currently hiring for this role.`)
        });

        it('should return that employee is hired', () => {
            expect(workforceManagement.recruitStaff('Pesho', 'Developer', 4)).to.equal(`${'Pesho'} has been successfully recruited for the role of ${'Developer'}.`)
            expect(workforceManagement.recruitStaff('Pepi', 'Developer', 10)).to.equal(`${'Pepi'} has been successfully recruited for the role of ${'Developer'}.`)
        });

        it('should return that is not suitable for this role', () => {
            expect(workforceManagement.recruitStaff('Gosho', 'Developer', 3)).to.equal(`${'Gosho'} is not suitable for this role.`)
            expect(workforceManagement.recruitStaff('Gosho', 'Developer', 0)).to.equal(`${'Gosho'} is not suitable for this role.`)
        })
    })

    describe('computeWages', () => {
        it('should throw error for invalid inputs', () => {
            expect(() => workforceManagement.computeWages('5')).to.throw("Invalid hours");
            expect(() => workforceManagement.computeWages([5])).to.throw("Invalid hours");
            expect(() => workforceManagement.computeWages(null)).to.throw("Invalid hours");
            expect(() => workforceManagement.computeWages(undefined)).to.throw("Invalid hours");
            expect(() => workforceManagement.computeWages({5: 5})).to.throw("Invalid hours");
        });

        it('should return salary with or not with the bonus', () => {
            expect(workforceManagement.computeWages(50)).to.equal(900);
            expect(workforceManagement.computeWages(160)).to.equal(2880);
            expect(workforceManagement.computeWages(170)).to.equal(4560);
        })
    })

    describe('dismissEmployee', () => {
        it('should throw error if the inputs are not valid', () => {
            expect(() => workforceManagement.dismissEmployee({}, 4)).to.throw("Invalid input");
            expect(() => workforceManagement.dismissEmployee(['Petar'], null)).to.throw("Invalid input");
            expect(() => workforceManagement.dismissEmployee(['Petar'], '4')).to.throw("Invalid input");
            expect(() => workforceManagement.dismissEmployee(undefined, undefined)).to.throw("Invalid input");
            expect(() => workforceManagement.dismissEmployee(NaN, NaN)).to.throw("Invalid input");
            expect(() => workforceManagement.dismissEmployee(['Ivan', 'George'], -3)).to.throw("Invalid input");
            expect(() => workforceManagement.dismissEmployee(['Ivan', 'George'], 2)).to.throw("Invalid input");
        });

        it('should return modified array', () => {
            expect(workforceManagement.dismissEmployee(['Petar', 'Ivan', 'George'], 1)).to.equal('Petar, George')
        })
    })
})