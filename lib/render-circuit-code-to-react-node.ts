import { transform } from "@babel/standalone"
import * as React from "react"
import reactJsx from "@babel/plugin-transform-react-jsx"

export const renderCircuitCodeToReactNode = (code: string) => {
  const transformResult = transform(code, {
    plugins: [reactJsx],
  })

  // Avoid tree-shaking React
  React.createElement

  const Circuit = eval(transformResult.code + ";Circuit")

  return Circuit()
}
