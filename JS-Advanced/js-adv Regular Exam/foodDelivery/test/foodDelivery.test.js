import { expect } from "chai";
import { foodDelivery } from "../food delivery.js";

describe('foodDelivery', () => {
    describe('getCategory', () => {
        it('should throw error', () => {
            expect(() => foodDelivery.getCategory('Something')).to.throw("Invalid Category!");
            expect(() => foodDelivery.getCategory(['Something'])).to.throw("Invalid Category!");
            expect(() => foodDelivery.getCategory(undefined)).to.throw("Invalid Category!");
        })

        it('should return valid answers', () => {
            expect(foodDelivery.getCategory('Vegan')).to.equal("Dishes that contain no animal products.");
            expect(foodDelivery.getCategory('Vegetarian')).to.equal("Dishes that contain no meat or fish.");
            expect(foodDelivery.getCategory('Gluten-Free')).to.equal("Dishes that contain no gluten.");
            expect(foodDelivery.getCategory('All')).to.equal("All available dishes.");
        })
    })

    describe('addMenuItem', () => {
        it('should throw error', () => {
            expect(() => foodDelivery.addMenuItem(23, [{name: 'gosho', price: 5}])).to.throw("Invalid Information!");
            expect(() => foodDelivery.addMenuItem(undefined, undefined)).to.throw("Invalid Information!");
            expect(() => foodDelivery.addMenuItem(null, null)).to.throw("Invalid Information!");
            expect(() => foodDelivery.addMenuItem(NaN, NaN)).to.throw("Invalid Information!");
            expect(() => foodDelivery.addMenuItem(NaN, NaN)).to.throw("Invalid Information!");
            expect(() => foodDelivery.addMenuItem([], 6)).to.throw("Invalid Information!");
            expect(() => foodDelivery.addMenuItem([], 3)).to.throw("Invalid Information!");
            expect(() => foodDelivery.addMenuItem([{name: 'gosho', price: 5}], 3)).to.throw("Invalid Information!");
        });

        it('should add item', () => {
            expect(foodDelivery.addMenuItem([{name: 'gosho', price: 5}], 7)).to.equal(`There are ${'1'} available menu items matching your criteria!`)
            expect(foodDelivery.addMenuItem([{name: 'gosho', price: 5}, {name: 'pepi', price: 4}], 7)).to.equal(`There are ${'2'} available menu items matching your criteria!`)
            expect(foodDelivery.addMenuItem([{name: 'gosho', price: 5}, {name: 'pepi', price: 8}], 7)).to.equal(`There are ${'1'} available menu items matching your criteria!`)
        })
    })

    describe('calculateOrderCost', () => {
        it('should throw error', () => {
            expect(() => foodDelivery.calculateOrderCost({}, {}, 'true')).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost(null, undefined, 'true')).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost([], [], 'false')).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost({}, {}, false)).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost({}, [], false)).to.throw("Invalid Information!");
        })

        it('should calc price', () => {
            expect(foodDelivery.calculateOrderCost(['standard'], ['sauce'], true)).to.equal(`You spend $${'3.40'} for shipping and addons with a 15% discount!`);
            expect(foodDelivery.calculateOrderCost(['express'], ['beverage'], false)).to.equal(`You spend $${'8.50'} for shipping and addons!`);
        })
    })
})