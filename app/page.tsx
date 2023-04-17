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
import { useIntercom } from "react-use-intercom"
import { toast } from "react-hot-toast"

export default () => {
  const { update } = useIntercom()
  const [email, setEmail] = useState("")
  return (
    <Box as="section" bg="bg-surface" py={{ base: "16", md: "24" }}>
      <Container>
        <Stack spacing={{ base: "8", md: "10" }} align="center">
          <Stack spacing={{ base: "4", md: "6" }} textAlign="center">
            <Stack spacing="3">
              <Text
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="medium"
                color="accent"
              >
                tscircuit
              </Text>
              <Heading size={{ base: "md", md: "lg" }} fontWeight="semibold">
                Build Circuits with React
              </Heading>
            </Stack>
            <Text color="muted" fontSize={{ base: "lg", md: "xl" }} maxW="3xl">
              Hi I'm <Link href="https://twitter.com/seveibar">@seveibar</Link>,
              I'm building{" "}
              <Link href="https://github.com/tscircuit/builder">tscircuit</Link>{" "}
              to allow PCB/Circuit design with React.
              <br />
              <br />
              Join our mailing list to get updates on the project.
            </Text>
          </Stack>
          <chakra.form width={{ base: "full", md: "md" }}>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing="4"
              shouldWrapChildren
            >
              <FormControl>
                <Input
                  size="lg"
                  placeholder="Enter your email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormControl>
              <Button
                onClick={() =>
                  toast.promise(
                    (async () => {
                      if (!emailValidator.validate(email)) {
                        throw new Error("invalid email")
                      }
                      await update({ email })
                    })(),
                    {
                      error: "Failed to subscribe",
                      success: "Subscribed!",
                      loading: "Subscribing...",
                    }
                  )
                }
                variant="primary"
                size="lg"
                width="full"
              >
                Subscribe
              </Button>
            </Stack>
          </chakra.form>
        </Stack>
      </Container>
    </Box>
  )
}
