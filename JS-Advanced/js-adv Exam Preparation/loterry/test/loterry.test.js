import { expect } from "chai";
import { lottery } from "../Lottery.js";

describe('Loterry', () => {
    describe('buyLotteryTicket', () => {
        it('test for invalid values', () => {
            expect(() => lottery.buyLotteryTicket('10', '20', 'true')).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket([10], {20: 20}, 'try')).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(undefined, null, NaN)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(null, null, null)).to.throw("Invalid input!");
        })

        it('should throw error if the boolean is false', () => {
            expect(() => lottery.buyLotteryTicket(10, 20, false)).to.throw("Unable to buy lottery ticket!");
        })

        it('should return result', () => {
            expect(lottery.buyLotteryTicket(2, 1, true)).to.equal(`You bought ${1} tickets for ${2}$.`);
            expect(lottery.buyLotteryTicket(10, 3, true)).to.equal(`You bought ${3} tickets for ${30}$.`);
        });
    })

    describe('checkTicket', () => {
        it('test for invalid inputs', () => {
            expect(() => lottery.checkTicket(2, '4')).to.throw("Invalid input!");
            expect(() => lottery.checkTicket({2: 2}, 4)).to.throw("Invalid input!");
            expect(() => lottery.checkTicket([3], 4)).to.throw("Invalid input!");
            expect(() => lottery.checkTicket([3], [4])).to.throw("Invalid input!");
            expect(() => lottery.checkTicket([3, 4, 5, 6, 7], [4, 5, 6, 7, 8, 9])).to.throw("Invalid input!");
            expect(() => lottery.checkTicket(null, null)).to.throw("Invalid input!");
            expect(() => lottery.checkTicket(undefined, undefined)).to.throw("Invalid input!");
            expect(() => lottery.checkTicket(NaN, NaN)).to.throw("Invalid input!");
        });

        it('should return message', () => {
            expect(lottery.checkTicket([7, 8, 9, 10, 5, 6], [7, 8, 9, 10, 0, 2])).to.equal("Congratulations you win, check your reward!")
            expect(lottery.checkTicket([1, 8, 4, 3, 5, 6], [7, 8, 9, 10, 5, 6])).to.equal("Congratulations you win, check your reward!")
            expect(lottery.checkTicket([1, 8, 4, 3, 5, 6], [7, 8, 9, 10, 5, 6])).to.equal("Congratulations you win, check your reward!")
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal("You win the JACKPOT!!!")
        })
    })
    
    describe('secondChance', () => {
        it('should return error', () => {
            expect(() => lottery.secondChance('2', {2: 2})).to.throw("Invalid input!");
            expect(() => lottery.secondChance(2, {2: 2})).to.throw("Invalid input!");
            expect(() => lottery.secondChance(null, [1, 2])).to.throw("Invalid input!");
            expect(() => lottery.secondChance(null, undefined)).to.throw("Invalid input!");
            expect(() => lottery.secondChance(undefined, undefined)).to.throw("Invalid input!");
            expect(() => lottery.secondChance(NaN, NaN)).to.throw("Invalid input!");
        })

        it('should return first message', () => {
            expect(lottery.secondChance(2, [2])).to.equal("You win our second chance prize!");
            expect(lottery.secondChance(2, [3])).to.equal("Sorry, your ticket didn't win!");
        })
    })
})