---
sidebar_position: 8
slug: /sdk/contacts
---

# Contacts

The SDK provides a low-level `contacts` class which can be used to interact with all contacts related functions.

:::tip Refer to generated SDK docs

If you need in depth information about implemented functions and types you can always take a look at the [generated SDK docs](https://sdk-ts-docs.filen.io/classes/_internal_.Contacts.html).

:::

### Examples

```ts
// List all contacts
await filen.contacts().all()

// List all incoming contact requests
await filen.contacts().incomingRequests()

// List all outgoing contact requests
await filen.contacts().outgoingRequests()

// Send a contact request
await filen.contacts().sendRequest({
	email: "filenuser@example.com"
})

// Accept a contact request
await filen.contacts().acceptRequest({
	uuid: "uuidv4"
})
```
