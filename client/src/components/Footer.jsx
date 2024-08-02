import { motion } from 'framer-motion';
import { useRef } from 'react';
import { fadeOpacity } from '../hooks/animation';
import useWhileInView from '../hooks/useWhileInView';

const menuData = [
    { name: 'Inicio', href: '#' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Áreas de trabajo', href: '#areastrabajo' },
    { name: 'Profesionales', href: '#profesionales' },
    { name: 'Contacto', href: '#contacto'}
];

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const ref = useRef(null)
    const controlAnimation = useWhileInView(ref)
  return (
    <footer id="footer" className="bg-[#18182b] w-full h-full">
        <motion.div 
            ref={ref}
            initial="initial"
            animate={controlAnimation}
            variants={fadeOpacity}
            className="max-w-7xl mx-auto p-4 xl:p-0"
        >
            <div className="flex flex-row flex-wrap py-8 items-start gap-10 md:gap-0 justify-center md:justify-between">
                <div className="opacity-90 flex flex-col h-full md:gap-10">
                    <img alt="logo-del-estudio" src="/images/logoblanco.png" width={200} height={100} loading="lazy" />
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold text-lg text-[#c9ad61]">Menu</h3>
                    {menuData.map((item, index)=> (
                       <a key={index} href={item.href} className="text-white/90 appearance-none cursor-pointer hover:text-gray-500">
                            {item.name}
                       </a>
                    ))}

                </div>
                <div className="flex flex-col gap-3 h-full ">
                    <h3 className="font-semibold text-lg text-[#c9ad61]">Informacion Legal</h3>
                    <a href="/aviso-legal" className="text-white/90 appearance-none cursor-pointer hover:text-gray-500">Aviso Legal</a>
                    <a href="/politica-de-privacidad" className="text-white/90 appearance-none cursor-pointer hover:text-gray-500">Politica de privacidad</a>
                </div>
                <div className="hidden lg:block">
                    <iframe title="ubicacionEstudio" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13086.810919844485!2d-57.9585291!3d-34.9139089!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e635ac645465%3A0x354cbde6651ce7d0!2sESTUDIO%20JURIDICO%20ROCHA%20%26%20ASOCIADOS!5e0!3m2!1ses-419!2sar!4v1720742395681!5m2!1ses-419!2sar" width="300" height="250" className="rounded" loading="lazy"></iframe>
                </div>
            </div>
        </motion.div>
        <div className="max-w-7xl mx-auto text-center md:text-left">
            <hr className="border-white/60"/>
            <p className="w-full mt-4 pb-3 text-white/70 text-sm">Todos los derechos reservados. © {currentYear} - Estudio Jurídico <strong className="text-white/90">ROCHA & ASOCIADOS</strong></p>
        </div>
    </footer>
  )
}

export default Footer