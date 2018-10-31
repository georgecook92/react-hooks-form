import React from 'react'
import logo from './logo.svg'
import './App.css'
import { useForm } from './customHooks'

const App = () => {
  const { formItems, isInvalid } = useForm({
    formItems: [
      { name: 'todo', required: false },
      { name: 'other', required: false }
    ]
  })

  return (
    <div className="App">
      <form onSubmit={onSubmit} >
        <p>New Item</p>
        <input
          {...formItems['todo']}
        />
        <p>Other</p>
        <input
          {...formItems['other']}
        />
        <button type='submit' disabled={isInvalid}>Submit</button>
      </form>
    </div>
  )
}

const onSubmit = e => {
  // how do i get all of the form state in this function
  e.preventDefault()
  console.log('Submitted')
}

export default App;
