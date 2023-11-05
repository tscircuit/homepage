import { Changelog } from "./Changelog"
import axios from "axios"

export const ChangelogWithData = async () => {
  const changelog = await axios
    .get("https://changelog.tscircuit.com/changelogs/overview.json")
    .then((r) => r.data)

  return <Changelog changelog={changelog} />
}
