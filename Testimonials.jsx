import React from 'react'

const testimonials = [
  {
    id: '4.8/5',
    quote: "PageBuzz transformed our online store into a sleek, user-friendly platform. Our sales skyrocketed by 35% in just three months! Their team is professional, creative, and incredibly responsive.",
    author: "Willie Gibson",
    role: "E-commerce Manager",
    avatar: "/path-to-willie-gibson-avatar.jpg"
  },
  {
    id: '4.9/5',
    quote: "The SEO strategies implemented by PageBuzz were a game-changer for us. We saw a 50% increase in organic traffic and now rank at the top of search results. Highly recommend their services!",
    author: "April McDermott",
    role: "Digital Marketer",
    avatar: "/path-to-april-mcdermott-avatar.jpg"
  },
  {
    id: '4.8/5',
    quote: "Our social media engagement went through the roof thanks to PageBuzz. Their innovative campaign brought us a 70% rise in engagement and a significant boost in online orders.",
    author: "Eric Reynolds",
    role: "Social Media Manager",
    avatar: "/path-to-eric-reynolds-avatar.jpg"
  },
  {
    id: '5.0/5',
    quote: "Working with PageBuzz was a delight. Their content creation exceeded our expectations, increasing our website engagement by 60%. They truly understand our industry and audience.",
    author: "Spencer Halvorson",
    role: "Content Strategist",
    avatar: "/path-to-spencer-halvorson-avatar.jpg"
  }
]

function Testimonials() {
  return (
    <section className="py-20 px-6 bg-custom-bg">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4">Client Testimonials: Real Results, Real Feedback</h2>
        <p className="text-gray-400">
          Nam id quam id ipsum facilisi sagittis volutpat lacus. Praesent eu dui ut est laoreet scelerisque aliquam non. Sed rhoncus mi et facilisi. Sed sed erat et elit interdum tincidunt.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.author} className="bg-gray-800 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-5xl text-gray-600">"</span>
              <span className="text-custom-green">{testimonial.id}</span>
            </div>
            <p className="text-gray-300 mb-4">{testimonial.quote}</p>
            <div className="flex items-center">
              <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials