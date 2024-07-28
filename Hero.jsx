import React from 'react'

function Hero() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold mb-6">Unlock Your Brand's Potential Online</h1>
        <p className="text-gray-400 mb-8">
          Viverra enim donec sed commodo sagittis facilisis donec elit pulvinar.
          Phasellus morbi vitae aliquet gravida luctus id dictumst. Cursus est at
          amet sed facilisi. Cursus ut pulvinar in tempus. Interdum velit odio
          fermentum semper penatibus nunc.
        </p>
        <button className="bg-custom-green text-black px-6 py-3 rounded-full font-semibold hover:bg-opacity-90">
          CONTACT US
        </button>
      </div>
      <div className="absolute right-0 top-0 w-1/2 h-full">
        {/* Add your images here */}
        <div className="bg-custom-green w-64 h-32 rounded-full absolute top-20 right-20"></div>
        <div className="bg-gray-800 w-64 h-32 rounded-full absolute bottom-20 right-40">
          <div className="bg-custom-green w-16 h-16 rounded-full absolute -top-4 -left-4 flex items-center justify-center">
            <span className="text-3xl">   ▶   </span>
          </div>
        </div>
        <div className="bg-gray-800 px-20 py-10 rounded-full absolute bottom-10 right-20">
          PROJECTS
        </div>
      </div>
    </section>
  )
}

export default Hero