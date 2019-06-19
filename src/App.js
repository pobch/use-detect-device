import React from 'react'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Comp3 from './Comp3'
import DetectDeviceProvider from './DetectDeviceProvider'

const App = () => {
  return (
    <DetectDeviceProvider>
      <Comp1 />
      <hr />
      <Comp2 />
      <hr />
      <Comp3 />
      <hr />
      <strong>
        Check 'resize' event listener in Debugger, there should be only one listener even though we
        bind this event in all of 3 components above
      </strong>
    </DetectDeviceProvider>
  )
}

export default App
