
import './assets/css/base/base.css';
import Login from './paginas/Login';
import Home from './paginas/Home';
import RotaPrivada from './rotas/RotaPrivada';
import Repositorios from './paginas/Repositorios';


import { ProvideAuth } from './context/Autenticacao';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { CssBaseline } from '@mui/material';
import VisualizarLista from './componentes/VisualizarLista';

function App() {
  return (
    <>
      <CssBaseline />
      <ProvideAuth>
        <BrowserRouter>

          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/privado" element={<RotaPrivada/>}>
              <Route path="" element={<Home />} />
              <Route path="repos" element={<Repositorios />} />
              <Route path="seguidores" element={<VisualizarLista tipoLista={'followers'} titulo={'Seguidores'} />} />
              <Route path="seguindo" element={<VisualizarLista tipoLista={'following'} titulo={'Seguindo'} />} />
            </Route>

          </Routes>

        </BrowserRouter>
      </ProvideAuth>
    </>
  );
}

export default App;
