// TODO this should be exported from PCBViewer

import { useMeasure } from "react-use"
import * as PCBViewer from "@tscircuit/pcb-viewer"
import { identity, compose, scale, translate } from "transformation-matrix"
import { useMemo, useState } from "react"
import useMouseMatrixTransform from "use-mouse-matrix-transform"

const defaultTransform = compose(translate(400, 300), scale(40, 40))

export default ({ soup }: { soup: any }) => {
  const [ref, refDimensions] = useMeasure()
  const [transform, setTransform] = useState(defaultTransform)
  const { ref: transformRef } = useMouseMatrixTransform({
    transform,
    onSetTransform: setTransform,
  })
  return (
    <div ref={transformRef as any}>
      <div ref={ref as any}>
        <PCBViewer.CanvasElementsRenderer
          key={refDimensions.width}
          elements={soup.elements as any}
          transform={transform}
          height={600}
          width={refDimensions.width}
          grid={{
            spacing: 1,
            view_window: {
              left: 0,
              right: refDimensions.width || 500,
              top: 600,
              bottom: 0,
            },
          }}
        />
      </div>
    </div>
  )
}
