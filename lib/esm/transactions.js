/**
 * validateTxId
 *
 * @param {String} txId - the txId sha hash to validate
 */
export const validateTxId = (txId) => {
    const regex = /0x[A-Fa-f0-9]{64}/;
    const matches = regex.exec(txId);
    return (matches === null || matches === void 0 ? void 0 : matches[0]) === txId;
};
