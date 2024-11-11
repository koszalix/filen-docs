---
sidebar_position: 5
slug: /sdk/cloud
---

# Cloud

The SDK provides a low-level `cloud` class which can be used to interact with all file/directory related functions. You can upload/download files, create directories, delete/rename/move/share items and much more.

:::tip Refer to generated SDK docs

If you need in depth information about implemented functions and types you can always take a look at the [generated SDK docs](https://sdk-ts-docs.filen.io/classes/_internal_.Cloud.html).

:::

### Examples

```ts
// List items inside a directory
await filen.cloud().listDirectory({
	uuid: "uuidv4"
})

// List items inside the trash bin
await filen.cloud().listTrash()

// Rename a file
await filen.cloud().renameFile({
	uuid: "uuidv4",
	metadata: typeof FileMetadata,
	name: "newName",
	overwriteIfExists: typeof boolean
})

// Send a file to the trash bin
await filen.cloud().trashFile({
	uuid: "uuidv4"
})

// Create a directory
await filen.cloud().createDirectory({
	uuid: "uuidv4",
	name: "directoryName",
	parent: "uuidv4",
	renameIfExists: typeof boolean
})

// Upload a file
await filen.cloud().uploadLocalFile({
	source: "/path/to/local/file.txt",
	parent: "uuidv4",
	name: "file.txt"
})

// Download a file
await filen.cloud().downloadFileToLocal({
	uuid: "uuidv4",
	bucket: "filen-1",
	region: "de-1",
	chunks: 1,
	version: typeof FileEncryptionVersion,
	key: "TrHQda5sCsXCH8NZbKx0lxfYHpt5JClh",
	size: 123,
	to: "/path/to/local/file.txt"
})
```
