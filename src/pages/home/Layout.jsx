import React from 'react'
import Restaurant from '../customer/Restaurant'

function Layout( {children}) {
  return (
    <div>
        <Restaurant/>

        {children}
    </div>
  )
}

export default Layout