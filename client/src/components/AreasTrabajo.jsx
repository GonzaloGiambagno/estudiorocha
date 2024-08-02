import { motion } from 'framer-motion';
import { AlertCircle, Archive, Award, Briefcase, Building, Calendar, FileText, Gavel, Shield, ShoppingCart, Users } from 'lucide-react';
import { useRef } from 'react';
import { fadeOpacity } from '../hooks/animation';
import useWhileInView from '../hooks/useWhileInView';

const areas = [
    { title: 'Administrativo', icon: <FileText /> },
    { title: 'Laboral', icon: <Briefcase /> },
    { title: 'Civil y comercial', icon: <Building /> },
    { title: 'Familia', icon: <Users /> },
    { title: 'Previsional', icon: <Calendar /> },
    { title: 'Penal', icon: <Gavel /> },
    { title: 'Sucesiones', icon: <Archive /> },
    { title: 'Daños y perjuicios', icon: <AlertCircle /> },
    { title: 'Derecho del consumidor', icon: <ShoppingCart /> },
    { title: 'Derecho del deporte', icon: <Award /> },
    { title: 'Amparos', icon: <Shield /> },
]

const AreasTrabajo = () => {
    const ref = useRef(null)
    const controlAnimation = useWhileInView(ref)
  return (
    <section id="especialidades" className="bg-[#18182b] w-full h-full">
        <motion.div 
            ref={ref}
            initial="initial"
            animate={controlAnimation}
            variants={fadeOpacity} 
            className="max-w-7xl mx-auto py-14 flex flex-wrap px-4 lg:px-0 md:justify-center xl:justify-between gap-10 xl:gap-0">
            <div className="relative">
                <h2 className="text-xl mb-3 text-[#c9ad61]">
                    Especialidades
                </h2>
                {/* <h3 className="text-white text-lg">Necesitas Ayuda?</h3> */}
                <h3 className="text-white text-lg">Contamos con profesionales capacitados en todas las áreas legales.</h3>
                <ul className="grid grid-cols-2 xl:grid-cols-3 gap-4 mt-8">
                    {areas.map((area, index) => (
                        <li key={index} className="flex items-center space-x-2 text-white">
                            {area.icon}
                            <span>{area.title}</span>
                        </li>
                    ))}
                </ul>
                <div className="absolute mt-5 xl:mt-0 xl:right-0 xl:bottom-0 w-full xl:w-1/4 h-1 bg-gradient-to-r from-[#b29a5963] to-[#b98e44]"></div>
            </div>
            <div className="flex items-center">
                <img width={450} height={250} src="/images/galeria/unnamed.jpg" alt="Legal Image" loading="lazy" className="md:shadow-[10px_10px_0px_3px_#323954] rounded"/>
            </div>
        </motion.div>
    </section>
  )
}

export default AreasTrabajo