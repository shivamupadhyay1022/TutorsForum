import logo from './logo.svg';
import './App.css';
import Home from './pages/common/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signups from './pages/student/Signups';
import About from './pages/common/About';
import { AuthProvider} from './components/AuthProvider';
import Dashboard2 from './pages/student/Dashboards';
import Termsandconditions from './pages/common/Termsandconditions';
import Classes from './pages/student/Classes';
import Teachers from './pages/student/Teachers';
import Profiles from './pages/student/Profiles';
import Signins from './pages/student/Signins';
import Signupt from './pages/teacher/Signupt';
import Dashoardt from './pages/teacher/Dashoardt';
import Choose from './pages/common/Choose';
import { useState } from 'react';
import AppContext from './components/AppContext';
import Profilet from './pages/teacher/Profilet';
import Signint from './pages/teacher/Signint';
let teacher  = false;
let student = false;
function App() {
  const [active, setActive] = useState("Dashboard");
  
  

  const settheActive =(page) =>{
    setActive(page);
  }
  const getActive = () =>{
    return active;
  }

  const globalvar = {
    active:active,
    student:student,
    teacher:teacher,
  };

  return (
    <AppContext.Provider value = {globalvar}>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/signins" element={<Signins />} />
          <Route exact path="/signint" element={<Signint />} />
          <Route exact path="/signups" element={<Signups />} />
          <Route exact path="/signupt" element={<Signupt />} />
          <Route exact path="/dashboards" element={<Dashboard2 />} />
          <Route exact path="/dashboardt" element={<Dashoardt />} />
          <Route exact path="/profiles" element={<Profiles />} />
          <Route exact path="/profilet" element={<Profilet />} />
          <Route exact path="/termsandconditions" element={<Termsandconditions />} />
          <Route exact path="/classes" element={<Classes />} />
          <Route exact path="/teachers" element={<Teachers />} />
          <Route exact path="/choose" element={<Choose />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    </AppContext.Provider>
  );
}

export default App;
