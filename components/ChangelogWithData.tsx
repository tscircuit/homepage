import { Changelog } from "./Changelog"

export const ChangelogWithData = async () => {
  const changelog = await fetch(
    "https://changelog.tscircuit.com/changelogs/overview.json",
    {
      next: {
        revalidate: 3600,
      },
    }
  ).then((r) => r.json())

  return <Changelog changelog={changelog} />
}
