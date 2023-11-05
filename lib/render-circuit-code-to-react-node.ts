import { transform } from "@babel/standalone"
import * as React from "react"
// @ts-ignore
import reactJsx from "@babel/plugin-transform-react-jsx"
// @ts-ignore
import presetTypescript from "@babel/preset-typescript"

export const renderCircuitCodeToReactNode = (code: string) => {
  const transformResult = transform(code, {
    filename: "user_input.ts",
    plugins: [reactJsx],
    presets: [
      [
        presetTypescript,
        {
          isTSX: true,
          allExtensions: true,
        },
      ],
    ],
  })

  // Avoid tree-shaking React
  React.createElement

  const Circuit = eval(transformResult.code + ";Circuit")

  return Circuit()
}
