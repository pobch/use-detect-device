import React from 'react'
import { useDetectDevice2 } from './useDetectDevice2'

export const DetectDeviceContext = React.createContext(null)

const DetectDeviceProvider = props => {
  const device = useDetectDevice2()

  return (
    <DetectDeviceContext.Provider value={device}>
      <div {...props} />
    </DetectDeviceContext.Provider>
  )
}

export default DetectDeviceProvider
