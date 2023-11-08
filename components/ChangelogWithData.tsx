import { Changelog } from "./Changelog"

export const ChangelogWithData = async () => {
  const changelog = await fetch(
    "https://changelog.tscircuit.com/changelogs/overview.json"
  ).then((r) => r.json())

  return <Changelog changelog={changelog} />
}
