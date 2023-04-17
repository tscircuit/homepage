import { GlobalProviders } from "components/GlobalProviders"

export const metadata = {
  title: "tscircuit",
  description: "Write circuits with TypeScript and React",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <GlobalProviders>{children}</GlobalProviders>
      </body>
    </html>
  )
}
