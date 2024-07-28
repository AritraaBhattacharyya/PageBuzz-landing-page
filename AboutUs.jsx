import React from 'react'

function AboutUs() {
  return (
    <section className="py-20 px-6 flex gap-12">
      <div className="w-1/2 relative">
        <img 
          src="/path-to-your-image.jpg" 
          alt="Team working" 
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          {/* <div className="border-2 border-custom-green w-16 h-16 rounded-full absolute -top-8 -left-8"></div>
          <div className="border-2 border-custom-green w-16 h-16 rounded-full absolute -bottom-8 -right-8"></div> */}
        </div>
      </div>
      <div className="w-1/2">
        <p className="text-white mb-4">— About Us</p>
        <h2 className="text-4xl font-bold mb-6">Passion for Digital Transformation</h2>
        <p className="text-gray-400 mb-8">
          Cum at pellentesque aenean habitant. Ut et nunc euismod amet id
          varius id habitant. Consectetur elementum sit cursus id egestas nunc magna
          aliquam. Morbi enim malesuada magna magna faucibus.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'].map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="w-4 h-4 bg-white rounded-full mr-2"></div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs