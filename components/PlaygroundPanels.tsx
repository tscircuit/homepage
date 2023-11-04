import { Box, Container, Heading, Stack } from "@chakra-ui/react"
import { CodeEditor } from "./CodeEditor"
import { defaultCode } from "./CircuitEditor"
import { Schematic } from "@tscircuit/schematic-viewer"
import { remove_me_prerendered_elements } from "lib/tmp/prerendered-elements"
import { useMemo, useState } from "react"
import { renderCircuitCodeToReactNode } from "lib/render-circuit-code-to-react-node"

export const PlaygroundPanels = () => {
  const [code, setCode] = useState(defaultCode)

  const children = useMemo(() => {
    return renderCircuitCodeToReactNode(code)
  }, [code])

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
        <CodeEditor
          initialCode={defaultCode}
          onCodeChange={(code) => setCode(code)}
        />
        <Stack direction="column">
          <Schematic
            style={{
              height: 600,
              width: 700,
            }}
            showTable={false}
          >
            {children}
          </Schematic>
        </Stack>
      </Stack>
    </Container>
  )
}
