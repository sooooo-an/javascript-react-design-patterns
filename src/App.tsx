import { useContext } from 'react'
import MemeList from './components/MemeList'
import { SearchBar, SearchContext } from '@giphy/react-components'
import Snackbar from './components/Snackbar'
function App() {
  const { searchKey, fetchGifs } = useContext(SearchContext)

  return (
    <div className="h-full bg-gradient-to-r from-pink-400 to-rose-400">
      <main className="mx-auto flex h-full w-[600px] flex-col items-center py-2">
        <SearchBar className="mb-2 w-full" />
        <MemeList searchKey={searchKey ?? 'develop'} fetch={fetchGifs} />
      </main>
      <Snackbar />
    </div>
  )
}

export default App
