"use client"

import React, { useRef, useEffect, useState } from "react"

const BarChart = ({ height, points }: { height: number; points: number[] }) => {
  const svgRef = useRef<any>()
  const [width, setWidth] = useState(0)

  // Calculate the width of the container and set it to state
  useEffect(() => {
    let lastWidth = svgRef.current.parentElement.offsetWidth
    setWidth(lastWidth)

    const interval = setInterval(() => {
      if (svgRef.current.parentElement.offsetWidth !== lastWidth) {
        lastWidth = svgRef.current.parentElement.offsetWidth
        setWidth(lastWidth)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // The max value for the y-axis
  const maxValue = 50

  // Calculate the width of each bar by dividing the width of the container by the number of points
  const barWidth = Math.min((width - 20) / points.length, 10)

  // Calculate the scale factor based on height and maxValue
  const scaleY = (height - 30) / maxValue

  return (
    <svg ref={svgRef} width="100%" height={height}>
      {/* Draw bars */}
      {points.map(
        (point, i) =>
          point > 0 && (
            <rect
              key={i}
              x={width - 80 - (points.length - i) * barWidth}
              y={height - point * scaleY} // Invert the y position so the bars start from the bottom
              width={barWidth - 1} // Subtract 1 for spacing between bars
              height={point * scaleY}
              fill={"#9AE6B4"}
            />
          )
      )}

      {/* Y-axis labels */}
      {[0, 10, 20, 30, 40, 50].map((num, i) => (
        <text
          key={i}
          x={0}
          y={height - 10 - num * scaleY}
          fontSize="10"
          dy=".32em"
        >
          {num}
        </text>
      ))}
    </svg>
  )
}

export default BarChart
