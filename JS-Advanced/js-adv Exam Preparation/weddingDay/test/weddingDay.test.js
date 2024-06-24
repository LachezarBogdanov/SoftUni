import { expect } from "chai";
import { weddingDay } from "../weddingDay.js";

describe('weddingDay', () => {
    describe('PickVenue', () => {
        it('should have valid values', () => {
            expect(() => weddingDay.pickVenue('12', undefined, '')).to.throw('Invalid Information!');
            expect(() => weddingDay.pickVenue(12, 13, '')).to.throw('Invalid Information!');
            expect(() => weddingDay.pickVenue([12], {}, 'yes')).to.throw('Invalid Information!');
            expect(() => weddingDay.pickVenue(undefined, null, 2)).to.throw('Invalid Information!');
        });

        it('should return if the location is not correct', () => {
            expect(() => weddingDay.pickVenue(12, 12, 'Sofia')).to.throw("The location of this venue is not in the correct area!")
            expect(() => weddingDay.pickVenue(160, 110, 'Samokov')).to.throw("The location of this venue is not in the correct area!")
        })

        it('should return string value', () => {
            expect(weddingDay.pickVenue(155, 110, 'Varna')).to.equal(`This venue meets the requirements, with capacity of ${155} guests and ${110}$ cover.`)
            expect(weddingDay.pickVenue(170, 90, 'Varna')).to.equal(`This venue meets the requirements, with capacity of ${170} guests and ${90}$ cover.`)
        })

        it('should return error', () => {
            expect(weddingDay.pickVenue(140, 150, 'Varna')).to.equal("This venue does not meet your requirements!")
        })
    });

    describe('otherSpendings', () => {
        it('should return error if the inputs are not valid', () => {
            expect(() => weddingDay.otherSpendings('array', 12, 'true')).to.throw("Invalid Information!");
            expect(() => weddingDay.otherSpendings({}, {}, 'false')).to.throw("Invalid Information!");
            expect(() => weddingDay.otherSpendings(12, 13, true)).to.throw("Invalid Information!");
            expect(() => weddingDay.otherSpendings([], [], 12)).to.throw("Invalid Information!");
            expect(() => weddingDay.otherSpendings(undefined, undefined, undefined)).to.throw("Invalid Information!");
            expect(() => weddingDay.otherSpendings(null, null, NaN)).to.throw("Invalid Information!");
        })

        it('should return message if discount is true', () => {
            expect(weddingDay.otherSpendings(['flowers'], ['pictures'], true)).to.equal(`You spend ${1020}$ for wedding decoration and photography with 15% discount!`)
            expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['video'], true)).to.equal(`You spend ${1445}$ for wedding decoration and photography with 15% discount!`)
            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], true)).to.equal(`You spend ${2465}$ for wedding decoration and photography with 15% discount!`)
            expect(weddingDay.otherSpendings(['flowers'], ['pictures'], false)).to.equal(`You spend ${1200}$ for wedding decoration and photography!`)
            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], false)).to.equal(`You spend ${2900}$ for wedding decoration and photography!`)
        })
    });

    describe('tableDistribution', () => {
        it('should return if the inputs are not valid', () => {
            expect(() => weddingDay.tableDistribution('10', '20')).to.throw("Invalid Information!");
            expect(() => weddingDay.tableDistribution(10, '20')).to.throw("Invalid Information!");
            expect(() => weddingDay.tableDistribution('10', 20)).to.throw("Invalid Information!");
            expect(() => weddingDay.tableDistribution([12], 20)).to.throw("Invalid Information!");
            expect(() => weddingDay.tableDistribution(undefined, NaN)).to.throw("Invalid Information!");
            expect(() => weddingDay.tableDistribution(undefined, null)).to.throw("Invalid Information!");
            expect(() => weddingDay.tableDistribution({12: 13}, [12, 15])).to.throw("Invalid Information!");
        })

        it('should return message if people on table are less than 6', () => {
            expect(weddingDay.tableDistribution(20, 5)).to.equal(`There is only ${4} people on every table, you can join some tables.`)
            expect(weddingDay.tableDistribution(10, 5)).to.equal(`There is only ${2} people on every table, you can join some tables.`)
        });

        it('should return message if people on table are more than 6', () => {
            expect(weddingDay.tableDistribution(20, 2)).to.equal(`You have ${2} tables with ${10} guests on table.`)
        })
    })
})