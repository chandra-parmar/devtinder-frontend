
import './App.css'
import Body from './Body'
import Login from './components/Login'

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Feed from './components/Feed';
import Profile from './components/Profile';


function App() {
  

  return (

      <div> 

      <Provider store={ appStore }>
          <BrowserRouter basename='/'>
             
           <Routes>
              
            <Route path='/' element={<Body></Body>}></Route>
            <Route path='/feed' element={<Feed></Feed>}></Route>
            <Route path='/login' element={ <Login></Login>}></Route>
            <Route path='/profile' element={<Profile></Profile>}></Route>
            
           </Routes>
        </BrowserRouter>
      </Provider>
        
       
  
          
      </div>
  )
}

export default App 
