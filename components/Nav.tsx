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
        <Link href="/github">Github</Link>
        <Link href="/slack">Slack</Link>
      </HStack>
    </Container>
  </Box>
)
