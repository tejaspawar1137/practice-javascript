import {useRef} from 'react'

const UseRef = () => {
  const inputRef = useRef(null);
  return (
    <div>
      <input ref={inputRef} type="text" placeholder='Enter your name' />
      <button onClick={() => {
        inputRef.current.focus()
        alert(inputRef.current.value)
      }}>Click button</button>
    </div>
  )
}

export default UseRef