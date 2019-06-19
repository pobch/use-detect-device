import React, { useContext } from 'react'
import { useDetectDevice } from './useDetectDevice'
import { DEVICE_MINWIDTH } from './deviceWidth'

const DetectDeviceContext = React.createContext({
  isMobile: window.innerWidth < DEVICE_MINWIDTH.TABLET,
  isTablet:
    window.innerWidth >= DEVICE_MINWIDTH.TABLET && window.innerWidth < DEVICE_MINWIDTH.DESKTOP,
  isDesktop: window.innerWidth >= DEVICE_MINWIDTH.DESKTOP
})

export const DetectDevice = props => {
  const device = useDetectDevice()
  return (
    <DetectDeviceContext.Provider value={device}>
      <div {...props} />
    </DetectDeviceContext.Provider>
  )
}
