import { Router } from './routes/Router'; 
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Global.css';
import Navbar from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className='container'> 
    <ToastContainer autoClose={3000} theme="colored" /> 
    <Navbar />
    <Router />
    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
