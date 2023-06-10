"use client"

import { Box, Container, Flex, HStack, Link, VStack } from "@chakra-ui/react"
import { Nav } from "components/Nav"
import { TSCircuitLogo } from "components/TSCircuitLogo"
import ReactMarkdown from "react-markdown"

const markdownContent = `

# Mission

We are building world-class code-first tooling for creating PCBs
using React. To do this we need to concretely establish the foundational
concepts of a React-based circuit-rendering system, most importantly
enabling a community to begin creating designs without worrying about
their code becoming obsolete.

We believe that by making circuits into code and using React's robust
pluggable architecture, developers will be able to create novel solutions
to circuit layout, error analysis, and pre-manufacture debugging.

# Step 1: Foundations

There are 3 core fundamental tools that must be in place:

* User-editable Layout System for Schematic and PCB
* PCB and Schematic Rendering with Basic Debug Tooling
* Robust packaging, type, and build support

# Step 2: Automatic Layout & Tracing

Tscircuit will be critized for lacking visual tools that have traditional
been used to constrain and adjust circuits. We believe that these visual
tools are a "local minimum", and code will greatly exceed their capabilities,
to demonstrate this we need to demonstrate automatic layout tooling so that
developers can copy and build on the foundation.

To demonstrate layout capabilities we should have an implementation of automatic
layout tooling that covers:
* Automatic "wiggling" of pcb components to fit together without manual effort
* ASCII-diagram layout
* Predictable automatic PCB traces

# Step 3: Simplify Development Tools

* Online sandboxes
* CLI for development: \`tscircuit dev\`
* \`create-tscircuit-component\`, \`create-tscircuit-library\` and \`create-circuit\`

# Step 4: Error Analysis 

Many users of tscircuit will be web developers with little/no experience
with traditional circuit design tools. We believe anyone can learn to build
circuits with code-based tools, and these tools will excel in teaching people
how to build circuits. To enable this community to adopt tscircuit as their
tool, and to give expert circuit designers more confidence in their designs,
we want to support static or type analysis that surfaces errors if you were
to have a PCB assembled in real life.

Some examples of errors we should surface:
* Missing pull-up resistors or other required connections
* Shorting between different voltages (especially power to gnd)
* Digital/Analog Signal Crossing

In addition to errors, we should enable warnings to be presented
in the rendering tooling:
* High power loss
* Recommended connections
* Out of stock component

# Step 5: Robust Community/Official Catalog

Just like React, tscircuit needs a massive catalog of components to make it the
fastest way to build components.

Our major goals to build a massive catalog:
* Have a library that contains the entire SparkFun catalog
* Automatically/AI generate common components
* Have robust search tools to quickly pull from the catalog

# Step 6: Equivalent Component Swapping, Vendor Integrations

TSCircuit is the first system that can enable transparent switching of
equivalent components for automatic BOM generation and live swapping.

For example, if you specify you'd like a \`<resistor footprint="0402" tol="0-5%" />\`,
we can automatically find component from your preferred vendor(s) at the lowest
cost.

You can even swap much larger subcomponents, for example, a \`<MotorController />\`
may be implemented with several alternatives specified, this allows real time
BOM analysis and swapping.


# Step 7: Strong Community Governance

Replacing the antiquated visual PCB design tools is critical, but the long-term
innovation of the project and preventing forking and incompatibilities is a major
goal.

React lost a lot of it's community by not acting in a community-first way, tscircuit
is community-first. Our mission is to create a rich ecosystem enabling people to build
PCBs.

Before forking or creating alternatives to tscircuit, consider that we are up
against goliaths in the visual-pcb design space. Let's work together to create
a strong ecosystem with community-driven innovation.

---

## Extra: Misc Major Low-Priority Features

* 3D rendering
* VS Code Extension

`.trim()

export default () => {
  return (
    <Box bg="bg-surface">
      <Container>
        <Nav />
        <Box
          sx={{
            "& h1": {
              fontSize: 32,
              mt: 8,
              mb: 4,
            },
            "& ul li": {
              ml: 8,
              my: 0.5,
            },
          }}
        >
          <VStack pt={16} pb={12}>
            <TSCircuitLogo />
          </VStack>
          <Flex align="center" justifyContent="center">
            <Box maxW={800}>
              <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}
