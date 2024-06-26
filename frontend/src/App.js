import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import { Nav } from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import LoginScreen from './pages/LoginScreen';
import Contactus from './pages/Contactus';
import Bookanapp from './pages/Bookanapp';
import Signup from './pages/signup';
import Lagos from './pages/Lagos';
import Abuja from './pages/Abuja';
import PortHarcourt from './pages/PortHarcourt';
// import Kaduna from './pages/Kaduna';
import Ogun from './pages/Ogun';
import Anambra from './pages/Anambra';
import Kebbi from './pages/Kebbi';
import Yobe from './pages/Yobe';
import Bayelsa from './pages/Bayelsa';
import Edo from './pages/Edo';
import Forgotpassword from './pages/Forgotpassword';
import Agent from './pages/Agent';
import Footer from './components/Footer';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Nav />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/loginScreen" element={<LoginScreen />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/bookanappointment" element={<Bookanapp />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/lagos" element={<Lagos />} />
            <Route path="/abuja" element={<Abuja />} />
            <Route path="/portharcourt" element={<PortHarcourt />} />
            {/* <Route path="/kaduna" element={<Kaduna />} /> */}
            <Route path="/ogun" element={<Ogun />} />
            <Route path="/anambra" element={<Anambra />} />
            <Route path="/kebbi" element={<Kebbi />} />
            <Route path="/yobe" element={<Yobe />} />
            <Route path="/bayelsa" element={<Bayelsa />} />
            <Route path="/edo" element={<Edo />} />
            <Route path="/forgotpassword" element={<Forgotpassword />} />
            <Route path="/agents-available" element={<Agent />} />
            <Route path="/terms&conditions" element={<Terms />} />
            <Route path="/privacypolicy" element={<Privacy />} />
            
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};
export default App;