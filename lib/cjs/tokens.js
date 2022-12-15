"use strict";
/**
 * microToStacks
 *
 * @param {Number} amountInMicroStacks - the amount of microStacks to convert
 * @param {Boolean} localString - format amount as local string
 * @returns {String} the amount of microStacks converted to Stacks
 * @example microToStacks(1000000); // "1.00"
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokensToMicro = exports.microToTokens = exports.stacksToMicro = exports.microToStacks = void 0;
const microToStacks = (amountInMicroStacks, localString = true) => {
    const value = Number(Number(amountInMicroStacks) / Math.pow(10, 6));
    if (localString) {
        return value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 });
    }
    return value;
};
exports.microToStacks = microToStacks;
/**
 * stacksToMicro
 *
 * @param {String | Number} amountInStacks - the amount of stacks to convert
 * @returns {String} the amount of stacks converted to microStacks
 * @example stacksToMicro(1); // "1000000"
 */
const stacksToMicro = (amountInStacks) => amountInStacks ? Math.floor(Number(amountInStacks) * 1000000) : 0;
exports.stacksToMicro = stacksToMicro;
/**
 * microToTokens
 *
 * @param {Number} amountInMicroTokens - the amount of microTokens to convert
 * @param {String | Number} decimals - the number of decimals to use
 * @param {Boolean} localString - format amount as local string
 * @returns {String} the amount of microTokens converted to Fungible Tokens
 * @example microToTokens(1000000, 6); // "1.00"
 */
const microToTokens = (amountInMicroTokens, decimals, localString = true) => {
    const value = Number(Number(amountInMicroTokens) / Math.pow(10, Number(decimals)));
    if (localString) {
        return value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 });
    }
    return value;
};
exports.microToTokens = microToTokens;
/**
 * tokensToMicro
 *
 * @param {String | Number} amountInTokens - the amount of stacks to convert
 * @param {String | Number} decimals - the number of decimals to use
 * @returns {String} the amount of tokens converted to microTokens
 * @example tokensToMicro(1, 6); // "1000000"
 */
const tokensToMicro = (amountInTokens, decimals) => amountInTokens ? Math.floor(Number(amountInTokens) * Math.pow(10, parseInt(decimals.toString()))) : 0;
exports.tokensToMicro = tokensToMicro;
