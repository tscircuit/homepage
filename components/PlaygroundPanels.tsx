import { Box, Container, Heading, Stack } from "@chakra-ui/react"
import { CodeEditor } from "./CodeEditor"
import { defaultCode } from "./CircuitEditor"
import { Schematic } from "@tscircuit/schematic-viewer"
import { remove_me_prerendered_elements } from "lib/tmp/prerendered-elements"

export const PlaygroundPanels = () => {
  return (
    <Container>
      <Heading size="sm" fontWeight="semibold" mb={8}>
        Playground
      </Heading>
      <Stack
        sx={{
          border: "1px solid #ccc",
          borderRadius: 8,
          boxShadow: "3px 3px 5px rgba(0,0,0,0.1)",
        }}
        mb={16}
        direction="row"
      >
        <CodeEditor initialCode={defaultCode} />
        <Stack direction="column">
          <Schematic
            style={{
              height: 600,
              width: 700,
            }}
            showTable={false}
            elements={remove_me_prerendered_elements}
          />
        </Stack>
      </Stack>
    </Container>
  )
}
