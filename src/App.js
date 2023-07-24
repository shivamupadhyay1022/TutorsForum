import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Signup2 from './pages/Signup2';
import About from './pages/About';
import { AuthProvider} from './components/AuthProvider';
import Signin from './pages/Signin';
import Dashboard2 from './pages/Dashboard2';
import Profile from './pages/Profile';
import Password from './pages/Password';
import Recovery from './pages/Recovery';


function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/dashboard2" element={<Dashboard2 />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signup2" element={<Signup2 />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/password" element={<Password />} />
          <Route exact path="/recovery" element={<Recovery />} />
          


      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
