import { useState, useEffect } from 'react'
import { DEVICE_MINWIDTH } from './deviceWidth'

/**
 * Detect whether the device is mobile, tablet or desktop according to screen width
 * @returns {{ isMobile: boolean, isTablet: boolean, isDesktop: boolean }}
 */
export const useDetectDevice = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < DEVICE_MINWIDTH.TABLET)
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= DEVICE_MINWIDTH.TABLET && window.innerWidth < DEVICE_MINWIDTH.DESKTOP
  )
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= DEVICE_MINWIDTH.DESKTOP)
  // Note: If we use a single state as an object instead of 3 states as booleans,
  // we have to ensure that we don't setState when all values in the object are the same.
  // All child components always re-render when the previous state and the new state is not
  // the same regarding to shallow compare.

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < DEVICE_MINWIDTH.TABLET) {
        setIsMobile(true)
        setIsTablet(false)
        setIsDesktop(false)
      } else if (
        window.innerWidth >= DEVICE_MINWIDTH.TABLET &&
        window.innerWidth < DEVICE_MINWIDTH.DESKTOP
      ) {
        setIsMobile(false)
        setIsTablet(true)
        setIsDesktop(false)
      } else if (window.innerWidth >= DEVICE_MINWIDTH.DESKTOP) {
        setIsMobile(false)
        setIsTablet(false)
        setIsDesktop(true)
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { isMobile, isTablet, isDesktop }
}
