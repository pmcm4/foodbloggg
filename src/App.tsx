import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import { ProfileLogout } from './components/profile-logout/profile-logout';
import { Login } from './components/login/login';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { CategorySolo } from './components/category-solo/category-solo';
import { AdminProfile } from './components/admin-profile/admin-profile';
import { UserProfile } from './components/user-profile/user-profile';
import { About } from './components/about/about';
import { Search } from './components/search/search';
import { Register } from './components/register/register';
import { Create } from './components/create/create';



function App() {
    return <div className={styles.App}>
        <BrowserRouter>
        <Routes>
           <Route path='/' Component={Home}/>
         </Routes>
         <Routes>
           <Route path='/login' Component={Login}/>
         </Routes>
         <Routes>
           <Route path='/register' Component={Register}/>
         </Routes>
         <Routes>
           <Route path='/cat' Component={CategorySolo}/>
         </Routes>
         <Routes>
           <Route path='/about' Component={About}/>
         </Routes>
         <Routes>
           <Route path='/contact' Component={About}/>
         </Routes>
         <Routes>
           <Route path='/search' Component={Search}/>
         </Routes>
         <Routes>
           <Route path='/profile' Component={UserProfile}/>
         </Routes>
         <Routes>
           <Route path='/adminprofile' Component={AdminProfile}/>
         </Routes>
         <Routes>
           <Route path='/create' Component={Create}/>
         </Routes>

       </BrowserRouter>   

    </div>;
}

export default App;
