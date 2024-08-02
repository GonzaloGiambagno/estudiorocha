import { motion } from 'framer-motion';
import { fadeFromLeftAnimation, fadeFromRightAnimation } from '../hooks/animation';
import '../index.css';
import BtnContacto from './BtnContacto';

const Hero = () => {
  return (
    <section className="p-4 lg:p-2.5 relative w-full overflow-hidden border-b-2 border-[#c9a951]" id='inicio'>
      <img 
        alt="foto de portada" 
        src="/images/portada.png"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative flex flex-col gap-10 lg:gap-0 justify-center lg:flex-row lg:justify-between items-center h-[650px] max-w-7xl mx-auto">
        <motion.div
          variants={fadeFromRightAnimation}
          initial="initial"
          animate="animate"
        >
          <div className="text-left text-white">
          <h1 className="text-xl md:text-2xl lg:text-3xl mb-3">ESTUDIO JURÍDICO <br/><span className='font-bold text-5xl md:text-5xl lg:text-7xl'>ROCHA & ASOCIADOS</span></h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 uppercase">
              Estamos para {" "}  
              <span className="relative inline-block">
                <span className="relative z-10 bg-clip-text">ayudarte</span>
                <span className="absolute left-0 bottom-1 w-full h-2 bg-gradient-to-r from-[#b29b59] to-[#785a28] clip-path-polygon"></span>
              </span>
            </h2>
          </div>
          <BtnContacto justify="justify-start" />
        </motion.div>
        <motion.div
          variants={fadeFromLeftAnimation}
          initial="initial"
          animate="animate"
        >
          <img
            alt="foto de portada" 
            src="/images/logoblanco.png"
            width={350}
            height={250}
            className='hidden sm:block lg:w-[400px] z-20 opacity-20 object-cover w-auto h-auto'
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

