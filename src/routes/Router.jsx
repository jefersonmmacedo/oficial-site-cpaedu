import {Route, Routes, Navigate} from 'react-router-dom';
import { Contact } from '../pages/Contact/Contact';
import { Home } from '../pages/Home/Home';

function Router () {
    return (

            <Routes>
            <Route path="/" element={<Home />}/>      
            <Route path="/contato" element={<Contact />}/>      
            </Routes>
           
    )
}

export {Router}