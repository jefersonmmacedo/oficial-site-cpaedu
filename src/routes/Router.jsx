import {Route, Routes, Navigate} from 'react-router-dom';
import { About } from '../pages/About/About';
import { Contact } from '../pages/Contact/Contact';
import { Courses } from '../pages/Courses/Courses';
import { Home } from '../pages/Home/Home';

function Router () {
    return (

            <Routes>
            <Route path="/" element={<Home />}/>      
            <Route path="/contato" element={<Contact />}/>      
            <Route path="/sobre" element={<About />}/>      
            <Route path="/cursos-individual" element={<About />}/>      
            <Route path="/cursos" element={<Courses />}/>      
            </Routes>
           
    )
}

export {Router}