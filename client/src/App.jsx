import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar'
import Gallery from './components/Gallery';
import Home from './components/Home';
function App() {

  return (
    <>
      <Navbar />
      <div className="main_wrapper flex flex-col items-center justify-center min-h-[39rem]">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/gallery' element={<Gallery />}/>
      </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
