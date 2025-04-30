import './App.css'
import Register from './component/Register'
import Update from './component/Update'
import Delete from './component/Delete'
import View from './component/View'

function App() {
  return (
    <>
      <h1 style={{color:'red'}}>THIS IS CRUD FUNCTION</h1>
      <Register/>
      <View/>
      <Update/>
      <Delete/>
    </>
  )
}

export default App
