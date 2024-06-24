import { expect } from "chai";
import { rgbToHexColor } from "../rgbToHex.js";

describe ('input red', () => {
    it('test color', () => {
        expect(rgbToHexColor(255, 0, 0)).to.be.equal('#FF0000');
    });

    it('test green', () => {
        expect(rgbToHexColor(0, 255, 0)).to.be.equal('#00FF00')
    });

    it('test blue range', () => {
        expect(rgbToHexColor(0, 0, -1)).to.equal(undefined);
    });

    it('shoule return false first arg', () => {
        expect(rgbToHexColor(266, 0, 0)).to.be.equal(undefined);
    })
    it('shoule return false second arg', () => {
        expect(rgbToHexColor(0, 266, 0)).to.be.equal(undefined);
    })
    it('shoule return false third arg', () => {
        expect(rgbToHexColor(0, 266, 0)).to.be.equal(undefined);
    });

    it('should return und first', () => {
        expect(rgbToHexColor('255', 0, 0)).to.be.equal(undefined);
    })
    it('should return und second', () => {
        expect(rgbToHexColor(0, '255', 0)).to.be.equal(undefined);
    })
    it('should return und third', () => {
        expect(rgbToHexColor(0, 0, '255')).to.be.equal(undefined);
    })
})