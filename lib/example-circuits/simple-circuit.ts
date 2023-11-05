export const simpleCircuitCode = `

const Circuit = () => (
  <>
    <bug
      name="B1"
      port_arrangement={{ left_size: 3, right_size: 3 }}
      center={[0, 0]}
      footprint="sot236"
      port_labels={{
        1: "PWR",
        2: "NC",
        3: "RG",
        4: "D0",
        5: "D1",
        6: "GND",
      }}
    />
    <resistor x={2} y={-0.5} name="R1" resistance="10ohm" footprint="0805" pcb_x="4mm" pcb_y="-1mm" />
    <ground x={3} y={1} name="GND" />
    <trace path={[".B1 > .D0", ".R1 > .left"]} />
    <trace path={[".R1 > .right", ".GND > .gnd"]} />
  </>
)

`.trim()