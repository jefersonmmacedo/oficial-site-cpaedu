import {Route, Routes, Navigate} from 'react-router-dom';
import { ListCategories } from '../components/Admin/Categories/ListCategories/ListCategories';
import { ListCourse } from '../components/Admin/Courses/ListCourse/ListCourse';
import { Dashboard } from '../components/Admin/Dashboard/Dashboard';
import { ListDepoiments } from '../components/Admin/Depoiments/ListDepoiments/ListDepoiments';
import { ListSliders } from '../components/Admin/Sliders/ListSliders/ListSliders';
import { About } from '../pages/About/About';
import { NewCategories } from '../pages/Admin/Categories/NewCategories/NewCategories';
import { NewCourse } from '../pages/Admin/Courses/NewCourse/NewCourse';
import { NewDepoiments } from '../pages/Admin/Depoiments/NewDepoiments/NewDepoiments';
import { Informations } from '../pages/Admin/Informations/Informations';
import { NewSliders } from '../pages/Admin/Sliders/NewSliders/NewSliders';
import { Contact } from '../pages/Contact/Contact';
import { ContactEAD } from '../pages/ContactEAD/ContactEAD';
import { Courses } from '../pages/Courses/Courses';
import { CourseUnic } from '../pages/CourseUnic/CourseUnic';
import { Home } from '../pages/Home/Home';
import { SignIn } from '../pages/SignIn/SignIn';



function Router () {
    const Local = localStorage.getItem("cpaedu");
    const userLocal = JSON.parse(Local)

function PrivateRoute({children} ) {
    return userLocal !== null ? children : <Navigate to="/adm"/>
}

    return (
        <Routes>
            <Route path="/" element={<Home />}/>      
            <Route path="/contato" element={<Contact />}/>      
            <Route path="/prematricula" element={<ContactEAD />}/>      
            <Route path="/sobre" element={<About />}/>      
            <Route path="/curso-individual" element={<CourseUnic />}/>      
            <Route path="/cursos" element={<Courses />}/>    
            <Route path="/adm" element={<SignIn />}/>     

            {/* Administração  */}
            <Route path="/adm/dashboard"
                    element={ <PrivateRoute> <Dashboard /></PrivateRoute>} />


            <Route path="/adm/slider"
                    element={ <PrivateRoute> <ListSliders /></PrivateRoute>} />
            <Route path="/adm/slidernew"
                    element={ <PrivateRoute> <NewSliders /></PrivateRoute>} />
            <Route path="/adm/slider/id"
                    element={ <PrivateRoute> <Dashboard /></PrivateRoute>} />


            <Route path="/adm/course"
                    element={ <PrivateRoute> <ListCourse /></PrivateRoute>} />
            <Route path="/adm/coursenew"
                    element={ <PrivateRoute> <NewCourse /></PrivateRoute>} />
            <Route path="/adm/course/:id"
                    element={ <PrivateRoute> <Dashboard /></PrivateRoute>} />


            <Route path="/adm/category"
                    element={ <PrivateRoute> <ListCategories /></PrivateRoute>} />
            <Route path="/adm/categorynew"
                    element={ <PrivateRoute> <NewCategories /></PrivateRoute>} />
            <Route path="/adm/category/:id"
                    element={ <PrivateRoute> <Dashboard /></PrivateRoute>} />


            <Route path="/adm/depoiment"
                    element={ <PrivateRoute> <ListDepoiments /></PrivateRoute>} />
            <Route path="/adm/depoimentnew"
                    element={ <PrivateRoute> <NewDepoiments /></PrivateRoute>} />
            <Route path="/adm/depoiment/:id"
                    element={ <PrivateRoute> <Dashboard /></PrivateRoute>} />
 

            <Route path="/adm/informations"
                    element={ <PrivateRoute> <Informations /></PrivateRoute>} />
            <Route path="/adm/informations/:id"
                    element={ <PrivateRoute> <Dashboard /></PrivateRoute>} />     
        </Routes>      
    )
}

export {Router}