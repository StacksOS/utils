/**
 * microToStacks
 *
 * @param {Number} amountInMicroStacks - the amount of microStacks to convert
 * @param {Boolean} localString - format amount as local string
 * @returns {String} the amount of microStacks converted to Stacks
 * @example microToStacks(100000000); // "0.0001"
 */
export declare const microToStacks: (amountInMicroStacks: string | number, localString?: boolean) => number | string;
/**
 * stacksToMicro
 *
 * @param {String | Number} amountInStacks - the amount of stacks to convert
 * @returns {String} the amount of stacks converted to microStacks
 * @example stacksToMicro(10); // "100000000"
 */
export declare const stacksToMicro: (amountInStacks: string | number) => string | number;
/**
 * microToTokens
 *
 * @param {Number} amountInMicroTokens - the amount of microTokens to convert
 * @param {String | Number} decimals - the number of decimals to use
 * @param {Boolean} localString - format amount as local string
 * @returns {String} the amount of microTokens converted to Fungible Tokens
 * @example microToTokens(1000000, 6); // "1.00"
 */
export declare const microToTokens: (amountInMicroTokens: string | number, decimals: string | number, localString?: boolean) => number | string;
/**
 * tokensToMicro
 *
 * @param {String | Number} amountInTokens - the amount of stacks to convert
 * @param {String | Number} decimals - the number of decimals to use
 * @returns {String} the amount of tokens converted to microTokens
 * @example tokensToMicro(1, 6); // "1000000"
 */
export declare const tokensToMicro: (amountInTokens: string | number, decimals: string | number) => string | number;
