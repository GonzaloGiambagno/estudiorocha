import { Dialog, DialogPanel } from '@headlessui/react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fadeOpacity } from '../../hooks/animation';
import { cn } from '../../utils/cn';
import BtnContacto from '../BtnContacto';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleClick = (event, href) => {
    event.preventDefault();
    if (href === '/') {
      navigate(href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleStickyNavbar = () => {
    if (window.scrollY >= 20) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);

    return () => {
      window.removeEventListener('scroll', handleStickyNavbar);
    };
  }, []);

  const menuData = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Profesionales', href: '#profesionales' },
  ];

  return (
    <header className={cn('fixed left-0 top-0 right-0 z-50 transition-all duration-500 max-md:z-[500]', sticky ? 'bg-gray-950/75 backdrop-blur' : '')}>
      <motion.div variants={fadeOpacity} initial="initial" animate="animate">
        <nav aria-label="global" className="mx-auto flex max-w-7xl items-center justify-between px-4 xl:px-0 py-3">
          <div className="flex lg:flex-1">
            <a href="#inicio" className="-m-1.5 p-1.5">
              <img alt="logo del estudio" src="/images/logoblanco.png" width={60} height={60} />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen && <Menu aria-hidden="true" className="h-6 w-6" />}
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-20">
            {menuData.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-md uppercase font-semibold leading-6 text-gray-100 hover:text-[#c9a951]"
              >
                {item.name}
              </a>
            ))}
          </div>
          <BtnContacto justify="hidden lg:justify-end" />
        </nav>
      </motion.div>
      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black bg-opacity-60 backdrop-blur-lg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">RA</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md py-1 text-white"
            >
              <span className="sr-only">Cerrar menu</span>
              <Menu aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/40">
              <div className="space-y-2 py-6">
                {menuData.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className="uppercase -mx-3 block rounded-lg px-3 py-2 text-base text-center font-semibold leading-7 text-white hover:bg-gray-500/50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#contacto"
                  onClick={(e) => handleClick(e, "#contacto")}
                  className="bg-gradient-to-r from-[#b29b59] to-[#785a28] hover:opacity-70 -mx-3 block rounded-lg px-3 py-2 text-base text-center font-semibold leading-7 text-white hover:bg-gray-50 uppercase"
                >
                  Contactanos
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
