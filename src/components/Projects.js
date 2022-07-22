import React, { useState } from 'react'
import data from '../data'
import './project.css'

const Projects = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState(data)

  return (
    <>
      <section className="page grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:h-screen lg:pt-32">
        {items.map((item) => {
          const { id, path, desc } = item
          return (
            <div key={id}>
              <img src={path} alt={desc} className="p-5 bg-green-500 rounded" />
              <small className="block text-center text-black font-semibold text-lg">
                {desc}
              </small>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Projects
