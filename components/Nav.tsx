"use client"

import { Box, Container, HStack, Link } from "@chakra-ui/react"

export const Nav = () => (
  <Box as="section" bg="bg-surface">
    <Container>
      <HStack
        sx={{
          "& a": {
            color: "blue.500",
            px: 1.5,
            pt: 4,
          },
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/roadmap">Roadmap</Link>
        <Link href="/getting-started">Getting Started</Link>
        <Link href="https://github.com/tscircuit/tscircuit">Github</Link>
        <Link href="https://join.slack.com/t/tscircuit/shared_invite/zt-260m7jjlw-eVLxjoIKsYS_bJK6R8jZHA">
          Slack
        </Link>
        <Link href="/changelog">Changelog</Link>
      </HStack>
    </Container>
  </Box>
)
