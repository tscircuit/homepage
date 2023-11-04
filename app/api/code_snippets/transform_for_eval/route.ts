import { transform } from "@babel/standalone"
import * as React from "react"
import reactJsx from "@babel/plugin-transform-react-jsx"
import presetTypescript from "@babel/preset-typescript"

import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { user_input_code } = await req.json()

  const transformResult = transform(user_input_code, {
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

  return NextResponse.json({
    transformed_code: transformResult.code,
  })
}

export const runtime = "nodejs"
