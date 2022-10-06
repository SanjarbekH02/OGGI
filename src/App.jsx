import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Portifilo from './Components/Portifilo/Portifilo';
import Blogs from './Components/Blogs/Blogs';
import Shop from './Components/Shop/Shop';

function App() {
    return ( <div className = "App" >
        <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' index element={<Home />}></Route>
        <Route path='/shop' index element={<Shop />}></Route>
        <Route path='/blog' index element={<Blogs />}></Route>
        <Route path='/portifilo' index element={<Portifilo />}></Route>
        <Route path='/contacts' index element={<Contacts />}></Route>
        </Routes>
        <Footer /> 
        </BrowserRouter>
         </div>
    );
}

export default App;