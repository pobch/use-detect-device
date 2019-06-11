import React from 'react'
import useDetectDevice from './useDetectDevice'

const App = () => {
  const { isMobile, isTablet, isDesktop } = useDetectDevice()
  return (
    <div>
      <div>This device is:</div>
      <div>Mobile {isMobile.toString()}</div>
      <div>Tablet {isTablet.toString()}</div>
      <div>Desktop {isDesktop.toString()}</div>
    </div>
  )
}

export default App
