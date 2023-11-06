import createMdx from "@next/mdx"
import remarkGfm from "remark-gfm"

export default createMdx({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})({
  experimental: {
    appDir: true,
    esmExternals: "loose",
  },
  pageExtensions: ["mdx", "ts", "tsx"],
})
