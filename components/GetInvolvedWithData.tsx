import { GetInvolved } from "./GetInvolved"

export const GetInvolvedWithData = async () => {
  const overview = await fetch(
    "https://changelog.tscircuit.com/changelogs/overview.json"
  ).then((r) => r.json())

  return <GetInvolved overview={overview} />
}
