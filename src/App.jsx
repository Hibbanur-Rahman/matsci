import {Routes,Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './views/home';
import './assets/styles/style.css';
function App() {

  return (
    <div className='container-fluid m-0 p-0'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default App
