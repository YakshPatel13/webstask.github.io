import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './component/LendingPage/Home'
import Login from './component/Login&Reg/Login/Login';
import Reg from './component/Login&Reg/Reg/Regstration';
import Userhome from './component/User_Homepage/U_home';
import Conatactus from './component/LendingPage/conatact-us/conatactus';
import Service from './component/LendingPage/service-page/service';
import About from './component/LendingPage/about/about';
import Forgetpass from './component/Login&Reg/Forgetpass/forgetpass';
import Helperhome from './component/Admin/admin';
function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/userhome" element={<Userhome />} />
        <Route path="/contactus" element={<Conatactus />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/forgetpass" element={<Forgetpass />} />
        <Route path="/helperhome" element={<Helperhome />} />



      </Routes>
    </Router>
    
  )
}

export default App
