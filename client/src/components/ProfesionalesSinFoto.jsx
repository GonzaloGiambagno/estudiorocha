import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import { useRef } from 'react'
import { fadeOpacity } from '../hooks/animation'
import useWhileInView from '../hooks/useWhileInView'


const profesionales =  [
    {
        nombre : 'Nombre Profesional', 
        img : '/images/equipo/abogado1.jpg',
        Linkedin : '',
        alt: 'Foto perfil del abogado: ',
        puesto: 'CEO'
    },
    {
        nombre : 'Nombre Profesional', 
        img : '/images/equipo/abogado2.jpg',
        Linkedin : 'Foto perfil del abogado: ',
        alt: 'Foto perfil del abogado: ',
        puesto: 'Asociado'
    },
    {
        nombre : 'Nombre Profesional', 
        img : '/images/equipo/abogado3.jpg',
        Linkedin : 'Foto perfil del abogado: ',
        alt: 'Foto perfil del abogado: ',
        puesto: 'Asociado'
    },
    {
        nombre : 'Nombre Profesional', 
        img : '/images/equipo/abogado4.jpg',
        Linkedin : 'Foto perfil del abogado: ',
        alt: 'Foto perfil del abogado: ',
        puesto: 'Asociado'
    }
]

const ProfesionalesSinFoto = () => {
    const ref = useRef(null)
    const controlAnimation = useWhileInView(ref)
  return (
    <section className='p-4 xl:p-0 mx-auto max-w-7xl my-10' id='profesionales'>
        <motion.div 
            ref={ref}
            initial="initial"
            animate={controlAnimation}
            variants={fadeOpacity}
        >
        <h2 className="text-xl mb-2 text-[#bba25d]">
            Nuestro Equipo
        </h2>
        <h3 className='text-2xl text-blue-950'>Queremos que nos conozcas</h3>
        <div className="grid sm:grid-cols-2 gap-8 mx-auto mt-12 lg:w-1/2">
            {profesionales.map((profesional, index)=> (
                <div key={index} className="bg-[#18182b] border rounded-lg shadow-md p-4 flex flex-wrap justify-between items-center">
                    <div>
                        <h4 className="text-base font-semibold text-white">{profesional.nombre}</h4>
                        <p className="text-xs mt-2 text-white">{profesional.puesto}</p>
                    </div>
                    <Linkedin className='h-6 w-6 text-[#bba25d] mt-4 cursor-pointer' />
                </div>
            ))}
        </div>
        </motion.div>
    </section>
  )
}

export default ProfesionalesSinFoto;