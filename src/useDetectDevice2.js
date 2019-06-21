import { useReducer, useEffect } from 'react'
import { DEVICE_MINWIDTH } from './deviceWidth'

/**
 * Reducer to be used in hook
 * @param {{ isMobile: boolean, isTablet: boolean, isDesktop: boolean }} state The previous state
 * @param {{ type: string }} action
 * @returns {{ isMobile: boolean, isTablet: boolean, isDesktop: boolean }} The updated state
 * @throws When 'action.type' is unknown
 */
const reducer = (state, action) => {
  switch (action.type) {
    case 'MOBILE':
      if (state.isMobile) {
        // If state is the same, return the exact previous state.
        // Don't clone the previous state since it will cause component to re-render.
        return state
      }
      return {
        isMobile: true,
        isTablet: false,
        isDesktop: false
      }
    case 'TABLET':
      if (state.isTablet) {
        // If state is the same, return the exact previous state.
        // Don't clone the previous state since it will cause component to re-render.
        return state
      }
      return {
        isMobile: false,
        isTablet: true,
        isDesktop: false
      }
    case 'DESKTOP':
      if (state.isDesktop) {
        // If state is the same, return the exact previous state.
        // Don't clone the previous state since it will cause component to re-render.
        return state
      }
      return {
        isMobile: false,
        isTablet: false,
        isDesktop: true
      }
    default:
      new Error('Unknown action')
  }
}

/**
 * Detect whether the device is mobile, tablet or desktop according to screen width
 * @returns {{ isMobile: boolean, isTablet: boolean, isDesktop: boolean }}
 */
export const useDetectDevice2 = () => {
  const [state, dispatch] = useReducer(reducer, {
    isMobile: window.innerWidth < DEVICE_MINWIDTH.TABLET,
    isTablet:
      window.innerWidth >= DEVICE_MINWIDTH.TABLET && window.innerWidth < DEVICE_MINWIDTH.DESKTOP,
    isDesktop: window.innerWidth >= DEVICE_MINWIDTH.DESKTOP
  })

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < DEVICE_MINWIDTH.TABLET) {
        dispatch({ type: 'MOBILE' })
      } else if (
        window.innerWidth >= DEVICE_MINWIDTH.TABLET &&
        window.innerWidth < DEVICE_MINWIDTH.DESKTOP
      ) {
        dispatch({ type: 'TABLET' })
      } else if (window.innerWidth >= DEVICE_MINWIDTH.DESKTOP) {
        dispatch({ type: 'DESKTOP' })
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return state
}
