import React, { useState } from 'react'

const InputField: React.FC = () => {
    const [value, setValue] = useState<string>('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const resetValue = () => {
        setValue('')
    }

  return (
    <>
        <div>You typed: {value}</div>
        <input type="text" value={value} onChange={handleChange} />
        <button onClick={resetValue}>Reset</button>
    </>
  )
}

export default InputField