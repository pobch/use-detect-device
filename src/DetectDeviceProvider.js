import React from 'react'
import { useDetectDevice } from './useDetectDevice'
import { DEVICE_MINWIDTH } from './deviceWidth'

export const DetectDeviceContext = React.createContext({
  isMobile: window.innerWidth < DEVICE_MINWIDTH.TABLET,
  isTablet:
    window.innerWidth >= DEVICE_MINWIDTH.TABLET && window.innerWidth < DEVICE_MINWIDTH.DESKTOP,
  isDesktop: window.innerWidth >= DEVICE_MINWIDTH.DESKTOP
})

const DetectDeviceProvider = props => {
  const device = useDetectDevice()
  return (
    <DetectDeviceContext.Provider value={device}>
      <div {...props} />
    </DetectDeviceContext.Provider>
  )
}

export default DetectDeviceProvider
