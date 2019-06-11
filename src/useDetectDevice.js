import { useState, useEffect } from 'react'
import { DEVICE_MINWIDTH } from './deviceWidth'

/**
 * Detect whether the device is mobile, tablet or desktop according to screen width
 * @returns {{ isMobile: boolean, isTablet: boolean, isDesktop: boolean }}
 */
const useDetectDevice = () => {
  const [device, setDevice] = useState({
    isMobile: window.innerWidth < DEVICE_MINWIDTH.TABLET,
    isTablet:
      window.innerWidth >= DEVICE_MINWIDTH.TABLET && window.innerWidth < DEVICE_MINWIDTH.DESKTOP,
    isDesktop: window.innerWidth >= DEVICE_MINWIDTH.DESKTOP
  })

  useEffect(() => {
    const handleResize = () => {
      if (!device.isMobile && window.innerWidth < DEVICE_MINWIDTH.TABLET) {
        setDevice({
          isMobile: true,
          isTablet: false,
          isDesktop: false
        })
      } else if (
        !device.isTablet &&
        window.innerWidth >= DEVICE_MINWIDTH.TABLET &&
        window.innerWidth < DEVICE_MINWIDTH.DESKTOP
      ) {
        setDevice({
          isMobile: false,
          isTablet: true,
          isDesktop: false
        })
      } else if (!device.isDesktop && window.innerWidth >= DEVICE_MINWIDTH.DESKTOP) {
        setDevice({
          isMobile: false,
          isTablet: false,
          isDesktop: true
        })
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [device])

  return device
}

export default useDetectDevice
