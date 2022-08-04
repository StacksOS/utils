const stacksos = require('@stacks-os/utils');
const {
  validateStacksAddress,
  validateContractAddress,
  shortenAddress,
  truncateAddress,
  validateTxId,
  microToTokens,
  tokensToMicro,
} = stacksos;
console.log(stacksos);
console.log(validateStacksAddress('ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM'));
console.log(shortenAddress('ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM'));
console.log(shortenAddress('ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM', 3));
console.log(truncateAddress('ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM'));
console.log(truncateAddress('ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.hello-world'));
console.log(validateContractAddress('ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM'));
console.log(microToTokens(1000000, 6, false));
console.log(tokensToMicro(1, 6));