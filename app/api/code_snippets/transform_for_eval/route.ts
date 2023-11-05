import { transform } from "@babel/standalone"
import * as React from "react"
// @ts-ignore
import reactJsx from "@babel/plugin-transform-react-jsx"
// @ts-ignore
import presetTypescript from "@babel/preset-typescript"

import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { user_input_code } = await req.json()

  try {
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
  } catch (e: any) {
    return NextResponse.json({
      error: {
        error_type: "could_not_transform",
        message: e.message,
      },
    })
  }
}

export const runtime = "nodejs"
