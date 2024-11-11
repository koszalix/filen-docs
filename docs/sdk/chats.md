---
sidebar_position: 7
slug: /sdk/chats
---

# Chats

The SDK provides a low-level `chats` class which can be used to interact with all chats related functions.

:::tip Refer to generated SDK docs

If you need in depth information about implemented functions and types you can always take a look at the [generated SDK docs](https://sdk-ts-docs.filen.io/classes/_internal_.Chats.html).

:::

### Examples

```ts
// List all conversations
await filen.chats().conversations()

// Create a conversation
await filen.chats().create({
	uuid: "uuidv4",
	contacts: typeof Contact[]
})

// Fetch chat messages from the given timestamp ordered DESC. Can be used for pagination.
await filen.chats().messages({
    conversation: "uuidv4",
    timestamp: Date.now() + 3600000
})

// Send a message
await filen.chats().sendMessage({
    uuid: "uuidv4",
    conversation: "uuidv4",
    message: "Hello!",
    replyTo?: "uuidv4"
})

// Delete a conversation
await filen.chats().delete({
	uuid: "uuidv4"
})

// Leave a conversation (if you are a participant)
await filen.chats().leave({
	uuid: "uuidv4"
})
```
