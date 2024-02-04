import {useState } from 'react'


function Square({ n }) {
  const [ value, setValue] = useState(null)
  const [ clicked, setClicked ] = useState(false)
  const handleClick = () => {
    setValue('X')
    setClicked(true)
    console.log('click' + n)
  }
  
  return (
    <button
      className='square'
      onClick={handleClick} 
    >
      {clicked ? value : n} 
    </button>
  )
}

export default function Board() {
  return (
    <>

      <div className='board-row'>
        <Square n='1' />
        <Square n='2' />
        <Square n='3' />
      </div>

      <div className='board-row'>
        <Square n='4' />
        <Square n='5' />
        <Square n='6' />
      </div>

      <div className='board-row'>
        <Square n='7' />
        <Square n='8' />
        <Square n='9' />
      </div>

    </>
  )
}
