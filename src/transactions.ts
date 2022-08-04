/**
 * validateTxId
 *
 * @param {String} txId - the txId sha hash to validate
 */

export const validateTxId = (txId: string): any => {
  const regex = /0x[A-Fa-f0-9]{64}/;
  const matches = regex.exec(txId);

  return matches?.[0] === txId;
};