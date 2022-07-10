
import './assets/css/base/base.css';
import Login from './componentes/Login';
import Home from './componentes/Home';
import RotaPrivada from './componentes/RotaPrivada';
import Repositorios from './componentes/Repositorios';
import Seguidores from './componentes/Seguidores';
import Seguindo from './componentes/Seguindo';


import { ProvideAuth } from './componentes/Autenticacao';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <ProvideAuth>
        <BrowserRouter>

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/privado" element={<RotaPrivada/>}>
              <Route path="" element={<Home />} />
              <Route path="repos" element={<Repositorios />} />
              <Route path="seguidores" element={<Seguidores />} />
              <Route path="seguindo" element={<Seguindo />} />



            </Route>

          </Routes>

        </BrowserRouter>
      </ProvideAuth>
    </>
  );
}

export default App;
