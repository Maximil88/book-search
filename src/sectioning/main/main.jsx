import {Routes, Route} from 'react-router-dom';

import Home from '../../Routes/Home/Home';
import About from '../../Routes/About/About';
import Login from '../../Routes/Login/Login';
import Search from '../../Routes/Search';
import './style.css';

function Main() {

  return (
    <main>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Login" element={<Login />} />
        <Route path="Search" element={<Search />} >
          <Route path=":id" element ={<p>Some Id has been found</p>} />
        </Route>
        <Route path="*" element={<p>There's nothing here!</p>} />
        </Routes>
    </main>
  );
}



export default Main;
