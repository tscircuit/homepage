"use client"

import { useState } from "react"
import { Box, Container, Link } from "@chakra-ui/react"
import { useIntercom } from "react-use-intercom"
import { BigIdea } from "components/BigIdea"
import { SubscribeHero } from "components/SubscribeHero"
import { Features } from "components/Features"
import { Nav } from "components/Nav"

export default () => {
  return (
    <>
      <Nav />
      <Box as="section" bg="bg-surface" py={{ base: "16", md: "24" }}>
        <Container>
          <Box>We're still working on the getting started guide!</Box>
          <Box
            sx={{
              "& a": {
                color: "blue.500",
                px: 1.5,
                pt: 4,
              },
            }}
          >
            Check out the{" "}
            <Link href="https://github.com/tscircuit/tscircuit">Main Repo</Link>{" "}
            for some basic usage!
          </Box>
        </Container>
      </Box>
    </>
  )
}
