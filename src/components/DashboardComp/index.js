import React, { useEffect, useState } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'

function DashboardComp() {

  const [isGrapping, setIsGrapping] = useState(false)

  const ResponsiveGridLayout = WidthProvider(Responsive)

  const layout = [
    { i: "first", x:0, y:0, w:1, h:1 },
    { i: "second", x:1, y:0, w:1, h:1 },
    { i: "third", x:2, y:0, w:1, h:1 },
    { i: "fourth", x:3, y:0, w:1, h:1 },
    { i: "fifth", x:4, y:0, w:1, h:1 },
  ]

 

  return (
    <div>
      <ResponsiveGridLayout
        layouts={{lg: layout}}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 3, md: 3, sm: 2, xs: 2, xxs: 1 }}
        rowHeight={100}
        width={1000}
        compactType={'horizontal'}
      >
        <div key="first" className="item">
          <div>
              first
          </div>
        </div>
        <div key="second" className="item">
          <div>
              second
          </div>
        </div>
        <div key="third" className="item">
          <div>
              third
          </div>
        </div>
        <div key="fourth" className="item">
          <div>
              fourth
          </div>
        </div>
        <div key="fifth" className="item">
          <div>
              fifth
          </div>
        </div>

      </ResponsiveGridLayout>
    </div>
  )
}

export default DashboardComp