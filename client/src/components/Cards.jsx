import { motion } from 'framer-motion'
import { Briefcase, FileBadge, Users } from 'lucide-react'
import { useRef } from 'react'
import { fadeOpacity } from '../hooks/animation'
import useWhileInView from '../hooks/useWhileInView'

const cardInfo = [
    {
        title: 'Atención Personalizada',
        descripcion: 'Brindamos atención personalizada a cada uno de nuestros asistidos, asegurándonos de entender sus necesidades específicas y ofrecer soluciones adecuadas.',
        icono: <Users className='w-10 h-10 text-blue-950 opacity-80'/>,
    },
    {
        title: 'Profesionalidad',
        descripcion: 'Contamos con un equipo de abogados altamente calificados y con una vasta experiencia en diversas áreas del derecho, comprometidos con la ética y la excelencia.',
        icono: <Briefcase className='w-10 h-10 text-blue-950 opacity-80'/>,
    },
    {
        title: 'Resultados',
        descripcion: 'Nos enfocamos en obtener los mejores resultados para nuestros asistidos, utilizando estrategias legales eficaces e innovadoras. Protegemos tus derechos.',
        icono: <FileBadge className='w-10 h-10 text-blue-950 opacity-80'/>,
    },
]

export const Cards = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  return (
    <motion.div 
      ref={ref}
      initial="initial"
      animate={controlAnimation}
      variants={fadeOpacity}
      className='max-w-7xl mx-auto w-full flex flex-wrap justify-around gap-6 lg:gap-10 mt-8 md:mt-16 '>
        {cardInfo.map((card, index) => (
            <div key={index} className="border-t-4 border-[#b29b59] bg-white p-6 rounded shadow-md w-80 hover:bg-gray-50"
            >
            {card.icono}
            <div className='flex flex-col gap-3 divide-y-2 mt-3'> 
              <span className="font-bold text-blue-950 text-lg">{card.title}</span>
              <p className="line-clamp-5 py-2">
                {card.descripcion}
              </p>
            </div>
          </div>
        ))}
    </motion.div>
  )
}
