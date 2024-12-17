import { useState } from 'react'
import MemeList from './components/MemeList'

function App() {
  const [searchText, setSearchText] = useState('developers')
  return (
    <>
      <input type="text" placeholder="Search" />
      <MemeList searchText={searchText} />
    </>
  )
}

export default App
