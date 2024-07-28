import React from 'react'

function BuzzStats() {
  const stats = [
    { number: '1,200+', label: 'Happy Clients', description: 'Number of satisfied clients who have benefited from our services.' },
    { number: '850+', label: 'Projects Completed', description: 'Total projects successfully delivered across various industries.' },
    { number: '1,500+', label: 'Campaigns Launched', description: 'Successful marketing campaigns launched, driving growth and engagement.' },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-custom-bg to-custom-gradient">
      <h2 className="text-5xl font-bold mb-16 text-center">Buzz Stats.</h2>
      <div className="grid grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-800 p-8 rounded-lg">
            <div className="text-4xl font-bold mb-2">
              {stat.number}
              <span className="text-custom-green">+</span>
            </div>
            <div className="text-xl font-semibold mb-2">{stat.label}</div>
            <p className="text-gray-400 text-sm">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BuzzStats