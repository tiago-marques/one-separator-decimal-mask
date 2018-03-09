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
"use strict";
const convert = require('one-separator-decimal');

const not_number = require('one-separator-decimal').not_number;
const spaces = require('one-separator-decimal').spaces;
const remove = require('one-separator-decimal').remove;
/**
 * Converts input value to a string with separator decimal passed as paramater, locale is irrelevant. Using one-separator-decimal.
 *
 * @license MIT License
 * @param {String} input
 * @param {String} [separator='.'] The separator is optional, default value is a dot.
 *
 */
module.exports = function (input, separator = '.') {
    let spacesRegExp = new RegExp(spaces, "g")
    let notNumberRegExp = new RegExp(not_number, "g");

    let withoutSpacesInputValue = input.replace(spacesRegExp, remove)
    let dotInputValue = withoutSpacesInputValue.replace(notNumberRegExp, separator);

    let notNumberFound = dotInputValue.match(notNumberRegExp)

    if (notNumberFound && notNumberFound.length > 1 || dotInputValue.slice(-1) !== separator) {
        let result = convert(dotInputValue, separator);
        
        if (isNaN(result)) {
            return "";
        }

        if (dotInputValue.slice(-1) === separator) {
            return String(result + separator)
        }

        return String(result);
    }

    return dotInputValue;
}