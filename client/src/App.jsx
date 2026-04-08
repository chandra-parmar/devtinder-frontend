
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
      <Provider store={appStore}>
        <BrowserRouter basename='/'>
          <Routes>
            <Route path='/' element={<Body />}> 
              <Route index element={<Feed />} />
              <Route path='feed' element={<Feed />} />
              <Route path='profile' element={<Profile />} />
            </Route>
            <Route path='login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App 
