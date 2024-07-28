import React from 'react'

function Footer() {
  const socialLinks = ['Facebook', 'Instagram', 'LinkedIn', 'Behance']

  return (
    <footer className="py-20 px-6 bg-gradient-to-t from-custom-gradient to-custom-bg">
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold mb-4">PAGEBUZZ</h2>
        <p className="text-gray-400 mb-8">
          Quis at id velit convallis lacinia. Ut et diam suscipit amet id cursus id blandit. 
          Convaletur malesuada ut a mattis integer integer aliquam.
        </p>
        <div className="flex justify-center space-x-4">
          {socialLinks.map((link) => (
            <a 
              key={link} 
              href="#" 
              className="bg-gray-800 px-4 py-2 rounded-full text-sm hover:bg-gray-700"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm">
        <p>Copyright © 2024 PageBuzz</p>
        <p>Design by YourName</p>
      </div>
    </footer>
  )
}

export default Footer