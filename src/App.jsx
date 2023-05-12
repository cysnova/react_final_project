import RestaurantForm from './components/RestaurantForm'
import RestaurantList from './components/RestaurantList'
import RestaurantSearch from './components/RestaurantSearch'
import 'bootstrap/dist/css/bootstrap.css';

import './App.css'

function App() {
  

  return (
    <>
    <RestaurantSearch/>
     <RestaurantForm/>
     <RestaurantList/>
    </>
  )
}

export default App
