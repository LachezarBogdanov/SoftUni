import { expect } from "chai";
import { PaymentPackage } from "../paymentPackage.js";

describe ('input values', () => {
    let payment;

    beforeEach(() => {
        payment = new PaymentPackage('Gosho', 10);
    })

    afterEach(() => {
        payment = null;
    })

    it('should be name', () => {
        expect(payment._name).to.be.equal('Gosho');
    })

    it('should be value', () => {
        expect(payment.value).to.be.equal(10);
    })

    it('should be Vat', () => {
        expect(payment.VAT).to.be.equal(20);
    })

    it('should be active', () => {
        expect(payment.active).to.be.equal(true)
    })
})

describe('test invalid values', () => {
    let payment;

    beforeEach(() => {
        payment = new PaymentPackage('gosho', 10);
    })

    it('invalid name', () => {
        expect(new PaymentPackage('', 20)).to.throw(Error, 'name must be a non empty string');
        expect(new PaymentPackage(20, 20)).to.throw(Error, 'name must be a non empty string');
    })

    it('should be a non-negative number', () => {
        expect(new PaymentPackage('tosho', -10)).to.throw(Error, 'value must be a non negative number')
        expect(new PaymentPackage('tosho', 'abc')).to.throw(Error, 'value must be a non negative number')
    })

    it('should be a non-negative num', () => {
        expect(payment.VAT === '10').to.throw(Error, 'VAT must be a non negative number')
    })

    it('should be boolean', () => {
        expect(payment.active === 'true').to.throw(Error, 'active must be boolean')
        expect(payment.active === 'Gosho').to.throw(Error, 'active must be boolean')
        expect(payment.active === 10).to.throw(Error, 'active must be boolean')
    })
})

describe('test Accessors', () => {
    let payment;

    beforeEach(() => {
        payment = new PaymentPackage('Tosho', 30);
    })

    it('correct get and set name', () => {
        expect(payment.name).to.be.equal('Tosho');
        payment._name = 'Gosho';
        expect(payment.name).to.be.equal('Gosho');
    })

    it('correct get and set values', () => {
        expect(payment.value).to.be.equal(30);
        payment.value = 20;
        expect(payment.value).to.be.equal(20);
    })

    it('correct get and set VAT', () => {
        expect(payment.VAT).to.be.equal(20);
        payment.VAT = 10;
        expect(payment.VAT).to.be.equal(10);
    })

    it('correct get and set active', () => {
        expect(payment.active).to.be.equal(true);
        payment.active = false;
        expect(payment.active).to.be.equal(false);
    })
})

describe('test toString', () => {
    let payment;
    beforeEach(() => {
        payment = new PaymentPackage('Pesho', 10);
    })
    it('test toString with active true', () => {
        let res = [
            `Package: Pesho`,
            `- Value (excl. VAT): 10`,
            `- Value (VAT 20%): 12`
          ]

          expect(payment.toString()).to.be.equal(res.join('\n'))
    })

    it('test toString with active false', () => {
        let res = [
            `Package: Pesho (inactive)`,
            `- Value (excl. VAT): 10`,
            `- Value (VAT 20%): 12`
          ]
          payment.active = false;
          expect(payment.toString()).to.be.equal(res.join('\n'))
    })
})