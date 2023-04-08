import React from 'react'

const Pagination = ({handlePrev, handleNext, page, pageCount}) => {
  return (
    <>
    <button onClick={handleNext}>next</button>
    <span>{page}/{pageCount}</span>
    <button onClick={handlePrev} >prev</button>
    </>
  )
}

export default Pagination