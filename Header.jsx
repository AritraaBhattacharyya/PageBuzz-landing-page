import React from 'react'

function Header() {
  return (
    <header className="py-4 px-6 flex justify-between items-center">
      <div className="py-10 text-3xl font-bold text-white">PAGEBUZZ</div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-custom-green">HOME</a></li>
          <li><a href="#" className="hover:text-custom-green">ABOUT US</a></li>
          <li><a href="#" className="hover:text-custom-green">SERVICES</a></li>
          <li><a href="#" className="hover:text-custom-green">PAGE</a></li>
          <li><a href="#" className="hover:text-custom-green">CONTACT</a></li>
        </ul>
      </nav>
      <button className="bg-gray-800 px-10 py-2 rounded-md hover:bg-gray-700">EMAIL US</button>
    </header>
  )
}

export default Header