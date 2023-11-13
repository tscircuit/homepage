import { GetInvolved } from "./GetInvolved"

export const GetInvolvedWithData = async () => {
  const overview = await fetch(
    "https://changelog.tscircuit.com/changelogs/overview.json",
    {
      next: {
        revalidate: 3600,
      },
    }
  ).then((r) => r.json())

  return <GetInvolved overview={overview} />
}
