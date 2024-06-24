import { expect } from "chai";
import { petAdoptionAgency } from "../petAdoptionAgency.js";

describe('petAdopting',() => {
    describe('isPetAvailable', () => {
        it('should throw error if the inputs are not valid', ()=>{
            expect(() => petAdoptionAgency.isPetAvailable(10, 10, true)).to.throw("Invalid input")
            expect(() => petAdoptionAgency.isPetAvailable('cat', '5', true)).to.throw("Invalid input")
            expect(() => petAdoptionAgency.isPetAvailable('cat', 5, 'true')).to.throw("Invalid input")
            expect(() => petAdoptionAgency.isPetAvailable(['cat'], 5, 'true')).to.throw("Invalid input")
            expect(() => petAdoptionAgency.isPetAvailable(['cat'], {5:5}, 'true')).to.throw("Invalid input")
            expect(() => petAdoptionAgency.isPetAvailable('cat', 5, undefined)).to.throw("Invalid input")
        })

        it('should return that there are no pets for adopting', () => {
            expect(petAdoptionAgency.isPetAvailable('cat', 0, true)).to.equal(`Sorry, there are no ${'cat'}(s) available for adoption at the agency.`)
            expect(petAdoptionAgency.isPetAvailable('cat', -10, true)).to.equal(`Sorry, there are no ${'cat'}(s) available for adoption at the agency.`)
        })

        it('should return positive return', () => {
            expect(petAdoptionAgency.isPetAvailable('cat', 5, true)).to.equal(`Great! We have ${'5'} vaccinated ${'cat'}(s) available for adoption at the agency.`)
            expect(petAdoptionAgency.isPetAvailable('cat', 5, true)).to.equal(`Great! We have ${'5'} vaccinated ${'cat'}(s) available for adoption at the agency.`)
            expect(petAdoptionAgency.isPetAvailable('cat', 5, false)).to.equal(`Great! We have ${'5'} ${'cat'}(s) available for adoption, but they need vaccination.`)
        })
    })

    describe('getRecommendedPets', () => {
        it('should return invalid input', () => {
            expect(() => petAdoptionAgency.getRecommendedPets('str', ['cat'])).to.throw("Invalid input");
            expect(() => petAdoptionAgency.getRecommendedPets(['cat'], undefined)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.getRecommendedPets(['cat'], null)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.getRecommendedPets(['cat'], NaN)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.getRecommendedPets(undefined, NaN)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.getRecommendedPets(undefined, undefined)).to.throw("Invalid input");
        })

        it('should return message if the thraits are equal', () => {
            expect(petAdoptionAgency.getRecommendedPets([{ name: 'dog', traits: 'choko' }], 'choko')).to.equal(`Recommended pets with the desired traits (${'choko'}): ${'dog'}`)
            expect(petAdoptionAgency.getRecommendedPets([{ name: 'dog', traits: 'choko' }, { name: 'bear', traits: 'meat' }], 'choko')).to.equal(`Recommended pets with the desired traits (${'choko'}): ${'dog'}`)
            expect(petAdoptionAgency.getRecommendedPets([{ name: 'dog', traits: 'choko' }, { name: 'bear', traits: 'meat' }, { name: 'cat', traits: 'choko' }], 'choko')).to.equal(`Recommended pets with the desired traits (${'choko'}): ${'dog'}, ${'cat'}`)
        })

        it('should return that tha traits are not maching', () => {
            expect(petAdoptionAgency.getRecommendedPets([{ name: 'dog', traits: 'meat' }, {name: 'cat', traits: 'meat'}], 'animalFood')).to.equal(`Sorry, we currently have no recommended pets with the desired traits: ${'animalFood'}.`)
        })
    })

    describe('adoptPet', () => {
        it('should throw error if inputs are not valid', () => {
            expect(() => petAdoptionAgency.adoptPet(2, 3)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.adoptPet(undefined, undefined)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.adoptPet({}, [])).to.throw("Invalid input");
            expect(() => petAdoptionAgency.adoptPet(null, null)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.adoptPet(null, NaN)).to.throw("Invalid input");
        })

        it('should return message', () => {
            expect(petAdoptionAgency.adoptPet('cat', 'Ivan')).to.equal(`Congratulations, ${'Ivan'}! You have adopted ${'cat'} from the agency. Enjoy your time with your new furry friend!`)
        })
    })
})