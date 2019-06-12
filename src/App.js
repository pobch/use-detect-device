import React from 'react'
import useDetectDevice from './useDetectDevice'

const App = () => {
  const { isMobile, isTablet, isDesktop } = useDetectDevice()
  return (
    <div>
      <div>This device is:</div>
      <div>
        <span style={{ backgroundColor: isMobile ? 'green' : 'red', color: 'white' }}>
          {isMobile.toString()}
        </span>{' '}
        Mobile
      </div>
      <div>
        <span style={{ backgroundColor: isTablet ? 'green' : 'red', color: 'white' }}>
          {isTablet.toString()}
        </span>{' '}
        Tablet
      </div>
      <div>
        <span style={{ backgroundColor: isDesktop ? 'green' : 'red', color: 'white' }}>
          {isDesktop.toString()}
        </span>{' '}
        Desktop
      </div>
      <p>Try to adjust your window's width and see the difference</p>
    </div>
  )
}

export default App
