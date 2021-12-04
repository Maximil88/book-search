import { Routes, Route } from 'react-router-dom';
import Main from './sectioning/main/main';
import Footer from './sectioning/footer/footer';
import Header from './sectioning/header/header';
import Search from './Routes/Search/Search';
import './app.css';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/Search" element={<Search />}/> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
