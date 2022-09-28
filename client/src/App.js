import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import TopBar from "./components/TopBar/TopBar";
import Home from './pages/Home/Home'
import Register from "./pages/Register/Register";
import Login from './pages/Login/Login'
import Write from './pages/Write/Write'
import Settings from './pages/Settings/Settings'
import Single  from './pages/Single/Single'

function App() {
  const user = true;
  return (
    <Router>
      <TopBar/>
      <Routes>
            <Route exact path='/'  element={<Home/>}/>
            <Route exact path='/register' element={ user ? <Home/> : <Register/>}/>
            <Route exact path='/login' element={ user ? <Home/> : <Login/>}/>
            <Route exact path='/write' element={ user ? <Write/> : <Register/>}/>
            <Route exact path='/settings' element={ user ? <Settings/> : <Register/>}/>
            <Route exact path='/post/:postId' element={<Single/>}/>
      </Routes>
    </Router>
  
  
  );
}

export default App;
