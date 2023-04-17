"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import { theme as chakraProTheme } from "@chakra-ui/pro-theme"
import { IntercomProvider } from "react-use-intercom"
import { Toaster } from "react-hot-toast"

const theme = extendTheme({
  ...chakraProTheme,
  colors: {
    ...chakraProTheme.colors,
    brand: {
      "50": "#EBF8FF",
      "100": "#BEE3F8",
      "200": "#90CDF4",
      "300": "#63B3ED",
      "400": "#4299E1",
      "500": "#3182CE",
      "600": "#2B6CB0",
      "700": "#2C5282",
      "800": "#2A4365",
      "900": "#1A365D",
    },
  },
})

export const GlobalProviders = ({ children }: { children: any }) => (
  <IntercomProvider appId="yyavprka" autoBoot>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
    <Toaster />
  </IntercomProvider>
)
