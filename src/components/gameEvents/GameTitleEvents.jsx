import React from 'react'

const GameTitleEvents = ({title}) => {


  return (
    <div className="hero min-h-screen bg-paris bg-cover">
    <div className="hero-content text-center ">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="py-6">
        Celebrate the Excellence of {title}
        </p>
        <button className="badge badge-primary">below</button>
      </div>
    </div>
  </div>
  )
}

export default GameTitleEvents