import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import OrderForm from './components/OrderForm'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <Hero />
      <Services />
      <OrderForm />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
