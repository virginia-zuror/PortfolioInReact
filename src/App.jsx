
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Hero from './components/hero'

const App=()=> {
  

  return (
    <div >
     <Hero/>
     <main>
     <Outlet/>
     </main>
    <Footer/>
    </div>
  )
}

export default App
