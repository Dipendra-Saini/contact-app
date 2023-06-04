// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Contact_list from './component/contact_list_app';
import Login from './component/login';
import Signin from './component/signin';


function App() {
  return (
      // eslint-disable-next-line react/jsx-pascal-case
      // <Contact_list />
      <>
        <Routes>
          <Route path = '/' element = {<Login/>} />
          <Route path = '/signup' element = {<Signin/>} />
          <Route path = '/contact-list' element = {<Contact_list/>} />
        </Routes>
      </>
      // <Signin />
  );
}

export default App;
