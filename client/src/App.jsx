
import './App.css'
import Body from './Body'

function App() {
  

  return (

      <div>
        
        <BrowserRouter basename='/'>
           <Routes>
            <Route path='/' element={<Body></Body>}></Route>
           </Routes>
        </BrowserRouter>
  
          
      </div>
  )
}

export default App 
