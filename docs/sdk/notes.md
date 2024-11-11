---
sidebar_position: 6
slug: /sdk/notes
---

# Notes

The SDK provides a low-level `notes` class which can be used to interact with all notes related functions.

:::tip Refer to generated SDK docs

If you need in depth information about implemented functions and types you can always take a look at the [generated SDK docs](https://sdk-ts-docs.filen.io/classes/_internal_.Notes.html).

:::

### Examples

```ts
// List all notes
await filen.notes().all()

// Create a note
await filen.notes().create({
	uuid: "uuidv4",
	title: "Example note"
})

// Edit a note
await filen.notes().edit({
	uuid: "uuidv4",
	content: "This is just an example note",
	type: typeof NoteType
})

// Fetch raw note content
await filen.notes().content({
	uuid: "uuidv4"
})

// Delete a note
await filen.notes().delete({
	uuid: "uuidv4"
})

// Archive a note
await filen.notes().archive({
	uuid: "uuidv4"
})
```
