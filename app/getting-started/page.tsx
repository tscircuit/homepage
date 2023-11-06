"use client"

import { Nav } from "components/Nav"
import Concepts from "markdown/concepts.mdx"
import { Background } from "components/Background"
import { Container } from "@chakra-ui/react"

export default () => {
  return (
    <>
      <Nav />
      <Background>
        <Container>
          <Concepts />
        </Container>
      </Background>
    </>
  )
}
