import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Conhecimentos from './pages/Conhecimentos';
import Contato from './pages/Contato';
import Servicos from './pages/Servicos'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Home/>
          <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/Conhecimentos' element={<Conhecimentos/>} />
          <Route path='/Contato' element={<Contato/>} />
          <Route path='/Servicos' element={<Servicos/>} />

          </Routes>

        
      </header>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
