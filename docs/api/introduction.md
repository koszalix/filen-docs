---
sidebar_position: 1
---

# Introduction

## About the Filen API

The Filen API is used by our first-party clients, and it is publicly documented to enable external developers to build their own clients and other third-party applications that interface with Filen.

The Filen API can do everything our first-party clients can, which includes uploading and downloading files, managing files and directories, sharing items, accessing notes and contacts, having chat conversations, managing user-specific settings, and more.

:::info SKDs

If you're building an application written in JavaScript or TypeScript, our [TypeScript SDK](../sdk/introduction) provides developer-friendly wrappings of all API endpoints, and more.

There is also a [Go SDK](https://github.com/FilenCloudDienste/filen-sdk-go) that provides functionality for uploading/downloading and managing files and directories. It is currently work in progress!

:::

## How these docs are structured

In these guides, you will learn everything you need to know to access Filen in your own applications. The _Guides_ will walk you through how to authenticate with Filen, how to properly encrypt and decrypt data, and how to upload and download files. Refer to the _Endpoints_ for detailed information about the available API endpoints, which includes more features such as sharing, notes, contacts, chats, and other.

## General information

### API host

The Filen API is located at `gateway.filen.io`, but there are more hosts for redundancy:
- `gateway.filen.io`
- `gateway.filen.net`
- `gateway.filen-1.net`
- `gateway.filen-2.net`
- `gateway.filen-3.net`
- `gateway.filen-4.net`
- `gateway.filen-5.net`
- `gateway.filen-6.net`

For file transfers, there's also `ingest.filen.io`, `ingest.filen.net` etc. and `egest.filen.io`, `egest.filen.net` etc.

When connecting to the API, you should choose a host at random and retry on other hosts when a request fails.