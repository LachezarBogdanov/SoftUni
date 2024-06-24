import { expect } from "chai";
import { planYourTrip } from "../planYourTrip.js";

describe('planYourTrip', () => {
    describe('choosingDestination', () => {
        it('should return invalid year', () => {
            expect(() => planYourTrip.choosingDestination('Ski Resort', 'winter', 2023)).to.throw("Invalid Year!");
        })

        it('should return that the destiantion is not valid', () => {
            expect(() => planYourTrip.choosingDestination('Borovets', 'winter', 2024)).to.throw("This destination is not what you are looking for.")
        })

        it('should return great choice if is winter or not', () => {
            expect(planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024)).to.equal(`Great choice! The ${'Winter'} is the perfect time to visit the ${'Ski Resort'}.`)
            expect(planYourTrip.choosingDestination('Ski Resort', 'Summer', 2024)).to.equal(`Consider visiting during the Winter for the best experience at the ${'Ski Resort'}.`)
        })
    })

    describe('exploreOptions', () => {
            it('should throw error invalid if the parameters is not valid', () => {
                expect(() => planYourTrip.exploreOptions(null, 0)).to.throw("Invalid Information!");
                expect(() => planYourTrip.exploreOptions(undefined, 3)).to.throw("Invalid Information!");
                expect(() => planYourTrip.exploreOptions('[1, 2, 3]', 3)).to.throw("Invalid Information!");
                expect(() => planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking "], null)).to.throw("Invalid Information!");
                expect(() => planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking "], undefined)).to.throw("Invalid Information!");
                expect(() => planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking "], 4)).to.throw("Invalid Information!");
                expect(() => planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking "], 3.14)).to.throw("Invalid Information!");
                expect(() => planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking "], 0.5)).to.throw("Invalid Information!");
            });

            it('should return modified array', () => {
                expect(planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking "], 1)).to.equal('Skiing , Winter Hiking ')
            })
        })

        describe('estimateExpenses', () => {
            it('should throw error if the inputs are not valid', () => {
                expect(() => planYourTrip.estimateExpenses(undefined, undefined)).to.throw("Invalid Information!");
                expect(() => planYourTrip.estimateExpenses(null, null)).to.throw("Invalid Information!");
                expect(() => planYourTrip.estimateExpenses(3, null)).to.throw("Invalid Information!");
                expect(() => planYourTrip.estimateExpenses(3, '')).to.throw("Invalid Information!");
                expect(() => planYourTrip.estimateExpenses(-3, -2)).to.throw("Invalid Information!");
                expect(() => planYourTrip.estimateExpenses(0, 0)).to.throw("Invalid Information!");
                expect(() => planYourTrip.estimateExpenses(0, 3)).to.throw("Invalid Information!");
                expect(() => planYourTrip.estimateExpenses(2, 0)).to.throw("Invalid Information!");
                expect(() => planYourTrip.estimateExpenses(-3, 3)).to.throw("Invalid Information!");
                expect(() => planYourTrip.estimateExpenses(-3, '5')).to.throw("Invalid Information!");
                expect(() => planYourTrip.estimateExpenses('4', 0)).to.throw("Invalid Information!");
                expect(() => planYourTrip.estimateExpenses([1, 2], 3)).to.throw("Invalid Information!");
                expect(() => planYourTrip.estimateExpenses({2: 2}, 3)).to.throw("Invalid Information!");
                expect(() => planYourTrip.estimateExpenses([], {})).to.throw("Invalid Information!");
            });

            it('should return message if the cost is less or equal to 500', () => {
                expect(planYourTrip.estimateExpenses(200, 2)).to.equal(`The trip is budget-friendly, estimated cost is $${'400.00'}.`)
                expect(planYourTrip.estimateExpenses(250, 2)).to.equal(`The trip is budget-friendly, estimated cost is $${'500.00'}.`)
                expect(planYourTrip.estimateExpenses(250, 1.25)).to.equal(`The trip is budget-friendly, estimated cost is $${'312.50'}.`)
            })

            it('should return message if the cost is more than 500', () => {
                expect(planYourTrip.estimateExpenses(500, 2)).to.equal(`The estimated cost for the trip is $${'1000.00'}, plan accordingly.`)
                expect(planYourTrip.estimateExpenses(500, 2.5)).to.equal(`The estimated cost for the trip is $${'1250.00'}, plan accordingly.`)
            })
        })
    });

