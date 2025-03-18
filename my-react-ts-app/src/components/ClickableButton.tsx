import React from 'react'

const ClickableButton: React.FC = () => {

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(`Button clicked!`, event)
    }


  return (
    <button onClick={handleClick}>Click Me</button>
  )
}

export default ClickableButton