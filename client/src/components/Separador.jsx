import { motion } from 'framer-motion'
import { useRef } from 'react'
import { fadeOpacity } from '../hooks/animation'
import useWhileInView from '../hooks/useWhileInView'

export const Separador = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  return (
    <div className="w-full md:h-24 bg-gradient-to-r from-[#b39b5cf8] to-[#b48738] " >
        <motion.div 
          ref={ref}
          initial="initial"
          animate={controlAnimation}
          variants={fadeOpacity} 
          className="p-4 xl:p-0 max-w-7xl mx-auto h-full flex justify-start items-center"
        >
          <div className="">
              <h3 className="text-blue-950 text-xl text-left font-semibold mb-1">Necesitas ayuda legal?</h3>
              <h4 className="text-white text-3xl text-left">Contactate con nosotros. Protegemos tus derechos</h4>
          </div>
        </motion.div>
    </div>
  )
}
