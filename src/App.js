import './App.css'

function App() {
  // vanila js
  const para = document.createElement('p')
  para.textContent = 'This is invisible'
  document.getElementById('root').append(para)

  // react.js
  return (
    <div className="App">
      <h2>npm run start</h2>
      <p>This is also visible</p>
    </div>
  )
}

export default App
