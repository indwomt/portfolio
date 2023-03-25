import logo from './logo.svg';
import './App.css';
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './components/Landing'
import Projects from './components/Projects'
import Resume from './components/Resume'

function App() {
  return (
    <>
    <Header />,
    <Landing />,
    <About />,
    <Resume />
    </>
  );
}

export default App;
