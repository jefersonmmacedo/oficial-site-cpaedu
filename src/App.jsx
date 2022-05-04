import { Router } from './routes/Router'; 
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Global.css';


function App() {
  return (
    <BrowserRouter>
    <div className='container'> 
    <ToastContainer autoClose={3000} theme="colored" /> 
    <Router />
    </div>
    </BrowserRouter>
  );
}

export default App;
