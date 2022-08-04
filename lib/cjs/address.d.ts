/**
 * validateStacksAddress
 *
 * @param {String} address - the STX address to validate
 * @returns {Boolean} true if valid, false otherwise
 * @example validateStacksAddress("ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM"); // true
 */
export declare const validateStacksAddress: (address: string) => boolean;
/**
 * validateContractAddress
 *
 * @param {String} contractAddress - the contract address to validate
 * @returns {Boolean} true if valid, false otherwise
 * @example validateContractAddress("ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.hello-world"); // true
 */
export declare const validateContractAddress: (contractAddress: string) => boolean;
/**
 * shortenAddress
 *
 * @param {String} address - the STX address to shorten
 * @param {String} length - the number of chars to keep on either end, defaults to 4
 * @returns {String} shortened address
 * @example shortenAddress("ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM"); // "ST1P...GZGM"
 */
export declare function shortenAddress(address: string, length?: number): string;
/**
 * truncateMiddle
 *
 * @param {String} input - the string to truncate
 * @param {Number} offset - the number of chars to keep on either end
 * @returns {String} truncated string
 * @example truncateMiddle("ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.hello-world"); // "ST1PQ…PGZGM.hello-world"
 */
export declare const truncateAddress: (input: string, offset?: number) => string;
/**
 * @param {String} address - the contract address to split
 * @returns {Array} [stxAddress, contractName]
 * @example splitContractAddress("ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.hello-world"); // ["ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM", "hello-world"]
 */
export declare const splitContractAddress: (address: string) => string[];
