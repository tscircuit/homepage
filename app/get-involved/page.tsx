import { Nav } from "components/Nav"
import { Background } from "components/Background"
import { GetInvolvedWithData } from "components/GetInvolvedWithData"

export default () => {
  return (
    <>
      <Nav />
      <Background>
        {/* @ts-ignore */}
        <GetInvolvedWithData />
      </Background>
    </>
  )
}
