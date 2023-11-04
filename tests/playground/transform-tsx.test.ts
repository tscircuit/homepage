import { transform } from "@babel/standalone"
import reactJsx from "@babel/plugin-transform-react-jsx"

test("should transform tsx to browser compatible code", () => {
  const result = transform(
    `
  
var Circuit = () => (
  <resistor name="R1" resistance="10 ohm" center={[2, 1]} />
)

return Circuit
`.trim(),
    {
      plugins: ["transform-react-jsx"],
    }
  )

  // Let's eval some tscircuit code
  console.log(result.code)
  console.log(eval(result.code))

  expect(result.code).toBe(0)
})
