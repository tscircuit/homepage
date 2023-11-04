import * as React from "react"
import { renderToString } from "react-dom/server"
import { Schematic } from "@tscircuit/schematic-viewer"
import { renderCircuitCodeToReactNode } from "../../lib/render-circuit-code-to-react-node"

const code = `
const Circuit = () => (
  <resistor name="R1" resistance="10 ohm" center={[2, 1]} />
)
`.trim()

test("should transform tsx to browser compatible code", () => {
  expect(
    renderToString(
      React.createElement(Schematic, {
        children: [renderCircuitCodeToReactNode(code)],
      })
    )
  ).toBeDefined()
})
