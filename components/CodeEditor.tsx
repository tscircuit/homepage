"use client"

import dynamic from "next/dynamic"

const AceEditor = dynamic(
  async () => {
    const ace = await import("react-ace")
    await import("ace-builds/src-noconflict/mode-tsx")
    await import("ace-builds/src-noconflict/ext-language_tools")
    await import("ace-builds/src-noconflict/theme-cloud9_day")
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
      width="100%"
      mode="tsx"
      defaultValue={initialCode}
      theme="cloud9_day"
      // editorProps={{ $blockScrolling: true }}
    />
  )
}
