/***
 * MIT License
 *
 * Copyright (c) 2018 Tiago D'Oliveira Marques dos Santos (tiago-marques)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const mask = require('../lib/index')
const assert = require('assert');

describe('one-separator-decimal-mask', function () {

    describe('NaN', function () {
        it('should return "" when the value is `test`', function () {
            assert.deepStrictEqual(mask("test"), "");
        });
    });

    describe('Integer number input values', function () {
        it('should return "10" when the value is `10`', function () {
            assert.equal(mask("10"), "10");
        });
    });
    describe('Floating number input values', function () {
        it('should return "10.0" when the value is `10,0`', function () {
            assert.equal(mask("10,0"), "10.0");
        });
        it('should return "10.0" when the value is `10.0`', function () {
            assert.equal(mask("10.0"), "10.0");
        });
        it('should return "10.60" when the value is `10.60`', function () {
            assert.equal(mask("10.60"), "10.60");
        });
        it('should return "10.601" when the value is `10.601`', function () {
            assert.equal(mask("10.601"), "10.601");
        });
    });

    describe('Last index is not a number', function () {
        it('should return "10." when the value is `10,`', function () {
            assert.equal(mask("10,"), "10.");
        });
        it('should return "10." when the value is `10.`', function () {
            assert.equal(mask("10."), "10.");
        });
        it('should return "10." when the value is `10,,`', function () {
            assert.equal(mask("10,,"), "10.");
        });
        it('should return "10." when the value is `10..`', function () {
            assert.equal(mask("10.."), "10.");
        });
        it('should return "1000." when the value is `10,00,`', function () {
            assert.equal(mask("10,00,"), "1000.");
        });
        it('should return "1000." when the value is `10.00.00`', function () {
            assert.equal(mask("10.00."), "1000.");
        });
    });

    describe('Second dot or comma', function () {
        it('should return "1000.01" when the value is `10,00,01`', function () {
            assert.equal(mask("10,00,01"), "1000.01");
        });
        it('should return "1000.01" when the value is `10.00.01`', function () {
            assert.equal(mask("10.00.01"), "1000.01");
        });
    });

});
