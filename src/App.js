import React from 'react'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import { DetectDevice } from './useDetectDevice'

const App = () => {
  return (
    <DetectDevice.Provider>
      <Comp1 />
      <hr />
      <Comp2 />
    </DetectDevice.Provider>
  )
}

export default App
