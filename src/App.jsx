import './App.css'
import { ItemsProvider } from './components/ItemsContext'
import ItemList from './components/ItemList'
import Cart from './components/Cart'

function App() {


  return (
    <>
    <ItemsProvider>
    <div>
    <h1>Shopping app</h1>
    <ItemList/>
    <Cart/>
    </div>
    </ItemsProvider>
    </>
  )
}

export default App
