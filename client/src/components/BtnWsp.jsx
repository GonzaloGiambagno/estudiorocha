import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { fadeOpacity } from '../hooks/animation';

const BtnWsp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial="initial"
      animate={isVisible ? 'animate' : 'initial'}
      variants={fadeOpacity}
      className="fixed bottom-4 right-4 bg-transparent p-2"
    >
      <a
        href="https://wa.me/2213526308"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/wsplogo.webp"
          alt="Mandar WhatsApp"
          width={48}
          height={48}
        />
      </a>
    </motion.div>
  );
};

export default BtnWsp;
