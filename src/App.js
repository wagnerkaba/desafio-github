
import './assets/css/base/base.css';
import Login from './componentes/Login';
import Home from './componentes/Home';
import RotaPrivada from './componentes/RotaPrivada';
import Repositorios from './componentes/Repositorios';
import { ProvideAuth } from './componentes/Autenticacao';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <ProvideAuth>
        <BrowserRouter>

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/privado" element={<RotaPrivada />}>
              <Route path="" element={<Home />} />
              <Route path="repos" element={<Repositorios />} />


            </Route>

          </Routes>

        </BrowserRouter>
      </ProvideAuth>
    </>
  );
}

export default App;
