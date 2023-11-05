"use client"

import { Box } from "@chakra-ui/react"

export const Background = ({ children }: any) => {
  return (
    <Box as="section" bg="bg-surface" py={{ base: "16", md: "24" }}>
      {children}
    </Box>
  )
}
