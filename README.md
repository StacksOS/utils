# StacksOS/utils

This library is a collection of utility functions for working with addresses, tokens, and transactions in the Stacks ecosystem. I noticed as I started to build out various Stacks projects, I was re-using a lot of common functions (and other projects were doing the same). This library is intended to be one stop shop for those common use-cases.

## Installation
  
```bash
yarn add @stacks-os/utils
```

## Use cases

To validate a Stacks address:

```js
import { validateStacksAddress } from '@stacks-os/utils';

console.log(validateStacksAddress('0xF71cF8fC14DF4fFc607258c42E93ACa9Cb96F091')); // false
console.log(validateStacksAddress('ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM')); // true
```

# License

MIT license, all good as long as the copyright and permission notice are included.