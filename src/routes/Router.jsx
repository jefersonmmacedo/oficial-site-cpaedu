import {Route, Routes, Navigate} from 'react-router-dom';
import { ListPost } from '../components/Admin/Blog/ListPosts/ListPost';
import { NewPost } from '../components/Admin/Blog/NewPost/NewPosts';
import { CategoriesForm } from '../components/Admin/Categories/EditCategoriesForm/EditCategoriesForm';
import { ListCategories } from '../components/Admin/Categories/ListCategories/ListCategories';
import { ListCourse } from '../components/Admin/Courses/ListCourse/ListCourse';
import { Dashboard } from '../components/Admin/Dashboard/Dashboard';
import { DepoimentsForm } from '../components/Admin/Depoiments/EditDepoimentsForm/EditDepoimentsForm';
import { ListDepoiments } from '../components/Admin/Depoiments/ListDepoiments/ListDepoiments';
import { SliderForm } from '../components/Admin/Sliders/EditSliderForm/EditSliderForm';
import { ListSliders } from '../components/Admin/Sliders/ListSliders/ListSliders';
import { About } from '../pages/About/About';
import { NewCategories } from '../pages/Admin/Categories/NewCategories/NewCategories';
import { EditCourse } from '../pages/Admin/Courses/EditCourse/EditCourse';
import { EditCourseEJA } from '../pages/Admin/Courses/EditCourseEJA/EditCourseEJA';
import { EditCourseTecnic } from '../pages/Admin/Courses/EditCourseTecnic/EditCourseTecnic';
import { NewCourse } from '../pages/Admin/Courses/NewCourse/NewCourse';
import { NewCourseEJA } from '../pages/Admin/Courses/NewCourseEJA/NewCourseEJA';
import { NewCourseTecnic } from '../pages/Admin/Courses/NewCourseTecnic/NewCourseTecnic';
import { NewDepoiments } from '../pages/Admin/Depoiments/NewDepoiments/NewDepoiments';
import { Informations } from '../pages/Admin/Informations/Informations';
import { NewSliders } from '../pages/Admin/Sliders/NewSliders/NewSliders';
import { Contact } from '../pages/Contact/Contact';
import { ContactEAD } from '../pages/ContactEAD/ContactEAD';
import { Courses } from '../pages/Courses/Courses';
import { CourseUnic } from '../pages/CourseUnic/CourseUnic';
import { CourseUnicEJA } from '../pages/CourseUnicEJA/CourseUnicEJA';
import { DepoimentsAll } from '../pages/DepoimentsAll/DepoimentsAll';
import { EJA } from '../pages/EJA/EJA';
import { Home } from '../pages/Home/Home';
import { Partners } from '../pages/Partners/Partners';
import { PostUnic } from '../pages/PostUnic/PostUnic';
import { SignIn } from '../pages/SignIn/SignIn';
import { StudentArea } from '../pages/StudentArea/StudentArea';



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
            <Route path="/prematricula/:curso" element={<ContactEAD />}/>      
            <Route path="/sobre" element={<About />}/>      
            <Route path="/curso-individual/:curso" element={<CourseUnic />}/>      
            <Route path="/curso-individual-eja/:curso" element={<CourseUnicEJA />}/>      
            <Route path="/cursos/:curso" element={<Courses />}/>    
            <Route path="/post/:namepost" element={<PostUnic />}/>    
            <Route path="/depoimentos" element={<DepoimentsAll />}/>    
            <Route path="/eja" element={<EJA />}/>    
            <Route path="/parceiros" element={<Partners />}/>    
            <Route path="/areadoaluno" element={<StudentArea />}/>    
            <Route path="/adm" element={<SignIn />}/>     

            {/* Administração  */}
            <Route path="/adm/dashboard"
                    element={ <PrivateRoute> <Dashboard /></PrivateRoute>} />


            <Route path="/adm/slider"
                    element={ <PrivateRoute> <ListSliders /></PrivateRoute>} />
            <Route path="/adm/slidernew"
                    element={ <PrivateRoute> <NewSliders /></PrivateRoute>} />
            <Route path="/adm/slider/:slider"
                    element={ <PrivateRoute> <SliderForm /></PrivateRoute>} />


            <Route path="/adm/course"
                    element={ <PrivateRoute> <ListCourse /></PrivateRoute>} />
            <Route path="/adm/coursetecnicnew"
                    element={ <PrivateRoute> <NewCourseTecnic /></PrivateRoute>} />
            <Route path="/adm/coursenew"
                    element={ <PrivateRoute> <NewCourse /></PrivateRoute>} />
            <Route path="/adm/coursetecnic/:curso"
                    element={ <PrivateRoute> <EditCourseTecnic /></PrivateRoute>} />
            <Route path="/adm/course/:curso/:categoria"
                    element={ <PrivateRoute> <EditCourse /></PrivateRoute>} />
            <Route path="/adm/courseeja"
                    element={ <PrivateRoute> <NewCourseEJA /></PrivateRoute>} />
            <Route path="/adm/courseejaedit/:curso"
                    element={ <PrivateRoute> <EditCourseEJA /></PrivateRoute>} />


            <Route path="/adm/category"
                    element={ <PrivateRoute> <ListCategories /></PrivateRoute>} />
            <Route path="/adm/categorynew"
                    element={ <PrivateRoute> <NewCategories /></PrivateRoute>} />
            <Route path="/adm/category/:categoria"
                    element={ <PrivateRoute> <CategoriesForm /></PrivateRoute>} />


            <Route path="/adm/depoiment"
                    element={ <PrivateRoute> <ListDepoiments /></PrivateRoute>} />
            <Route path="/adm/depoimentnew"
                    element={ <PrivateRoute> <NewDepoiments /></PrivateRoute>} />
            <Route path="/adm/depoiment/:names"
                    element={ <PrivateRoute> <DepoimentsForm /></PrivateRoute>} />

            <Route path="/adm/blog"
                    element={ <PrivateRoute> <ListPost /></PrivateRoute>} />
            <Route path="/adm/post"
                    element={ <PrivateRoute> <NewPost /></PrivateRoute>} />
            <Route path="/adm/listpostsedit/:names"
                    element={ <PrivateRoute> <DepoimentsForm /></PrivateRoute>} />
 

            <Route path="/adm/informations"
                    element={ <PrivateRoute> <Informations /></PrivateRoute>} />
            <Route path="/adm/informations/:id"
                    element={ <PrivateRoute> <Dashboard /></PrivateRoute>} />     
        </Routes>      
    )
}

export {Router}