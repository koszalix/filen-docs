import ApiEndpointLink from "@site/src/components/apiEndpointLink";

export default function EndpointsOverview() {
  function renderEndpoints(endpoints: [string, string][]) {
    return endpoints.map(endpoint => {
      return <li>
        <ApiEndpointLink endpoint={endpoint[0]} slug={endpoint[1].replaceAll(/ /g, "-").toLowerCase()} />
        <span style={{ width: 5, display: "inline-block" }} />
        ({endpoint[1]})
      </li>
    })
  }

  return <ul>{renderEndpoints([
    ["/upload/done", "mark an upload completed"],
  ])}</ul>
}