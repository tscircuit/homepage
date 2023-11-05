import * as React from "react"

export const renderCircuitCodeToReactNodeBrowser = async (code: string) => {
  const { transformed_code, error } = await fetch(
    "/api/code_snippets/transform_for_eval",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_input_code: code,
      }),
    }
  ).then((res) => res.json())

  if (error) {
    throw new Error(error.message)
  }

  globalThis.React = React

  const Circuit = eval(transformed_code + ";Circuit")

  return Circuit()
}
