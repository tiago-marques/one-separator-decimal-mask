# one-separator-decimal-mask

![travis-ci.org](https://api.travis-ci.org/tiago-marques/one-separator-decimal-mask.svg?branch=master)

[![NPM](https://nodei.co/npm/one-separator-decimal-mask.png)](https://nodei.co/npm/one-separator-decimal-mask/)

* Converts input value to a string with separator decimal passed as paramater, locale is irrelevant. Using one-separator-decimal.

## Install

    npm install one-separator-decimal-mask

## Usage

```javascript
    import mask from 'one-separator-decimal-mask'

    ...

    /**
    * @license MIT License
    * @param {String} input
    * @param {String} [separator='.'] The separator is optional, default value is a dot.
    *
    */
    let result = mask('10,,')
    //result = "10"
```

## Validations

### NaN

    √ should return "" when the value is `test`

### Last index is not a number

    √ should return "10" when the value is `10,0`
    √ should return "10" when the value is `10,,`
    √ should return "10" when the value is `10..`

### Must return the input value

    √ should return "10," when the value is `10,`
    √ should return "10." when the value is `10.`

## License

MIT License
