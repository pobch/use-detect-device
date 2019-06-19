import React from 'react'
import { useDetectDevice } from './useDetectDevice'

const Comp2 = () => {
  const { isMobile, isTablet, isDesktop } = useDetectDevice()
  return (
    <div>
      <div>[Component#2] This device is:</div>
      <p>
        <span style={{ backgroundColor: isMobile && 'green', color: isMobile ? 'white' : 'black' }}>
          Mobile
        </span>{' '}
        <span style={{ backgroundColor: isTablet && 'green', color: isTablet ? 'white' : 'black' }}>
          Tablet
        </span>{' '}
        <span
          style={{ backgroundColor: isDesktop && 'green', color: isDesktop ? 'white' : 'black' }}
        >
          Desktop
        </span>
      </p>
      <p>Try to adjust your window's width and see the difference</p>
    </div>
  )
}

export default Comp2
