import AreasTrabajo from "../components/AreasTrabajo";
import FormContacto from "../components/FormContacto";
import Hero from "../components/Hero";
import Nosotros from "../components/Nosotros";
import ProfesionalesSinFoto from "../components/ProfesionalesSinFoto";
import { Separador } from "../components/Separador";


export default function Inicio() {
  return (
    <main>
      <Hero />
      <Nosotros/>
      <AreasTrabajo />
      <ProfesionalesSinFoto />
      <Separador />
      <FormContacto />
      {/* <Profesionales /> */}
    </main>
  );
}
