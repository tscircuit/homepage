import { Box, Container, Heading, Stack } from "@chakra-ui/react"
import { CodeEditor } from "./CodeEditor"
import { defaultCode } from "./CircuitEditor"
import { Schematic } from "@tscircuit/schematic-viewer"
import { remove_me_prerendered_elements } from "lib/tmp/prerendered-elements"
import { useEffect, useMemo, useReducer, useState } from "react"
import { renderCircuitCodeToReactNodeBrowser } from "lib/render-circuit-code-to-react-node-browser"
import { PCBViewer } from "@tscircuit/pcb-viewer"

export const PlaygroundPanels = () => {
  const [code, setCode] = useState(defaultCode)
  const [circuitComponent, setCircuitComponent] = useState(null)
  const [circuitRenderCount, incCircuitRenderCount] = useReducer(
    (s) => s + 1,
    0
  )
  const [circuitErr, setCircuitErr] = useState<null | string>(null)

  useEffect(() => {
    async function transformAndEvalCode() {
      try {
        setCircuitComponent(await renderCircuitCodeToReactNodeBrowser(code))
        incCircuitRenderCount()
        setCircuitErr(null)
      } catch (e: any) {
        setCircuitErr(e.toString())
      }
    }
    transformAndEvalCode()
  }, [code])

  return (
    <Container position="relative">
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
        direction="column"
      >
        <Stack direction="row">
          {circuitComponent && (
            <Schematic
              style={{
                height: 600,
                width: 700,
              }}
              showTable={false}
            >
              {circuitComponent}
            </Schematic>
          )}
          {circuitComponent && (
            <Box backgroundColor="black" flexGrow={1} height="600px">
              <PCBViewer key={circuitRenderCount}>{circuitComponent}</PCBViewer>
            </Box>
          )}
        </Stack>
        <Box display="flex" width="100%" height={400}>
          <CodeEditor
            initialCode={defaultCode}
            onCodeChange={(code) => setCode(code)}
          />
        </Box>
      </Stack>
      {!circuitComponent && (
        <Box
          position="absolute"
          zIndex={999}
          padding={5}
          opacity={0.8}
          bottom={0}
          color="white"
          backgroundColor="orange.500"
          left={0}
          right={0}
          whiteSpace={"pre-wrap"}
        >
          Loading Rendering...
        </Box>
      )}
      {circuitErr && (
        <Box
          position="absolute"
          zIndex={999}
          padding={5}
          left={0}
          right={0}
          opacity={0.8}
          bottom={0}
          color="white"
          backgroundColor="red.500"
          width="100%"
          whiteSpace={"pre-wrap"}
        >
          {circuitErr}
        </Box>
      )}
    </Container>
  )
}
