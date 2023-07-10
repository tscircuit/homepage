"use client"

import { useState } from "react"
import {
  Link,
  Box,
  Button,
  chakra,
  Container,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react"
import * as emailValidator from "email-validator"
import { toast } from "react-hot-toast"
import { useIntercom } from "react-use-intercom"
import { TSCircuitLogo } from "./TSCircuitLogo"

export const SubscribeHero = () => {
  const { update } = useIntercom()
  const [email, setEmail] = useState("")
  return (
    <Box as="section" bg="bg-surface" py={{ base: "16", md: "24" }}>
      <Container>
        <Stack spacing={{ base: "8", md: "10" }} align="center">
          <Stack spacing={{ base: "4", md: "6" }} textAlign="center">
            <Stack spacing="3">
              <Box mb={16}>
                <TSCircuitLogo />
              </Box>
              <Heading size={{ base: "md", md: "lg" }} fontWeight="semibold">
                Build Circuits with React
              </Heading>
            </Stack>
            <Text color="muted" fontSize={{ base: "lg", md: "xl" }} maxW="3xl">
              Hi I'm{" "}
              <Link textDecor="underline" href="https://twitter.com/seveibar">
                @seveibar
              </Link>
              , I'm building{" "}
              <Link
                textDecor="underline"
                href="https://github.com/tscircuit/builder"
              >
                tscircuit
              </Link>{" "}
              to allow PCB/Circuit design with React.
              <br />
              <br />
              Follow Us On Twitter{" "}
              <Link textDecor="underline" href="https://twitter.com/tscircuit ">
                @tscircuit
              </Link>
            </Text>
          </Stack>
          <chakra.form width={{ base: "full", md: "md" }}>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing="4"
              shouldWrapChildren
            >
            </Stack>
          </chakra.form>
        </Stack>
      </Container>
    </Box>
  )
}
