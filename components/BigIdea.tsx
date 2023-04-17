import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Square,
  Stack,
  Text,
} from "@chakra-ui/react"
import { FiArrowRight } from "react-icons/fi"
import { BsStars } from "react-icons/bs"
import { TbTopologyComplex } from "react-icons/tb"
import { IoRocketSharp } from "react-icons/io5"

const features = [
  {
    name: "Simple and Modular",
    description: `Piggybacks off simple modular
      React component package conventions to achieve maximum
      interoperability. If you're familiar with React, you can write
      tscircuit today.`,
    icon: BsStars,
  },
  {
    name: "Circuits as Code",
    description: `Use the state of the art tools, like Copilot and Version Control when designing circuits. Collaborate more effectively with more flexible and reusable code.`,
    icon: IoRocketSharp,
  },
  {
    name: "Schematics and PCBs, together.",
    description: `tscircuit simultaneously renders to schematics and PCBs, allowing more information to be embedded when packaging components.`,
    icon: TbTopologyComplex,
  },
]

export const BigIdea = () => (
  <Box as="section" bg="bg-surface">
    <Box mt={32} bg="bg-accent" color="on-accent">
      <Container pt={{ base: "12", md: "16" }} pb={{ base: "12", md: "16" }}>
        <Stack spacing={{ base: "8", md: "10" }} align="center">
          <Stack spacing={{ base: "4", md: "5" }} textAlign="center">
            <Stack spacing="3">
              <Heading size={{ base: "sm", md: "md" }}>
                Circuits should be Code
              </Heading>
            </Stack>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              maxW="2xl"
              color="on-accent-muted"
            >
              Legacy PCBs are designed with complex proprietary software with
              limited interoperability.
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="bold"
              maxW="2xl"
              color="on-accent-muted"
            >
              tscircuit is an open-source React Fiber layer that allows you to
              write circuits using familiar web technologies.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
    <Container py={{ base: "16", md: "24" }}>
      <Stack spacing={{ base: "12", md: "16" }}>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "12", lg: "16" }}
        >
          <Stack
            spacing={{ base: "10", md: "12" }}
            maxW="xl"
            justify="center"
            width="full"
          >
            {features.map((feature) => (
              <Stack key={feature.name} spacing="4" direction="row">
                <Square
                  size={{ base: "10", md: "12" }}
                  bg="accent"
                  color="inverted"
                  borderRadius="lg"
                >
                  <Icon as={feature.icon} boxSize={{ base: "5", md: "6" }} />
                </Square>
                <Stack
                  spacing={{ base: "4", md: "5" }}
                  pt={{ base: "1.5", md: "2.5" }}
                >
                  <Stack spacing={{ base: "1", md: "2" }}>
                    <Text
                      fontSize={{ base: "lg", md: "xl" }}
                      fontWeight="medium"
                    >
                      {feature.name}
                    </Text>
                    <Text color="muted">{feature.description}</Text>
                  </Stack>
                  {/* <Button
                    variant="link"
                    colorScheme="blue"
                    rightIcon={<FiArrowRight fontSize="1.25rem" />}
                    alignSelf="start"
                  >
                    Read more
                  </Button> */}
                </Stack>
              </Stack>
            ))}
          </Stack>
          <Box width="full" overflow="hidden">
            {/* <Image
              maxW="100%"
              minH={{ base: "100%", lg: "560px" }}
              objectFit="cover"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="Developer"
            /> */}
          </Box>
        </Stack>
      </Stack>
    </Container>
  </Box>
)
