import { GetInvolved } from "./GetInvolved"
import axios from "axios"

export const GetInvolvedWithData = async () => {
  const overview = await axios
    .get("https://changelog.tscircuit.com/changelogs/overview.json")
    .then((r) => r.data)

  return <GetInvolved overview={overview} />
}
