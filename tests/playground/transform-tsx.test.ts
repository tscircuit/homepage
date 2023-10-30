import { transform } from "@babel/standalone"
import reactJsx from "@babel/plugin-transform-react-jsx"

test("should transform tsx to browser compatible code", () => {
  const result = transform(
    `
  
export const App = () => (
  <div>
    hello world!
  </div>
)

`.trim(),
    {
      plugins: ["transform-react-jsx"],
    }
  )

  expect(result.code).toBe(0)
})
