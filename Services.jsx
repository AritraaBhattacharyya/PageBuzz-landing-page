import React from 'react'

function Services() {
  const services = [
    "Website Development",
    "Digital Marketing",
    "SEO Optimization",
    "Social Media Management"
  ]

  return (
    <section className="py-20 px-6">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-5xl font-bold">Our Services</h2>
        <div className="bg-custom-green text-white w-16 h-16 rounded-full flex items-center justify-center text-sm font-bold">
          SEE ALL
        </div>
      </div>
      <div className="space-y-6">
        {services.map((service, index) => (
          <div key={index} className="flex justify-between items-center py-6 border-b border-gray-700">
            <div className="flex items-center">
              <span className="text-gray-500 mr-4">{(index + 1).toString().padStart(3, '0')}</span>
              <h3 className="text-2xl font-semibold">{service}</h3>
            </div>
            <div className="text-4xl">→</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services