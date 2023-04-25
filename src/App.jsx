
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'

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
