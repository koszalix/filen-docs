import React from "react";

export default function ApiEndpointLink({endpoint}: {endpoint: string}) {
  if (endpoint.startsWith("/")) endpoint = endpoint.substring(1)
  return (
    <a href={/*`/docs/api/${endpoint}`*/ `https://gateway.filen.io/v3/docs`} target={"_blank"}>
      <code>/{endpoint}</code>
    </a>
  )
}