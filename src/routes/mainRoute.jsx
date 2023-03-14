import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import PersistExample from '../pages/persistExample'

function mainRoute() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/persist' element={<PersistExample />} />
    </Routes>
  )
}

export default mainRoute