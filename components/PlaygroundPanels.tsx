import { Box, Button, Container, Heading, Stack } from "@chakra-ui/react"
import { CodeEditor } from "./CodeEditor"
import { defaultCode } from "./CircuitEditor"
import { Schematic } from "@tscircuit/schematic-viewer"
import { remove_me_prerendered_elements } from "lib/tmp/prerendered-elements"
import { useEffect, useMemo, useReducer, useState } from "react"
import { renderCircuitCodeToReactNodeBrowser } from "lib/render-circuit-code-to-react-node-browser"
import { PCBViewer } from "@tscircuit/pcb-viewer"
import * as exampleCodes from "lib/example-circuits"
import { ErrorBoundary } from "react-error-boundary"

export const PlaygroundPanels = () => {
  const [code, setCode] = useState(exampleCodes.simpleCircuitCode)
  const [highlightedCircuitName, setHighlightedCircuitName] =
    useState("Simple Circuit")
  const [circuitComponent, setCircuitComponent] = useState(null)
  const [circuitRenderCount, incCircuitRenderCount] = useReducer(
    (s) => s + 1,
    0
  )
  const [codeResetCount, incCodeResetCount] = useReducer((s) => s + 1, 0)
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
      <Stack direction="row" mb={8}>
        {["Simple Resistor", "Simple Circuit"].map((circuitName) => (
          <Button
            variant="outline"
            onClick={() => {
              if (circuitName === "Simple Resistor") {
                setCode(exampleCodes.simpleResistorCode)
              } else if (circuitName === "Simple Circuit") {
                setCode(exampleCodes.simpleCircuitCode)
              }
              incCodeResetCount()
              setHighlightedCircuitName(circuitName)
            }}
            color={highlightedCircuitName === circuitName ? "white" : ""}
            bgColor={highlightedCircuitName === circuitName ? "blue.500" : ""}
            _hover={{
              color: "white",
              bgColor: "blue.500",
            }}
          >
            {circuitName}
          </Button>
        ))}
      </Stack>
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
            <ErrorBoundary
              key="sch1"
              fallback={<Box height={600}>Failed to render schematic</Box>}
            >
              <Schematic
                style={{
                  height: 600,
                  width: 700,
                }}
                showTable={false}
              >
                {circuitComponent}
              </Schematic>
            </ErrorBoundary>
          )}
          {circuitComponent && (
            <ErrorBoundary
              key={`pcb${circuitRenderCount}`}
              fallback={<Box height={600}>Failed to render pcb</Box>}
            >
              <Box backgroundColor="black" flexGrow={1} height="600px">
                <PCBViewer key={circuitRenderCount}>
                  {circuitComponent}
                </PCBViewer>
              </Box>
            </ErrorBoundary>
          )}
        </Stack>
        <Box display="flex" width="100%" height={400}>
          <CodeEditor
            key={codeResetCount}
            initialCode={code}
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
