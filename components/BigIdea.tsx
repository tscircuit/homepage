import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Icon,
  Image,
  Square,
  Stack,
  Text,
} from "@chakra-ui/react"

export const BigIdea = () => (
  <Box as="section" bg="bg-surface">
    <Box bg="bg-accent" color="on-accent">
      <Container pt={{ base: "12", md: "16" }} pb={{ base: "12", md: "16" }}>
        <Stack spacing={{ base: "8", md: "10" }} align="center">
          <HStack spacing={{ base: "4", md: "5" }} textAlign="center">
            <Stack flexGrow={1} flexShrink={0} spacing="3">
              <Heading size={{ base: "sm", md: "md" }}>
                Circuits should be Code
              </Heading>
            </Stack>
            <Stack flexGrow={1} flexShrink={0} maxW="50%" pl={8}>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                maxW="2xl"
                textAlign="left"
                color="on-accent-muted"
              >
                Legacy PCBs are designed with complex proprietary software with
                limited interoperability.
              </Text>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                maxW="2xl"
                pt={3}
                textAlign="left"
                color="on-accent-muted"
              >
                tscircuit is an open-source React Fiber layer that allows you to
                write circuits using familiar web technologies.
              </Text>
            </Stack>
          </HStack>
        </Stack>
      </Container>
    </Box>
  </Box>
)
