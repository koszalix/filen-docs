import ApiEndpointLink from "@site/src/components/apiEndpointLink";

type TreeItem = [string, string] | {title: string, items: TreeItem[]}

export default function EndpointsOverview() {
  function renderEndpoints(endpoints: TreeItem[]) {
    return <ul> {endpoints.map(endpoint => {
      if (Array.isArray(endpoint)) { // is entry
        return <li>
          <ApiEndpointLink endpoint={endpoint[0]} slug={endpoint[1].replaceAll(/ /g, "-").toLowerCase()} />
          <span style={{ width: 5, display: "inline-block" }} />
          ({endpoint[1]})
        </li>;
      } else { // is category
        return <li>
          {endpoint.title}:
          {renderEndpoints(endpoint.items)}
        </li>
      }
    })} </ul>
  }

  return renderEndpoints([
    ["/health", "get API health"],
    {
      title: "user",
      items: [
        ["/auth/info", "get auth info"],
        ["/login", "login"],
        ["/user/masterKeys", "retrieve and update user master keys"],
        ["/user/keyPair/info", "get encrypted user keypair"],
        ["/user/keyPair/update", "update user keypair"],
        ["/user/keyPair/set", "set user keypair"],
        ["/user/publicKey", "get user public key"],
      ]
    },
    {
      title: "items",
      items: [
        ["/user/baseFolder", "get user base folder"],
        {
          title: "files",
          items: [
            ["/file", "get file info"],
            ["/upload/done", "mark an upload completed"],
            ["/file/present", "check if file exists"],
            ["/file/exists", "check if file exists by name"],
            ["/file/move", "move file"],
            ["/file/rename", "rename file"],
            ["/file/trash", "trash file"],
            ["/file/restore", "restore file"],
            ["/file/delete/permanent", "delete file permanently"],
          ]
        }, 
        {
          title: "directories",
          items: [
            ["/dir", "get directory info"],
            ["/dir/content", "get directory content"],
            ["/dir/download", "get directory tree"],
            ["/dir/tree", "get flattened directory tree"],
            ["/dir/create", "create directory"],
            ["/dir/present", "check if directory exists"],
            ["/dir/exists", "check if directory exists by name"],
            ["/dir/size", "get directory size"],
            ["/dir/move", "move directory"],
            ["/dir/rename", "rename directory"],
            ["/dir/trash", "trash directory"],
            ["/dir/restore", "restore directory"],
            ["/dir/delete/permanent", "delete directory permanently"],
            ["/dir/color", "change directory color"],
            ["/dir/shared", "check if directory is shared"],
          ]
        },
        ["/trash/empty", "empty trash"],
        ["/item/favorite", "change item favorited"],
      ]
    },
    {
      title: "public links",
      items: [
        {
          title: "file public links",
          items: [
            ["/file/link/info", "get file public link info"],
            ["/file/link/status", "get file public link status"],
            ["/file/link/edit", "edit file public link"],
            ["/file/link/password", "check if file public link is password-protected"],
          ]
        },
        {
          title: "directory public links",
          items: [
            ["/dir/link/info", "get directory public link info"],
            ["/dir/link/status", "get directory public link status"],
            ["/dir/link/content", "get directory public link content"],
            ["/dir/link/edit", "edit directory public link"],
            ["/dir/link/add", "add item to directory public link"],
            ["/dir/link/remove", "remove directory public link"],
            ["/dir/size/link", "get directory public link size"],
            ["/dir/download/link", "get directory tree of public link"],
          ]
        },
        ["/item/linked/rename", "rename public linked directory item"],
        ["/dir/linked", "check if directory is public linked"],
        ["/item/linked", "check if item is in public link"],
      ]
    },
    {
      title: "shared",
      items: [
        ["/shared/in", "get shared in items"],
        ["/shared/out", "get shared out items"],
        ["/dir/download/shared", "get directory tree of shared folder"],
        ["/item/share", "create share out"],
        ["/item/shared", "check if item is shared"],
        ["/item/shared/rename", "rename shared item"],
        ["/item/shared/in/remove", "remove shared in item"],
        ["/item/shared/out/remove", "remove shared out item"],
      ]
    },
  ])
}