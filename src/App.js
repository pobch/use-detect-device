import React from 'react'
import useDetectDevice from './useDetectDevice'

const App = () => {
  const { isMobile, isTablet, isDesktop } = useDetectDevice()
  return (
    <div>
      <div>This device is:</div>
      <div>
        Mobile{' '}
        <span style={{ backgroundColor: isMobile ? 'green' : 'red', color: 'white' }}>
          {isMobile.toString()}
        </span>
      </div>
      <div>
        Tablet{' '}
        <span style={{ backgroundColor: isTablet ? 'green' : 'red', color: 'white' }}>
          {isTablet.toString()}
        </span>
      </div>
      <div>
        Desktop{' '}
        <span style={{ backgroundColor: isDesktop ? 'green' : 'red', color: 'white' }}>
          {isDesktop.toString()}
        </span>
      </div>
    </div>
  )
}

export default App
