import { Dialog, DialogPanel } from '@headlessui/react';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar2 = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Hook para navegación programática

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
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/#nosotros' },
    { name: 'Especialidades', href: '/#especialidades' },
    { name: 'Profesionales', href: '/#profesionales' },
  ];

  const handleNavigation = (event, href) => {
    event.preventDefault();
    const [pathname, hash] = href.split('#');
    
    navigate(pathname, { replace: true });

    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500); 
    }
  };

  return (
    <header className={`transition-all duration-500 ${sticky ? 'bg-gray-950/75 backdrop-blur' : 'bg-[#18182B] backdrop-blur'}`}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-4 xl:px-0 py-3">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img alt="logo del estudio" src="/images/logoblanco.png" width={60} height={60} />
          </Link>
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
            <Link
              key={index}
              to={item.href}
              onClick={(e) => handleNavigation(e, item.href)}
              className="text-md uppercase font-semibold leading-6 text-gray-100 hover:text-[#c9a951]"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className='lg:flex lg:flex-1 hidden lg:justify-end'>
          <a href="/#contacto"
            onClick={(e) => handleNavigation(e, "#contacto")} 
            className="relative rounded h-9 px-4 py-1.5 overflow-hidden group bg-[#645630] hover:bg-gradient-to-r hover:from-[#b29a59ee] hover:to-[#785a28] text-white transition-all ease-out duration-300 shadow-xl"
          >
            <span className="absolute right-0 w-8 lg:h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative text-white uppercase">Contáctanos</span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black bg-opacity-60 backdrop-blur-lg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">RA</span>
            </Link>
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
                  <Link
                    key={index}
                    to={item.href}
                    onClick={(e) => handleNavigation(e, item.href)}
                    className="uppercase -mx-3 block rounded-lg px-3 py-2 text-base text-center font-semibold leading-7 text-white hover:bg-gray-500/50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="/#contacto"
                  onClick={(e) => handleNavigation(e, "/#contacto")}
                  className="bg-gradient-to-r from-[#b29b59] to-[#785a28] hover:opacity-70 -mx-3 block rounded-lg px-3 py-2 text-base text-center font-semibold leading-7 text-white hover:bg-gray-50 uppercase"
                >
                  Contactanos
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar2;
