import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import FreshEats from './components/FreshEats'
import BuzzStats from './components/BuzzStats'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-custom-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-custom-gradient to-transparent opacity-20"></div>
      <div className="relative z-10">
        <Header />
        <Hero />
        <Stats />
        <AboutUs />
        <Services />
        <FreshEats />
        <BuzzStats />
        <Testimonials />
        <CallToAction />
        <Footer />
      </div>
    </div>
  )
}

export default App