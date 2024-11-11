---
sidebar_position: 3
slug: /sdk/authentication
---

# Authentication

You can either use the SDK to login using your Filen credentials or provide a (stored) SDK config object.

### Example

```ts
import { FilenSDK } from "@filen/sdk"
import os from "os"
import path from "path"

const filen = new FilenSDK({
	metadataCache: true, // Cache decrypted metadata in memory. Recommended.
	connectToSocket: true, // Recommended if you are using the virtual FS class. Keeps the internal item tree up to date with remote changes.
	tmpPath: path.join(os.tmpdir(), "filen-sdk") // Temporary local path used to store metadata and chunks. Only available in Node.JS.
})

await filen.login({
	email: "your@email.com",
	password: "supersecret123",
	twoFactorCode: "123456" // Can be omitted if you do not have 2FA enabled.
})
```
