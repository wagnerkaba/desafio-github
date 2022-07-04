
import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Home from './paginas/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <Routes>
          <Route exact path='/' element={<Home/>}/>


        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
