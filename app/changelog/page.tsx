import { Nav } from "components/Nav"
import { Changelog } from "components/Changelog"
import { Background } from "components/Background"
import { ChangelogWithData } from "components/ChangelogWithData"

export default () => {
  return (
    <>
      <Nav />
      <Background>
        <ChangelogWithData />
      </Background>
    </>
  )
}
