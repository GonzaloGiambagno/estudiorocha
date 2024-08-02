import { motion } from 'framer-motion'
import { useRef } from 'react'
import { fadeUpAnimation } from '../hooks/animation'
import useWhileInView from '../hooks/useWhileInView'
import { Cards } from './Cards'
 

const Nosotros = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  
  return (
    <section className="relative my-6 lg:my-16 h-full w-full" id="nosotros">
      <div className="absolute -z-10 w-full h-full bg-[radial-gradient(#EBEEF2_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_100%,transparent_50%)] "></div>
        <motion.div 
          ref={ref}
          initial="initial"
          animate={controlAnimation}
          variants={fadeUpAnimation}
          className='flex  gap-6 md:flex-row flex-col md:justify-between max-w-7xl mx-auto p-4 xl:p-0'>
          <div>
            <h2 className="text-xl mb-3 text-[#bba25d]">
                Sobre Nosotros
            </h2>
            {/* <div className="w-1/4 h-1 bg-gradient-to-r from-[#b29b59] to-[#785a28] mb-3"></div> */}
            <p className='text-3xl text-blue-950'>Centrados en los Clientes.<br/>
            <span className=''>Impulsados por los Resultados.</span></p>
          </div>
          <div className='md:w-1/2'>
            <p className='text-justify'><span className='font-semibold'>Somos un estudio jurídico con mas de 30 años de experiencia. Voluptate ex exercitationem minus sapiente error ratione maxime dolorum blanditiis labore deleniti quaerat consectetur aliquam aliquid velit, distinctio, commodi nesciunt dolores accusantium.</span><br/><br/>
            Atque exercitationem sint quis illum doloribus provident odio tenetur veniam saepe dolor debitis soluta nesciunt, quaerat, nobis pariatur velit. Sint aut dolorum explicabo quae dicta eaque et. Magni, perferendis esse?
            Eveniet nam a quibusdam reiciendis quas? Pariatur, doloribus mollitia. Est iste minima provident, autem nemo consectetur, quia, debitis explicabo illo quasi esse facere cumque qui. Maiores eveniet voluptatum dignissimos dolores.
           </p>
          </div>
        </motion.div>
        <Cards />
    </section>
  )
}

export default Nosotros