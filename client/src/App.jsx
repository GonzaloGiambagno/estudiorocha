import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import LayoutPages from './components/LayoutPages';
import './index.css';
import AvisoLegal from './pages/AvisoLegal';
import Inicio from './pages/Inicio';
import PoliticaDePrivacidad from './pages/PoliticaDePrivacidad';

function App() {

  return (
    <html lang="es" className="scroll-smooth scroll-pt-36">
      <body className="font-roboto antialiased bg-gray-50">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Inicio />} />
            </Route>

            <Route element={<LayoutPages />}>
            <Route path="/aviso-legal" element={<AvisoLegal />} />
            <Route path="/politica-de-privacidad" element={<PoliticaDePrivacidad />} />
          </Route>
        </Routes>
      </body>
    </html>
  );
}

export default App;
