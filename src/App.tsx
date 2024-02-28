import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import Produtos from './components/Produto'
import { Provider } from 'react-redux'
import { store }  from './store/reducs/store'

function App() {


  return (
    <Provider store={store}>
      <Header/>
      <Slider/>
      <Produtos/>
    </Provider>
    
  )
}

export default App

