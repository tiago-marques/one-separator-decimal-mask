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
### Integer number input values
    √ should return "10" when the value is `10`
### Floating number input values
    √ should return "10.0" when the value is `10,0`
    √ should return "10.0" when the value is `10.0`
    √ should return "10.60" when the value is `10.60`
    √ should return "10.601" when the value is `10.601`
### Last index is not a number
    √ should return "10." when the value is `10,`
    √ should return "10." when the value is `10.`
    √ should return "10." when the value is `10,,`
    √ should return "10." when the value is `10..`
    √ should return "1000." when the value is `10,00,`
    √ should return "1000." when the value is `10.00.00`
### Second dot or comma
    √ should return "1000.01" when the value is `10,00,01`
    √ should return "1000.01" when the value is `10.00.01`

## License

MIT License
