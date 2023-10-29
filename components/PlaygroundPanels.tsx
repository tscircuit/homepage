import { Box, Container, Stack } from "@chakra-ui/react"
import { CodeEditor } from "./CodeEditor"
import { defaultCode } from "./CircuitEditor"
import { Schematic } from "@tscircuit/schematic-viewer"
import { remove_me_prerendered_elements } from "lib/tmp/prerendered-elements"

export const PlaygroundPanels = () => {
  return (
    <Container>
      <Stack direction="row">
        <CodeEditor initialCode={defaultCode} />
      </Stack>
      <Stack direction="column">
        {/* https://github.com/tscircuit/schematic-viewer/issues/12 */}
        <Schematic
          style={{
            height: 600,
          }}
          elements={remove_me_prerendered_elements}
        />
      </Stack>
    </Container>
  )
}
