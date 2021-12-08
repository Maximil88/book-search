import Main from './sectioning/main/main';
import Footer from './sectioning/footer/footer';
import Header from './sectioning/header/header';
import './app.css';
import Home from './Routes/Home/Home';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Main />
      <Footer />
    </div>
  );
}

export default App;
