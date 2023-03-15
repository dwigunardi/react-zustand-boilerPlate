import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import FetchWithZustand from '../pages/fetchWithZustand'
import PersistExample from '../pages/persistExample'

function mainRoute() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/persist' element={<PersistExample />} />
      <Route path='/fetchWithZustand' element={<FetchWithZustand />} />
    </Routes>
  )
}

export default mainRoute