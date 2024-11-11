---
sidebar_position: 9
slug: /sdk/crypto
---

# Crypto

The SDK provides a low-level helper `crypto` class which can be used to interact with all crypto related functions.

:::tip Refer to generated SDK docs

If you need in depth information about implemented functions and types you can always take a look at the [generated SDK docs](https://sdk-ts-docs.filen.io/classes/_internal_.Crypto.html).

:::

### Examples

```ts
const key = "cryptographicallySafeRandomGeneratedKey"

const encrypted = await filen.crypto().encrypt().metadata({
	metadata: "foobar",
	key
})

const decrypted = await filen.crypto().decrypt().metadata({
	metadata: encrypted,
	key
})
```
