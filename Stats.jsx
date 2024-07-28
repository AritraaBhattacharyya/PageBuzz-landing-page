import React from 'react'

function Stats() {
  return (
    <section className="py-10 px-6 flex justify-between items-center border-t border-gray-700">
      <div className="flex items-center">
        <div className="w-3 h-3 bg-custom-green mr-2"></div>
        <span>Award-Winning Strategies</span>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 bg-custom-green mr-2"></div>
        <span>1,000+ Successful Campaigns Delivered</span>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 bg-custom-green mr-2"></div>
        <span>98% Client Satisfaction Rate</span>
      </div>
    </section>
  )
}

export default Stats