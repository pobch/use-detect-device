import React from 'react'
import { useDetectDevice } from './useDetectDevice'

export const DetectDeviceContext = React.createContext(null)

const DetectDeviceProvider = props => {
  const device = useDetectDevice()
  return (
    <DetectDeviceContext.Provider value={device}>
      <div {...props} />
    </DetectDeviceContext.Provider>
  )
}

export default DetectDeviceProvider
