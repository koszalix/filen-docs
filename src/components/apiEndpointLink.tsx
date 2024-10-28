import React from "react";

export default function ApiEndpointLink({endpoint, slug}: {endpoint: string, slug: string | undefined}) {
  if (endpoint.startsWith("/")) endpoint = endpoint.substring(1)
  return (
    <a href={slug !== undefined ? `/docs/api/specs/${slug}` : "https://gateway.filen.io/v3/docs"} target={"_blank"}>
      <code>/{endpoint}</code>
    </a>
  )
}