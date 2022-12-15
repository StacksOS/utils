import { c32addressDecode } from 'c32check';
/**
 * validateStacksAddress
 *
 * @param {String} address - the STX address to validate
 * @returns {Boolean} true if valid, false otherwise
 * @example validateStacksAddress("ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM"); // true
 */
export const validateStacksAddress = (address) => {
    try {
        c32addressDecode(address);
        return true;
    }
    catch (e) {
        return false;
    }
};
/**
 * validateContractAddress
 *
 * @param {String} contractAddress - the contract address to validate
 * @returns {Boolean} true if valid, false otherwise
 * @example validateContractAddress("ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.hello-world"); // true
 */
export const validateContractAddress = (contractAddress) => {
    if (!contractAddress.includes('.'))
        return false;
    const stxAddress = contractAddress.split('.')[0];
    const contractName = contractAddress.split('.')[1];
    const nameRegex = /[a-zA-Z]([a-zA-Z0-9]|[-_!?+<>=/*])*$|^[-+=/*]$|^[<>]=?$/;
    try {
        const validStacksAddress = validateStacksAddress(stxAddress);
        const validName = nameRegex.exec(contractName);
        return !!(validName && validStacksAddress);
    }
    catch (e) {
        return false;
    }
};
/**
 * shortenAddress
 *
 * @param {String} address - the STX address to shorten
 * @param {String} length - the number of chars to keep on either end, defaults to 4
 * @returns {String} shortened address
 * @example shortenAddress("ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM"); // "ST1P...GZGM"
 */
export function shortenAddress(address, length = 4) {
    return `${address.substring(0, length)}...${address.substring(address.length - length)}`;
}
/**
 * truncateMiddle
 *
 * @param {String} input - the string to truncate
 * @param {Number} offset - the number of chars to keep on either end
 * @returns {String} truncated string
 * @example truncateMiddle("ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.hello-world"); // "ST1PQ…PGZGM.hello-world"
 */
export const truncateAddress = (input, offset = 5) => {
    var _a, _b;
    if (!input)
        return '';
    if (input.startsWith('0x')) {
        return shortenAddress(input, offset);
    }
    if (input.includes('.')) {
        const parts = input.split('.');
        const start = (_a = parts[0]) === null || _a === void 0 ? void 0 : _a.substring(0, offset);
        const end = (_b = parts[0]) === null || _b === void 0 ? void 0 : _b.substring(parts[0].length - offset, parts[0].length);
        return `${start}…${end}.${parts[1]}`;
    }
    else {
        const start = input === null || input === void 0 ? void 0 : input.substring(0, offset);
        const end = input === null || input === void 0 ? void 0 : input.substring(input.length - offset, input.length);
        return `${start}…${end}`;
    }
};
/**
 * @param {String} address - the contract address to split
 * @returns {Array} [stxAddress, contractName]
 * @example splitContractAddress("ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.hello-world"); // ["ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM", "hello-world"]
 */
export const splitContractAddress = (address) => {
    if (!address)
        return [];
    return address === null || address === void 0 ? void 0 : address.split('.');
};
