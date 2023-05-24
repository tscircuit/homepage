"use client"

import dynamic from "next/dynamic"

const AceEditor = dynamic(
  async () => {
    const ace = await import("react-ace")
    await import("ace-builds/src-noconflict/mode-tsx")
    await import("ace-builds/src-noconflict/ext-language_tools")
    await import("ace-builds/src-noconflict/theme-monokai")
    return ace
  },
  {
    // eslint-disable-next-line react/display-name
    loading: () => <div>loading...</div>,
    ssr: false,
  }
)

export const CodeEditor = ({ initialCode }: { initialCode: string }) => {
  return (
    <AceEditor
      mode="tsx"
      defaultValue={initialCode}
      theme="monokai"
      // editorProps={{ $blockScrolling: true }}
    />
  )
}
