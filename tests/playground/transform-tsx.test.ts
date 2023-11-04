import { transform } from "@babel/standalone"
import * as React from "react"
import { renderToString } from "react-dom/server"
import reactJsx from "@babel/plugin-transform-react-jsx"
import { Schematic } from "@tscircuit/schematic-viewer"

test("should transform tsx to browser compatible code", () => {
  const result = transform(
    `
const Circuit = () => (
  <resistor name="R1" resistance="10 ohm" center={[2, 1]} />
)
`.trim(),
    {
      plugins: [reactJsx],
    }
  )

  // Avoid tree-shaking React
  React.createElement

  const Circuit = eval(result.code + ";Circuit")

  expect(
    renderToString(
      React.createElement(Schematic, {
        children: [Circuit()],
      })
    )
  ).toBeDefined()
})
