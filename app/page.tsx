"use client"

import { useState } from "react"
import { Box } from "@chakra-ui/react"
import { useIntercom } from "react-use-intercom"
import { BigIdea } from "components/BigIdea"
import { SubscribeHero } from "components/SubscribeHero"
import { Features } from "components/Features"

export default () => {
  return (
    <>
      <SubscribeHero />
      <BigIdea />
      <Features />
    </>
  )
}
