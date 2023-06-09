import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import { AuthProvider} from './components/AuthProvider';
import Signin from './pages/Signin';
import Dashboard2 from './pages/Dashboard2';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/dashboard2" element={<Dashboard2 />} />
          


      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
