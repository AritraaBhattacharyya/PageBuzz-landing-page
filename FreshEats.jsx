import React from 'react'

function FreshEats() {
  return (
    <section className="py-20 px-6 flex justify-between items-center">
      <div className="w-1/2">
        <h2 className="text-4xl font-bold mb-4">FreshEats</h2>
        <p className="text-gray-400 mb-6">
          Dolor sit amet consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo vel fringilla.
        </p>
        <div className="flex space-x-4 mb-8">
          <span className="bg-gray-800 px-4 py-2 rounded-full text-sm">#Branding</span>
          <span className="bg-gray-800 px-4 py-2 rounded-full text-sm">#UI/UXDesign</span>
          <span className="bg-gray-800 px-4 py-2 rounded-full text-sm">#Website</span>
        </div>
        <div className="text-custom-green text-2xl">→</div>
      </div>
      <div className="w-1/2">
        <img 
          src="/path-to-your-image.jpg" 
          alt="FreshEats products" 
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  )
}

export default FreshEats