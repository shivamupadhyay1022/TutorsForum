import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import About from './pages/About';
import { AuthProvider} from './components/AuthProvider';
import Dashboard2 from './pages/student/Dashboards';
import Termsandconditions from './pages/Termsandconditions';
import Classes from './pages/Classes';
import Teachers from './pages/Teachers';
import Profile2 from './pages/Profile2';
import Signin2 from './pages/Signin2';
import Signupt from './pages/Signupt';
import Dashoardt from './pages/Dashoardt';
import Choose from './pages/Choose';
import Test2 from './pages/Test2';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/signin2" element={<Signin2 />} />
          <Route exact path="/dashboard2" element={<Dashboard2 />} />
          <Route exact path="/dashboardt" element={<Dashoardt />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signupt" element={<Signupt />} />
          <Route exact path="/profile2" element={<Profile2 />} />
          <Route exact path="/termsandconditions" element={<Termsandconditions />} />
          <Route exact path="/classes" element={<Classes />} />
          <Route exact path="/teachers" element={<Teachers />} />
          <Route exact path="/choose" element={<Choose />} />
          <Route exact path="/test" element={<Test2/>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
