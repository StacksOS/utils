/**
 * microToStacks
 *
 * @param {Number} amountInMicroStacks - the amount of microStacks to convert
 * @param {Boolean} localString - format amount as local string
 * @returns {String} the amount of microStacks converted to Stacks
 * @example microToStacks(100000000); // "0.0001"
 */
export const microToStacks = (amountInMicroStacks, localString = true) => {
    const value = Number(Number(amountInMicroStacks) / Math.pow(10, 6));
    if (localString) {
        return value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 });
    }
    return value;
};
/**
 * stacksToMicro
 *
 * @param {String | Number} amountInStacks - the amount of stacks to convert
 * @returns {String} the amount of stacks converted to microStacks
 * @example stacksToMicro(10); // "100000000"
 */
export const stacksToMicro = (amountInStacks) => amountInStacks ? Math.floor(Number(amountInStacks) * 1000000) : 0;
/**
 * microToTokens
 *
 * @param {Number} amountInMicroTokens - the amount of microTokens to convert
 * @param {String | Number} decimals - the number of decimals to use
 * @param {Boolean} localString - format amount as local string
 * @returns {String} the amount of microTokens converted to Fungible Tokens
 * @example microToTokens(1000000, 6); // "1.00"
 */
export const microToTokens = (amountInMicroTokens, decimals, localString = true) => {
    const value = Number(Number(amountInMicroTokens) / Math.pow(10, Number(decimals)));
    if (localString) {
        return value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 });
    }
    return value;
};
/**
 * tokensToMicro
 *
 * @param {String | Number} amountInTokens - the amount of stacks to convert
 * @param {String | Number} decimals - the number of decimals to use
 * @returns {String} the amount of tokens converted to microTokens
 * @example tokensToMicro(1, 6); // "1000000"
 */
export const tokensToMicro = (amountInTokens, decimals) => amountInTokens ? Math.floor(Number(amountInTokens) * Math.pow(10, parseInt(decimals.toString()))) : 0;
