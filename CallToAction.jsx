import React from 'react'

function CallToAction() {
  return (
    <section className="py-20 px-6">
      <div className="bg-gray-800 rounded-lg p-12 border border-custom-green">
        <p className="text-custom-green text-center mb-4">— Available For New Project —</p>
        <h2 className="text-4xl font-bold text-center mb-4">
          Interested in Working <br /> Together?
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Quis at id velit convallis lacinia. Ut et diam suscipit amet id cursus id blandit. 
          Convaletur malesuada ut a mattis integer integer aliquam.
        </p>
        <div className="text-center">
          <button className="bg-custom-green text-black px-6 py-3 rounded-full font-semibold hover:bg-opacity-90">
            SCHEDULE A CALL
          </button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction