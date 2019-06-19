import React, { useContext } from 'react'
import { DetectDeviceContext } from './DetectDeviceProvider'

const Comp3 = () => {
  const { isMobile, isTablet, isDesktop } = useContext(DetectDeviceContext)
  return (
    <div>
      <div>[Component#3] This device is:</div>
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

export default Comp3
